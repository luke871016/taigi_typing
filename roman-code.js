// 練習輸入碼佮測速的 Telex 輔助共用仝一套規則。
const RomanCode = (() => {
  const TONE_COMBINING_MARKS = {
    "\u0301": 2,
    "\u0300": 3,
    "\u0302": 5,
    "\u030C": 6,
    "\u0306": 9,
    "\u0304": 7,
    "\u030D": 8,
    "\u030B": 9,
  };
  // 台語齒盤 Telex：1/4=x、2/8=v、3=y、5=d、6=z、7=w、9=q
  const TELEX_TONE_LETTERS = { 1: "x", 2: "v", 3: "y", 4: "x", 5: "d", 6: "z", 7: "w", 8: "v", 9: "q" };
  const TONE_MARK_STRIP_RE = /[\u0300\u0301\u0302\u0304\u0306\u030B\u030C\u030D]/g;
  // 羅馬字的音節袂用這寡字母收尾，看著就是已經拍落去的調號
  const TONE_CODE_END_RE = /[0-9xvydwqz]$/;

  function telexInitial(base, sys, typed) {
    if (sys !== "poj") return base.replace(/^ts(h?)/, (_, h) => (h ? "ch" : "c"));
    // 白話字的 ch 有兩種意思：實際拍的 ch 就是 chh，毋通閣轉一擺
    if (typed) return base.replace(/^chh/, "ch");
    return base.replace(/^ch(h?)/, (_, h) => (h ? "ch" : "c"));
  }

  /** complete 為 false 的時陣，無調符就先莫補第一、四聲的調號。 */
  function syllableCode(syllable, method, complete, sys, typed) {
    const nfd = syllable.normalize("NFD").replace(/\u0131/g, "i");
    let tone = 0;
    for (const ch of nfd) {
      if (TONE_COMBINING_MARKS[ch]) {
        tone = TONE_COMBINING_MARKS[ch];
        break;
      }
    }
    let base = nfd
      .replace(TONE_MARK_STRIP_RE, "")
      .normalize("NFC")
      .toLowerCase()
      .replace(/hⁿ/g, "ⁿh")
      .replace(/o\u0358/g, "oo")
      .replace(/ⁿ/g, "nn");
    if (method === "telex") base = telexInitial(base, sys, typed);
    if (TONE_CODE_END_RE.test(base)) return base;
    if (!tone && !complete) return base;
    if (!tone) tone = /[ptkh]$/.test(base) ? 4 : 1;
    return base + (method === "numeric" ? String(tone) : TELEX_TONE_LETTERS[tone] || "");
  }

  function romanToCode(text, method, finalize = true, sys = "tailo", typed = false) {
    // Telex 的 f 就是連字符：先攏看做 - 來切音節，輸入碼才閣寫做 f
    const telex = method === "telex";
    const source = telex ? text.replace(/f/gi, "-") : text;
    const tokens = source.normalize("NFC").split(/(\s+|-+)/);
    return tokens
      .map((token, index) => {
        if (/^\s+$/.test(token)) return " ";
        if (!/\p{L}/u.test(token)) {
          const plain = token.toLowerCase();
          return telex ? plain.replace(/-/g, "f") : plain;
        }
        return syllableCode(token, method, finalize || index < tokens.length - 1, sys, typed);
      })
      .join("");
  }

  return { romanToCode };
})();

if (typeof module !== "undefined" && module.exports) module.exports = RomanCode;
