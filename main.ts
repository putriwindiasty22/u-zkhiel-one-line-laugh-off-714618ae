// One-Line Laugh-Off entry.
// Writes exactly one original funny line to /output/entry.txt
// (falling back to ./output/entry.txt when /output is not writable,
// e.g. during local runs).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I taught my parrot to say \"help, I'm trapped in a bird's body\" and now the neighbors think I'm the parrot.";

// The gate requires 1-200 characters of non-blank UTF-8 text, so refuse
// to finish quietly if the line ever drifts out of bounds.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

function writeLine(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
  // Read it back: the entry must be byte-identical to the line, no
  // trailing newline, no extra whitespace.
  const written = readFileSync(`${dir}/entry.txt`, "utf8");
  if (written !== LINE) {
    throw new Error(`entry.txt mismatch in ${dir}`);
  }
}

try {
  writeLine("/output");
} catch {
  writeLine("./output");
}
