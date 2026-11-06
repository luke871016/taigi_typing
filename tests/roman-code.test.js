const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");
const RomanCode = require("../roman-code.js");
const { romanToCode } = RomanCode;
const read = (file) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");

test("Telex covers every tone, including tone 6 and both POJ tone 9 marks", () => {
  const cases = [
    ["a", "ax"], ["á", "av"], ["à", "ay"], ["ah", "ahx"],
    ["â", "ad"], ["ǎ", "az"], ["ā", "aw"], ["a̍h", "ahv"],
    ["a̋", "aq"], ["ă", "aq"], ["mňg", "mngz"],
  ];
  for (const [roman, code] of cases) {
    assert.equal(romanToCode(roman, "telex"), code, roman);
    assert.equal(romanToCode(roman.normalize("NFD"), "telex"), code, roman);
  }
});

test("Telex uses c/ch for the initials in each romanization system", () => {
  for (const [sys, roman, code] of [
    ["tailo", "tsài-tǒo", "caiyftooz"],
    ["tailo", "tshuǎ-bóo", "chuazfboov"],
    ["poj", "chài-tǒ͘", "caiyftooz"],
    ["poj", "chhǒa-bó͘", "choazfboov"],
    ["tailo", "TSHIM", "chimx"],
    ["poj", "CHHIM", "chimx"],
  ]) {
    assert.equal(romanToCode(roman, "telex", true, sys), code, roman);
  }
});

test("Telex encodes hyphens, light tone, spaces, and POJ spelling", () => {
  assert.equal(romanToCode("tsia̍h--pá  tshài", "telex"), "ciahvffpav chaiy");
  assert.equal(romanToCode("chhiūⁿ-hó͘", "telex", true, "poj"), "chiunnwfhoov");
  assert.equal(romanToCode("ohⁿ", "telex", true, "poj"), "onnhx");
  assert.equal(romanToCode("", "telex"), "");
});

test("raw Telex keeps ch aspirated and recognizes z/f while typing", () => {
  const typed = (text, finalize = false) => romanToCode(text, "telex", finalize, "poj", true);
  for (const code of ["c", "ch", "choa", "choaz", "choazf", "choazfb", "choazfboov"]) {
    assert.equal(typed(code), code, code);
  }
  assert.equal(typed("choazfboov", true), "choazfboov");
  assert.equal(typed("chhǒa-bó͘", true), "choazfboov");
  assert.equal(typed("a"), "a");
  assert.equal(typed("a", true), "ax");
  assert.equal(typed("a-b"), "axfb");
  assert.equal(typed("af"), "axf");
});

test("numeric input retains initials, digits, and literal hyphens", () => {
  assert.equal(romanToCode("tshuǎ-bóo", "numeric"), "tshua6-boo2");
  assert.equal(romanToCode("chhǒa-bó͘", "numeric", true, "poj"), "chhoa6-boo2");
  assert.equal(romanToCode("tsia̍h--pá", "numeric"), "tsiah8--pa2");
  assert.equal(romanToCode("tshua6-boo2", "numeric", false), "tshua6-boo2");
  assert.equal(romanToCode("ă", "numeric"), "a9");
});

// Run the page's real conversion/progress functions without its event bindings.
function practicePage(saved = {}) {
  const element = () => ({
    value: "", hidden: false,
    classList: { add() {}, remove() {} },
    setAttribute() {}, appendChild() {}, focus() {},
    querySelectorAll() {
      return [...this.innerHTML.matchAll(/class="[^"]*\bchar-mark\b/g)].map(element);
    },
  });
  const elements = new Map();
  const storage = { "taigi-practice-keys": JSON.stringify(saved) };
  const context = vm.createContext({
    RomanCode, window: {},
    localStorage: { getItem: (key) => storage[key], setItem: (key, value) => { storage[key] = value; } },
    document: {
      body: element(), createElement: element,
      getElementById(id) {
        if (!elements.has(id)) elements.set(id, element());
        return elements.get(id);
      },
    },
  });
  vm.runInContext(read("practice-data.js"), context);
  const source = read("practice.js");
  const bindingStart = source.indexOf('  els.reset.addEventListener("click"');
  assert.ok(bindingStart > 0);
  vm.runInContext(source.slice(0, bindingStart) + `
    globalThis.practice = { comboOf, typedOf, renderLesson, progressId, progress, migrateProgress, state, els };
  })();`, context);
  return context.practice;
}

test("full-dictionary Telex lesson codes can be typed unchanged in both systems", () => {
  const page = practicePage();
  page.els.methodSelect.value = "telex";
  page.els.inputSelect.value = "roman";
  page.els.hintSelect.value = "code";
  for (const sys of ["tailo", "poj"]) {
    page.els.systemSelect.value = sys;
    const combo = page.comboOf(sys, "telex");
    assert.ok(combo.words.length > 1000);
    assert.ok(combo.startKeys < combo.order.length, "keeps progressive key unlocking");
    for (const word of combo.words) {
      page.state.lesson = { mode: "roman" };
      assert.equal(page.typedOf(word.code, true), word.code, `${sys}: ${word.roman}`);
    }
    const words = combo.words.filter((word) => word.code.startsWith("ch")).slice(0, 3);
    assert.equal(words.length, 3);
    page.renderLesson(words);
    assert.equal(page.typedOf(page.state.lesson.target, true), page.state.lesson.target);
    assert.ok(page.els.line.innerHTML.includes(words[0].code), "hint shows the accepted code");
    page.state.lesson = { mode: "hanji" };
    assert.equal(page.typedOf(" 台 語 "), "台語");
  }
});

test("new Telex progress is separate and numeric/old records survive migration", () => {
  const old = { unlocked: 20, keys: { t: { ms: 100, n: 10 } } };
  const page = practicePage({ "poj-telex": old, "poj-numeric-roman": old });
  page.migrateProgress();
  page.els.systemSelect.value = "poj";
  page.els.inputSelect.value = "roman";
  page.els.methodSelect.value = "telex";
  assert.equal(page.progressId(), "poj-telex-v2-roman");
  assert.equal(Object.keys(page.progress().keys).length, 0);
  assert.equal(page.state.progress["poj-telex-roman"].keys.t.n, 10);
  assert.equal(page.state.progress["poj-telex-hanji"].keys.t.n, 10);
  page.els.methodSelect.value = "numeric";
  assert.equal(page.progressId(), "poj-numeric-roman");
  assert.equal(page.progress().keys.t.n, 10);
});

test("speed-page Telex hints follow the same rules and preserve numeric hints", () => {
  const html = read("index.html");
  const start = html.indexOf("      const TONE_COMBINING_MARKS =");
  const end = html.indexOf("      function buildToneAssistHtml", start);
  const context = vm.createContext({
    RomanCode, currentRomanizationSystem: "tailo", isPunctuation: (text) => /^[\p{P}\p{S}]+$/u.test(text),
  });
  vm.runInContext(html.slice(start, end), context);
  assert.equal(vm.runInContext('convertRomanToAssist("tshuǎ-bóo", "telex")', context), "chuazfboov");
  context.currentRomanizationSystem = "poj";
  assert.equal(vm.runInContext('convertRomanToAssist("chhǒa--bó͘", "telex")', context), "choazffboov");
  assert.equal(vm.runInContext('convertRomanToAssist("ă", "telex")', context), "aq");
  assert.equal(vm.runInContext('convertRomanToAssist("chhǒa--bó͘", "numeric")', context), "chhoa6--bo͘2");
});
