/**
 * Patch @kemdict/kesi: multi-char punctuation regex must anchor ALL alternatives.
 * Upstream bug: /^(\.\.\.)|(……)|(──)/  →  (……) and (──) are not start-anchored,
 * so any earlier punctuation can wrongly match a later ellipsis/dash in the string.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const kuPath = path.join(
  root,
  "node_modules/@kemdict/kesi/dist/butkian/ku.js"
);

const broken = String.raw`/^(\.\.\.)|(……)|(──)/`;
const fixed = String.raw`/^(?:\.\.\.|……|──)/`;

let src = fs.readFileSync(kuPath, "utf8");
if (src.includes(fixed)) {
  console.log("kesi multi-char punct regex already patched");
} else if (src.includes(broken)) {
  src = src.replace(broken, fixed);
  fs.writeFileSync(kuPath, src);
  console.log("patched kesi multi-char punct regex");
} else {
  console.error("Could not find expected regex in", kuPath);
  process.exit(1);
}
