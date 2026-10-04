/**
 * 從辭典 ODS 的「主詞目」產生練習的詞目（漢字、台羅、白話字、歌詞詞頻）。
 * 詞頻用來讓練習頁優先抽高頻詞。按鍵解鎖順序仍由練習頁照輸入碼即時統計。
 *
 * 用法：node scripts/build-practice-data.mjs [ods路徑] [詞頻csv路徑]
 */
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Ku } from "@kemdict/kesi";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const odsPath = process.argv[2] || resolve(root, "../../kautian (18).ods");
const freqPath = process.argv[3] || resolve(root, "../../hanji_tailo_word_freq.csv");
const outPath = resolve(root, "practice-data.js");

const EXTRACT_PY = String.raw`
import zipfile, sys
from xml.etree import ElementTree as ET

path = sys.argv[1]
ROW = "{urn:oasis:names:tc:opendocument:xmlns:table:1.0}table-row"
REP = "{urn:oasis:names:tc:opendocument:xmlns:table:1.0}number-columns-repeated"

def cells_of(row):
    out = []
    for cell in row:
        tag = cell.tag
        if not (tag.endswith("table-cell") or tag.endswith("covered-table-cell")):
            continue
        repeat = int(cell.get(REP) or "1")
        text = "".join(cell.itertext()).strip()
        if repeat > 50:
            out.append("")
            continue
        for _ in range(repeat):
            out.append(text)
    return out

with zipfile.ZipFile(path) as z:
    with z.open("content.xml") as f:
        first = True
        for event, elem in ET.iterparse(f, events=("end",)):
            if elem.tag != ROW:
                continue
            cells = cells_of(elem)
            elem.clear()
            if first:
                first = False
                continue
            if "主詞目" not in cells[:3]:
                continue
            i = cells.index("主詞目")
            han = cells[i + 1] if i + 1 < len(cells) else ""
            rom = cells[i + 2] if i + 2 < len(cells) else ""
            sys.stdout.write(han.replace("\t", " ").replace("\n", " "))
            sys.stdout.write("\t")
            sys.stdout.write(rom.replace("\t", " ").replace("\n", " "))
            sys.stdout.write("\n")
`;

const extracted = spawnSync("python3", ["-c", EXTRACT_PY, odsPath], {
  encoding: "utf8",
  maxBuffer: 64 * 1024 * 1024,
});
if (extracted.status !== 0) {
  console.error(extracted.stderr);
  process.exit(extracted.status || 1);
}

function cleanHanji(text) {
  return text.replace(/【[^】]*】/g, "").trim();
}

function readingsOf(rom) {
  return rom
    .replace(/【[^】]*】/g, "")
    .split("/")
    .map((part) => part.trim().normalize("NFC"))
    .filter((part) => /\p{L}/u.test(part));
}

function toPoj(tailo) {
  const ku = new Ku(tailo);
  return ku.POJ().lomaji.normalize("NFC");
}

/** 詞內空白改做連字符來對詞頻。雙連字符（輕聲）保持原樣。 */
function looseTailo(tailo) {
  return tailo.normalize("NFC").trim().replace(/[ \t]+/g, "-");
}

function loadFreq(path) {
  const exact = new Map();
  const loose = new Map();
  const lines = readFileSync(path, "utf8").split("\n");
  for (const line of lines.slice(1)) {
    if (!line) continue;
    const cells = line.split(",");
    if (cells.length < 4) continue;
    const hanji = cells[1].normalize("NFC");
    const tailo = cells[2].normalize("NFC");
    const freq = Number(cells[3]);
    if (!hanji || !tailo || !Number.isFinite(freq) || freq < 0) continue;
    const put = (map, key) => {
      const prev = map.get(key);
      if (prev == null || freq > prev) map.set(key, freq);
    };
    put(exact, `${hanji}\t${tailo}`);
    put(loose, `${hanji}\t${looseTailo(tailo)}`);
  }
  return { exact, loose };
}

function freqOf(table, hanji, tailo) {
  const han = hanji.normalize("NFC");
  const rom = tailo.normalize("NFC");
  const exact = table.exact.get(`${han}\t${rom}`);
  if (exact != null) return exact;
  return table.loose.get(`${han}\t${looseTailo(rom)}`) ?? 0;
}

const freqTable = loadFreq(freqPath);

const words = [];
const seen = new Set();
let skipped = 0;
let freqMatched = 0;

for (const line of extracted.stdout.split("\n")) {
  if (!line) continue;
  const tab = line.indexOf("\t");
  if (tab < 0) continue;
  const hanji = cleanHanji(line.slice(0, tab));
  const rom = line.slice(tab + 1);
  if (!hanji) {
    skipped += 1;
    continue;
  }
  for (const tailo of readingsOf(rom)) {
    // 第九調罕用，莫納入練習
    if (tailo.normalize("NFD").includes("\u030B")) {
      skipped += 1;
      continue;
    }
    let poj;
    try {
      poj = toPoj(tailo);
    } catch {
      skipped += 1;
      continue;
    }
    if (!poj || !/\p{L}/u.test(poj)) {
      skipped += 1;
      continue;
    }
    const key = `${hanji}\t${tailo}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const freq = freqOf(freqTable, hanji, tailo);
    if (freq > 0) freqMatched += 1;
    words.push([hanji, tailo, poj, freq]);
  }
}

const data = {
  source: "kautian 主詞目",
  freqSource: "hanji_tailo_word_freq.csv",
  wordCount: words.length,
  freqMatched,
  words,
};

const banner = `/* 由 scripts/build-practice-data.mjs 產生，請勿手改。 */\n`;
writeFileSync(outPath, banner + "window.PRACTICE_DATA = " + JSON.stringify(data) + ";\n");

console.log(`詞 ${words.length}，對到詞頻 ${freqMatched}，略過 ${skipped}`);
console.log("寫入", outPath);
