// One Word, One Username, One Reward
// This program writes our own make.fun handle — one word, nothing else —
// to /output/entry.txt for the judge to read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Our own make.fun username. The entry is exactly this handle:
// a single word, no spaces, no explanation, no trailing newline.
const HANDLE = "quick-raven-52-4659";

// Where the competition expects the entry text.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function writeEntry(handle: string, filePath: string): void {
  // Guard: the entry must be a single word — no spaces, no padding.
  if (!handle || /\s/.test(handle)) {
    throw new Error("Handle must be a single word with no whitespace.");
  }
  mkdirSync(dirname(filePath), { recursive: true });
  // No trailing newline: the entry is the handle and nothing else.
  writeFileSync(filePath, handle, "utf8");
}

writeEntry(HANDLE, OUTPUT_FILE);
console.log(`Wrote entry to ${OUTPUT_FILE}`);
