(() => {
  const DATA = window.PRACTICE_DATA;
  const SETTINGS_KEY = "taigi-practice-settings-v2";
  const PROGRESS_KEY = "taigi-practice-keys";
  const MIN_START_KEYS = 6;
  const MIN_START_WORDS = 30;
  const MIN_SAMPLES = 5;
  const SPEED_SMOOTHING = 0.2;
  const MAX_KEY_INTERVAL_MS = 2000;
  const DEFAULT_TARGET = 125;
  const LESSON_MAX_WORDS = 8;
  const LESSON_MIN_WORDS = 4;
  const LESSON_SYLLABLES = 24;

  const TONE_COMBINING_MARKS = {
    "\u0301": 2,
    "\u0300": 3,
    "\u0302": 5,
    "\u030C": 6,
    "\u0306": 6,
    "\u0304": 7,
    "\u030D": 8,
    "\u030B": 9,
  };
  // 台語齒盤 Telex：1/4=x、2/8=v、3=y、5=d、7=w、9=q
  const TELEX_TONE_LETTERS = { 1: "x", 2: "v", 3: "y", 4: "x", 5: "d", 7: "w", 8: "v", 9: "q" };
  const TONE_MARK_STRIP_RE = /[\u0300\u0301\u0302\u0304\u0306\u030B\u030C\u030D]/g;
  // 羅馬字的音節袂用這寡字母收尾，看著就是已經拍落去的調號
  const TONE_CODE_END_RE = /[0-9xvydwq]$/;
  const KEY_RE = /[a-z0-9]/;
  const CODE_RE = /^[a-z0-9][a-z0-9 -]*$/;

  function countSyllables(roman) {
    return roman.split(/--+|-+|\s+/).filter((part) => /\p{L}/u.test(part)).length;
  }

  function countKeys(code) {
    let count = 0;
    for (const ch of code) if (KEY_RE.test(ch)) count += 1;
    return count;
  }

  /**
   * 一个音節的理論輸入碼。complete 為 false 表示這个音節可能猶咧拍，
   * 無調符就先莫補第一、四聲的調號。
   */
  function syllableCode(syllable, method, complete) {
    const nfd = syllable.normalize("NFD").replace(/\u0131/g, "i");
    let tone = 0;
    for (const ch of nfd) {
      if (TONE_COMBINING_MARKS[ch]) {
        tone = TONE_COMBINING_MARKS[ch];
        break;
      }
    }
    const base = nfd
      .replace(TONE_MARK_STRIP_RE, "")
      .normalize("NFC")
      .toLowerCase()
      .replace(/hⁿ/g, "ⁿh")
      .replace(/o\u0358/g, "oo")
      .replace(/ⁿ/g, "nn");
    if (TONE_CODE_END_RE.test(base)) return base;
    if (!tone && !complete) return base;
    if (!tone) tone = /[ptkh]$/.test(base) ? 4 : 1;
    return base + (method === "numeric" ? String(tone) : TELEX_TONE_LETTERS[tone] || "");
  }

  function romanToCode(text, method, finalize = true) {
    const tokens = text.normalize("NFC").split(/(\s+|-+)/);
    return tokens
      .map((token, index) => {
        if (/^\s+$/.test(token)) return " ";
        if (!/\p{L}/u.test(token)) return token.toLowerCase();
        return syllableCode(token, method, finalize || index < tokens.length - 1);
      })
      .join("");
  }

  const combos = new Map();

  function comboOf(sys, method) {
    const id = `${sys}-${method}`;
    if (combos.has(id)) return combos.get(id);
    const words = [];
    const freq = new Map();
    for (const [hanji, tailo, poj, wordFreq = 0] of DATA.words) {
      const roman = sys === "poj" ? poj : tailo;
      const code = romanToCode(roman, method);
      if (!CODE_RE.test(code) || countKeys(code) === 0) continue;
      for (const ch of code) {
        if (KEY_RE.test(ch)) freq.set(ch, (freq.get(ch) || 0) + 1);
      }
      words.push({
        hanji,
        roman,
        code,
        freq: Number(wordFreq) || 0,
        weight: wordWeight(wordFreq),
        keys: [...new Set(code.replace(/[^a-z0-9]/g, ""))],
        syllables: countSyllables(roman),
      });
    }
    const order = [...freq.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([key]) => ({ key }));
    const rank = new Map(order.map(({ key }, index) => [key, index]));
    const cover = new Array(order.length).fill(0);
    for (const word of words) {
      word.maxRank = Math.max(...word.keys.map((key) => rank.get(key)));
      cover[word.maxRank] += 1;
    }
    let startKeys = Math.min(MIN_START_KEYS, order.length);
    let available = cover.slice(0, startKeys).reduce((sum, n) => sum + n, 0);
    while (startKeys < order.length && available < MIN_START_WORDS) {
      available += cover[startKeys];
      startKeys += 1;
    }
    const combo = { id, order, cover, words, startKeys };
    combos.set(id, combo);
    return combo;
  }

  function loadJson(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch {
      return {};
    }
  }

  const state = {
    settings: loadJson(SETTINGS_KEY),
    progress: loadJson(PROGRESS_KEY),
    lesson: null,
    track: null,
    startedAt: null,
    finished: false,
    composing: false,
  };

  const els = {
    summary: document.getElementById("settingsSummary"),
    note: document.getElementById("levelNote"),
    systemSelect: document.getElementById("systemSelect"),
    methodSelect: document.getElementById("methodSelect"),
    inputSelect: document.getElementById("inputSelect"),
    hintSelect: document.getElementById("hintSelect"),
    targetSelect: document.getElementById("targetSelect"),
    keyTiles: document.getElementById("keyTiles"),
    line: document.getElementById("lessonLine"),
    input: document.getElementById("lessonInput"),
    banner: document.getElementById("lessonBanner"),
    nextHint: document.getElementById("nextHint"),
    reset: document.getElementById("resetBtn"),
    keyTip: document.createElement("div"),
  };
  els.keyTip.className = "key-tooltip";
  els.keyTip.hidden = true;
  els.keyTip.setAttribute("role", "tooltip");
  els.keyTip.setAttribute("aria-hidden", "true");
  document.body.appendChild(els.keyTip);

  function system() {
    return els.systemSelect.value === "poj" ? "poj" : "tailo";
  }

  function method() {
    return els.methodSelect.value === "telex" ? "telex" : "numeric";
  }

  function inputMode() {
    return els.inputSelect.value === "hanji" ? "hanji" : "roman";
  }

  function practiceNames() {
    return {
      system: system() === "poj" ? "白話字" : "台羅",
      method: method() === "telex" ? "Telex" : "數字調",
      input: inputMode() === "roman" ? "拍羅馬字" : "拍漢字",
    };
  }

  function showHint() {
    return els.hintSelect.value === "code";
  }

  function target() {
    return Number(els.targetSelect.value) || DEFAULT_TARGET;
  }

  function combo() {
    return comboOf(system(), method());
  }

  function progressId() {
    return `${system()}-${method()}-${inputMode()}`;
  }

  function progress() {
    const current = combo();
    const id = progressId();
    let saved = state.progress[id];
    if (!saved || typeof saved !== "object") {
      saved = { unlocked: current.startKeys, keys: {} };
      state.progress[id] = saved;
    }
    if (!saved.keys || typeof saved.keys !== "object") saved.keys = {};
    const unlocked = Number(saved.unlocked) || 0;
    saved.unlocked = Math.min(current.order.length, Math.max(current.startKeys, unlocked));
    return saved;
  }

  /** 舊進度只照羅馬字佮輸入法分開。拆開拍漢字、拍羅馬字的時陣，兩組攏沿用原本的紀錄。 */
  function migrateProgress() {
    const legacy = /^(tailo|poj)-(numeric|telex)$/;
    let changed = false;
    for (const id of Object.keys(state.progress)) {
      if (!legacy.test(id)) continue;
      const saved = state.progress[id];
      if (saved && typeof saved === "object") {
        for (const mode of ["roman", "hanji"]) {
          const nextId = `${id}-${mode}`;
          if (!state.progress[nextId]) {
            state.progress[nextId] = JSON.parse(JSON.stringify(saved));
            changed = true;
          }
        }
      }
      delete state.progress[id];
      changed = true;
    }
    if (changed) saveProgress();
  }

  function saveSettings() {
    state.settings = {
      system: system(),
      method: method(),
      inputMode: inputMode(),
      hint: showHint() ? "code" : "none",
      target: target(),
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
  }

  function saveProgress() {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress));
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function keySpeed(stat) {
    return stat && stat.n > 0 ? 60000 / stat.ms : 0;
  }

  function confidence(stat) {
    if (!stat || stat.n === 0) return 0;
    const ratio = Math.min(1, keySpeed(stat) / target());
    return stat.n < MIN_SAMPLES ? Math.min(ratio, 0.99) : ratio;
  }

  function reachedTarget(stat) {
    return Boolean(stat) && stat.n >= MIN_SAMPLES && keySpeed(stat) >= target();
  }

  function recordHit(key, ms) {
    const keys = progress().keys;
    const stat = keys[key] || (keys[key] = { ms, n: 0, miss: 0 });
    stat.ms = stat.n === 0 ? ms : stat.ms + (ms - stat.ms) * SPEED_SMOOTHING;
    stat.n += 1;
  }

  function recordMiss(key) {
    const keys = progress().keys;
    const stat = keys[key] || (keys[key] = { ms: 0, n: 0, miss: 0 });
    stat.miss += 1;
  }

  function lessonPool(current, unlocked) {
    return current.words.filter((word) => word.maxRank < unlocked);
  }

  function practicableKeys(pool) {
    const keys = new Set();
    for (const word of pool) word.keys.forEach((key) => keys.add(key));
    return keys;
  }

  /** 所有練會著的鍵攏到目標速度，就開下一个鍵。 */
  function unlockReadyKeys() {
    const current = combo();
    const saved = progress();
    const opened = [];
    while (saved.unlocked < current.order.length) {
      const practicable = practicableKeys(lessonPool(current, saved.unlocked));
      const ready = current.order
        .slice(0, saved.unlocked)
        .every(({ key }) => !practicable.has(key) || reachedTarget(saved.keys[key]));
      if (!ready) break;
      opened.push(current.order[saved.unlocked].key);
      saved.unlocked += 1;
    }
    return opened;
  }

  function focusKey(current, saved, practicable) {
    let focus = null;
    let lowest = Infinity;
    current.order.slice(0, saved.unlocked).forEach(({ key }) => {
      if (!practicable.has(key)) return;
      const score = confidence(saved.keys[key]);
      if (score <= lowest) {
        focus = key;
        lowest = score;
      }
    });
    return focus;
  }

  // 歌詞詞頻差很多。用 log(1+freq) 才會優先高頻，又無予「的、你、我」佔滿每一列。
  const UNSEEN_WORD_WEIGHT = 0.15;

  function wordWeight(freq) {
    const count = Number(freq) || 0;
    return count > 0 ? Math.log1p(count) : UNSEEN_WORD_WEIGHT;
  }

  function weightedShuffle(list) {
    return list
      .map((word) => ({ word, score: Math.random() ** (1 / word.weight) }))
      .sort((a, b) => b.score - a.score)
      .map((item) => item.word);
  }

  /** 有詞頻的詞優先。這个鍵若無高頻詞，才退回辭典裡無出現佇歌詞的詞目。 */
  function preferFrequent(list) {
    const known = list.filter((word) => word.freq > 0);
    return known.length > 0 ? known : list;
  }

  function pickLessonWords(pool, focus) {
    const picked = [];
    let syllables = 0;
    const take = (list) => {
      for (const word of weightedShuffle(list)) {
        if (picked.length >= LESSON_MAX_WORDS) return;
        if (syllables >= LESSON_SYLLABLES && picked.length >= LESSON_MIN_WORDS) return;
        if (picked.includes(word)) continue;
        picked.push(word);
        syllables += word.syllables;
      }
    };
    if (focus) take(preferFrequent(pool.filter((word) => word.keys.includes(focus))));
    take(preferFrequent(pool));
    return picked;
  }

  function renderKeys() {
    const current = combo();
    const saved = progress();
    const practicable = practicableKeys(lessonPool(current, saved.unlocked));
    const focus = focusKey(current, saved, practicable);
    els.keyTiles.replaceChildren();
    current.order.forEach(({ key }, index) => {
      const tile = document.createElement("span");
      const stat = saved.keys[key];
      const locked = index >= saved.unlocked;
      const idle = !locked && !practicable.has(key);
      const measured = !locked && stat && stat.n > 0;
      tile.className = "key-tile";
      tile.textContent = key;
      tile.dataset.key = key;
      tile.setAttribute("role", "listitem");
      if (locked) {
        tile.classList.add("is-locked");
        tile.dataset.status = "猶未開";
      } else if (idle) {
        tile.classList.add("is-idle");
        tile.dataset.status = "等後壁的齒攏開了才有詞通練";
      }
      if (measured) {
        const mix = `${Math.round(confidence(stat) * 100)}%`;
        tile.dataset.speed = String(Math.round(keySpeed(stat)));
        tile.dataset.mix = mix;
        const miss = inputMode() === "roman" ? ` · 毋著 ${stat.miss || 0} 擺` : "";
        tile.dataset.meta = `拍 ${stat.n} 擺${miss}`;
        if (!idle) {
          tile.classList.add("has-speed");
          tile.style.setProperty("--key-mix", mix);
        }
      } else if (!tile.dataset.status) {
        tile.dataset.status = "猶未有紀錄";
      }
      const label = [key];
      if (tile.dataset.speed) label.push(`${tile.dataset.speed} 齒/分`, tile.dataset.meta);
      if (tile.dataset.status) label.push(tile.dataset.status);
      tile.setAttribute("aria-label", label.join("，"));
      if (key === focus) tile.classList.add("is-focus");
      els.keyTiles.appendChild(tile);
    });
    const hovered = els.keyTiles.querySelector(".key-tile:hover");
    if (hovered) showKeyTip(hovered);
    else hideKeyTip();
    return focus;
  }

  function showKeyTip(tile) {
    const tip = els.keyTip;
    tip.replaceChildren();
    const name = document.createElement("div");
    name.className = "key-tooltip-key";
    name.textContent = tile.dataset.key || "";
    tip.appendChild(name);

    const speed = document.createElement("div");
    speed.className = "key-tooltip-speed";
    if (tile.dataset.speed) {
      speed.classList.add("is-measured");
      speed.style.setProperty("--tip-mix", tile.dataset.mix || "0%");
      speed.append(tile.dataset.speed);
      const unit = document.createElement("span");
      unit.className = "key-tooltip-unit";
      unit.textContent = " 齒/分";
      speed.append(unit);
    } else {
      speed.classList.add("is-empty");
      speed.textContent = tile.dataset.status || "猶未有紀錄";
    }
    tip.appendChild(speed);

    if (tile.dataset.meta) {
      const meta = document.createElement("div");
      meta.className = "key-tooltip-meta";
      meta.textContent = tile.dataset.meta;
      tip.appendChild(meta);
    }
    if (tile.dataset.speed && tile.dataset.status) {
      const note = document.createElement("div");
      note.className = "key-tooltip-meta";
      note.textContent = tile.dataset.status;
      tip.appendChild(note);
    }

    tip.hidden = false;
    placeKeyTip(tile);
  }

  function hideKeyTip() {
    els.keyTip.hidden = true;
  }

  function placeKeyTip(tile) {
    const tip = els.keyTip;
    const rect = tile.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const gap = 8;
    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    let top = rect.bottom + gap;
    left = Math.max(gap, Math.min(left, window.innerWidth - tipRect.width - gap));
    if (top + tipRect.height > window.innerHeight - gap) top = rect.top - tipRect.height - gap;
    if (top < gap) top = gap;
    tip.style.left = `${Math.round(left)}px`;
    tip.style.top = `${Math.round(top)}px`;
  }

  function updateSummary() {
    const current = combo();2
    const saved = progress();
    const names = practiceNames();
    els.summary.textContent = `${names.system} · ${names.method} · ${names.input} · 目標 ${target()} 齒/分`;
    const poolSize = lessonPool(current, saved.unlocked).length;
    const next = current.order[saved.unlocked];
    els.note.textContent =
      `已經解鎖 ${saved.unlocked} / ${current.order.length} 齒`;
  }

  function hintHtml(word) {
    if (!showHint()) return "";
    return `<span class="tone-assist">${escapeHtml(word.code)}</span>`;
  }

  function normalizeHanji(text) {
    return (text || "").normalize("NFC").replace(/\s+/g, "");
  }

  function typedOf(raw, finalize = false) {
    if (state.lesson.mode === "hanji") return normalizeHanji(raw);
    return romanToCode((raw || "").toLowerCase(), method(), finalize);
  }

  function resetTrack() {
    state.track = { prefix: 0, missAt: -1, misses: 0, words: 0, lastAt: null };
  }

  function renderLesson(words, options = {}) {
    const mode = inputMode();
    const fragments = [];
    const expected = [];
    const wordOfMark = [];
    words.forEach((word, index) => {
      const hint = hintHtml(word);
      if (mode === "hanji") {
        fragments.push(
          `<ruby class="char-mark">${escapeHtml(word.hanji)}<rt class="${hint ? "has-tone-assist" : ""}">${hint}${escapeHtml(word.roman)}</rt></ruby>`,
        );
        expected.push(normalizeHanji(word.hanji));
        wordOfMark.push(word);
        return;
      }
      fragments.push(`<span class="char-mark">${escapeHtml(word.roman)}${hint}</span>`);
      expected.push(word.code);
      wordOfMark.push(word);
      if (index < words.length - 1) {
        fragments.push(`<span class="word-gap char-mark"> </span>`);
        expected.push(" ");
        wordOfMark.push(null);
      }
    });
    els.line.innerHTML = fragments.join("");
    state.lesson = {
      words,
      mode,
      expected,
      wordOfMark,
      marks: [...els.line.querySelectorAll(".char-mark")],
      target: expected.join(""),
    };
    if (!options.keepTimer) {
      els.input.value = "";
      els.input.readOnly = false;
      els.nextHint.hidden = true;
      state.finished = false;
      state.startedAt = null;
      resetTrack();
    }
    if (!options.keepBanner) {
      els.banner.hidden = true;
      els.banner.textContent = "";
    }
    evaluate(typedOf(els.input.value));
    if (!options.keepTimer) els.input.focus();
  }

  function beginLesson(options = {}) {
    const current = combo();
    const saved = progress();
    const pool = lessonPool(current, saved.unlocked);
    const focus = renderKeys();
    updateSummary();
    const words = pickLessonWords(pool, focus);
    if (words.length > 0) renderLesson(words, options);
  }

  function evaluate(typed) {
    const lesson = state.lesson;
    let cursor = 0;
    let correctSyllables = 0;
    let correctKeys = 0;
    let leadingWords = 0;
    let broken = false;
    lesson.marks.forEach((element, index) => {
      element.classList.remove("correct", "incorrect", "current");
      const expected = lesson.expected[index];
      const word = lesson.wordOfMark[index];
      const slice = typed.slice(cursor, cursor + expected.length);
      cursor += expected.length;
      if (slice.length === 0) {
        broken = true;
        return;
      }
      if (slice === expected) {
        element.classList.add("correct");
        if (!word) return;
        correctSyllables += word.syllables;
        correctKeys += countKeys(word.code);
        if (!broken) leadingWords += 1;
        return;
      }
      broken = true;
      if (expected.startsWith(slice)) {
        element.classList.add("current");
      } else {
        element.classList.add("incorrect");
      }
    });
    return { leadingWords, correctKeys, correctSyllables };
  }

  /** 羅馬字模式：對照輸入碼，逐鍵記錄速度佮拍毋著的鍵。 */
  function trackRoman(typed) {
    const track = state.track;
    const goal = state.lesson.target;
    const now = performance.now();
    let prefix = 0;
    while (prefix < typed.length && prefix < goal.length && typed[prefix] === goal[prefix]) {
      prefix += 1;
    }
    let changed = false;
    if (prefix > track.prefix) {
      if (track.lastAt !== null) {
        const perKey = (now - track.lastAt) / (prefix - track.prefix);
        if (perKey <= MAX_KEY_INTERVAL_MS) {
          for (let index = track.prefix; index < prefix; index += 1) {
            if (!KEY_RE.test(goal[index])) continue;
            recordHit(goal[index], perKey);
            changed = true;
          }
        }
      }
      track.lastAt = now;
    } else if (prefix < track.prefix) {
      track.lastAt = now;
    }
    track.prefix = prefix;
    if (typed.length > prefix) {
      if (track.missAt !== prefix && KEY_RE.test(goal[prefix] || "")) {
        recordMiss(goal[prefix]);
        track.misses += 1;
        changed = true;
      }
      track.missAt = prefix;
    } else {
      track.missAt = -1;
    }
    return changed;
  }

  /** 漢字模式看袂著逐鍵，用拍好一个詞的時間平均分予伊的輸入碼。 */
  function trackHanji(leadingWords) {
    const track = state.track;
    const now = performance.now();
    let changed = false;
    if (leadingWords > track.words) {
      if (track.lastAt !== null) {
        const keys = state.lesson.words
          .slice(track.words, leadingWords)
          .flatMap((word) => [...word.code].filter((ch) => KEY_RE.test(ch)));
        const perKey = (now - track.lastAt) / keys.length;
        if (perKey <= MAX_KEY_INTERVAL_MS) {
          keys.forEach((key) => recordHit(key, perKey));
          changed = keys.length > 0;
        }
      }
      track.lastAt = now;
    } else if (leadingWords < track.words) {
      track.lastAt = now;
    }
    track.words = leadingWords;
    return changed;
  }

  function formatElapsed(seconds) {
    const total = Math.round(seconds);
    return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
  }

  function finishLesson() {
    const lesson = state.lesson;
    const elapsed = state.startedAt ? (Date.now() - state.startedAt) / 1000 : 0;
    const { correctKeys, correctSyllables } = evaluate(lesson.target);
    const perMinute = (count) => (elapsed > 0 ? (count / elapsed) * 60 : 0);
    const opened = unlockReadyKeys();
    saveProgress();
    renderKeys();
    updateSummary();

    const parts = [
      `${Math.round(perMinute(correctKeys))} 齒/分`,
      `${perMinute(correctSyllables).toFixed(1)} 音節/分`,
      `用 ${formatElapsed(elapsed)}`,
    ];
    if (lesson.mode === "roman") parts.push(`拍毋著 ${state.track.misses} 个`);
    els.banner.hidden = false;
    els.banner.textContent =
      parts.join(" · ") + (opened.length > 0 ? `。過關，解鎖「${opened.join("」「")}」。` : "");

    state.finished = true;
    els.input.readOnly = true;
    els.nextHint.hidden = false;
  }

  function onInput() {
    if (!state.lesson || state.finished) return;
    const lesson = state.lesson;
    const raw = els.input.value;
    if (!state.startedAt && raw.trim().length > 0) state.startedAt = Date.now();
    if (lesson.mode === "roman") {
      const typed = typedOf(raw);
      if (trackRoman(typed)) renderKeys();
      evaluate(typed);
      if (state.composing) return;
      if (typedOf(raw, true) === lesson.target) {
        trackRoman(lesson.target);
        finishLesson();
      }
      return;
    }
    if (state.track.lastAt === null && raw.length > 0) state.track.lastAt = performance.now();
    if (state.composing) return;
    const typed = typedOf(raw);
    const { leadingWords } = evaluate(typed);
    if (trackHanji(leadingWords)) renderKeys();
    if (typed === lesson.target) finishLesson();
  }

  function bindSettings() {
    const saved = state.settings;
    if (saved.system) els.systemSelect.value = saved.system;
    if (saved.method) els.methodSelect.value = saved.method;
    if (saved.inputMode) els.inputSelect.value = saved.inputMode;
    if (saved.hint) els.hintSelect.value = saved.hint;
    if (saved.target) els.targetSelect.value = String(saved.target);
    if (!els.targetSelect.value) els.targetSelect.value = String(DEFAULT_TARGET);

    [els.systemSelect, els.methodSelect, els.inputSelect].forEach((select) => {
      select.addEventListener("change", () => {
        saveSettings();
        beginLesson();
      });
    });
    els.hintSelect.addEventListener("change", () => {
      saveSettings();
      if (state.lesson) renderLesson(state.lesson.words, { keepTimer: true });
    });
    els.targetSelect.addEventListener("change", () => {
      saveSettings();
      const opened = unlockReadyKeys();
      saveProgress();
      if (opened.length > 0) {
        beginLesson();
        return;
      }
      renderKeys();
      updateSummary();
    });
  }

  /** 原生 select 留咧保存值，外觀佮展開的選單改用家己的樣式。 */
  function enhanceSelect(select) {
    const labelId = select.getAttribute("aria-labelledby");
    const wrap = document.createElement("div");
    wrap.className = "select-menu";
    const button = document.createElement("button");
    button.type = "button";
    button.id = `${select.id}Button`;
    button.className = "select-menu-button";
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-labelledby", `${labelId} ${button.id}`);
    const list = document.createElement("ul");
    list.className = "select-menu-list";
    list.setAttribute("role", "listbox");
    list.setAttribute("aria-labelledby", labelId);
    list.tabIndex = -1;
    list.hidden = true;
    let active = -1;

    const items = [...select.options].map((option, index) => {
      const item = document.createElement("li");
      item.id = `${select.id}Option${index}`;
      item.className = "select-menu-option";
      item.setAttribute("role", "option");
      item.textContent = option.text;
      item.addEventListener("mousemove", () => setActive(index));
      item.addEventListener("click", () => choose(index));
      list.appendChild(item);
      return item;
    });

    function sync() {
      button.textContent = select.options[select.selectedIndex]?.text || "";
      items.forEach((item, index) => {
        item.setAttribute("aria-selected", String(index === select.selectedIndex));
      });
    }

    function setActive(index) {
      active = index;
      items.forEach((item, i) => item.classList.toggle("is-active", i === index));
      if (index < 0) return;
      list.setAttribute("aria-activedescendant", items[index].id);
      items[index].scrollIntoView({ block: "nearest" });
    }

    function open() {
      list.hidden = false;
      wrap.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      setActive(select.selectedIndex);
      list.focus();
    }

    function close(focusButton) {
      if (list.hidden) return;
      list.hidden = true;
      wrap.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
      if (focusButton) button.focus();
    }

    function choose(index) {
      close(false);
      if (index !== select.selectedIndex) {
        select.selectedIndex = index;
        sync();
        select.dispatchEvent(new Event("change"));
      }
      const focused = document.activeElement;
      if (!focused || focused === document.body || wrap.contains(focused)) button.focus();
    }

    button.addEventListener("click", () => (list.hidden ? open() : close(true)));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) return;
      event.preventDefault();
      open();
    });
    list.addEventListener("keydown", (event) => {
      const last = items.length - 1;
      const moves = {
        ArrowDown: Math.min(last, active + 1),
        ArrowUp: Math.max(0, active - 1),
        Home: 0,
        End: last,
      };
      if (event.key in moves) {
        event.preventDefault();
        setActive(moves[event.key]);
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (active >= 0) choose(active);
      } else if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      } else if (event.key === "Tab") {
        close(false);
      }
    });
    document.addEventListener("pointerdown", (event) => {
      if (!wrap.contains(event.target)) close(false);
    });

    select.classList.add("select-native");
    select.tabIndex = -1;
    select.after(wrap);
    wrap.append(button, list);
    sync();
  }

  els.reset.addEventListener("click", () => {
    const names = practiceNames();
    const label = `${names.system}・${names.method}・${names.input}`;
    if (!window.confirm(`敢欲共「${label}」的練習進度攏挕捒，對頭開始練？`)) return;
    delete state.progress[progressId()];
    saveProgress();
    beginLesson();
  });

  els.keyTiles.addEventListener("pointerover", (event) => {
    const tile = event.target.closest(".key-tile");
    if (tile) showKeyTip(tile);
  });
  els.keyTiles.addEventListener("pointerout", (event) => {
    if (!event.target.closest(".key-tile")) return;
    const related = event.relatedTarget;
    const next = related && related.closest ? related.closest(".key-tile") : null;
    if (next && els.keyTiles.contains(next)) return;
    hideKeyTip();
  });
  window.addEventListener("scroll", hideKeyTip, true);
  document.getElementById("settingsDetails").addEventListener("toggle", hideKeyTip);

  els.input.addEventListener("input", onInput);
  els.input.addEventListener("compositionstart", () => {
    state.composing = true;
  });
  els.input.addEventListener("compositionend", () => {
    state.composing = false;
    onInput();
  });
  els.input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || state.composing || event.isComposing) return;
    event.preventDefault();
    if (state.finished) beginLesson({ keepBanner: true });
  });
  els.input.addEventListener("paste", (event) => event.preventDefault());

  migrateProgress();
  bindSettings();
  [els.systemSelect, els.methodSelect, els.inputSelect, els.hintSelect, els.targetSelect].forEach(
    enhanceSelect,
  );
  beginLesson();
})();
