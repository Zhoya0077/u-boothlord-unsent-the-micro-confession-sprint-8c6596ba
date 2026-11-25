// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt and prints it.
// The entry must stay within the sealed gate: 1-260 chars total, UTF-8,
// not only whitespace; the message line itself is at most 200 chars.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TO_LINE = "To: Dad";
const MESSAGE =
  "I kept your last birthday voicemail because I never learned how to say I miss you without it sounding like I'm asking for something.";

const entry = `${TO_LINE}\n${MESSAGE}`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");

// Self-checking gate: the entry must exist, be non-empty, and fit the gate.
// Exactly two lines, no trailing newline, no blank line between the parts,
// so what the judge reads is precisely the two-part confession and nothing else.
const written = readFileSync(outPath, "utf8");
const lines = written.split("\n");
if (
  written.trim().length === 0 ||
  written.length < 1 ||
  written.length > 260 ||
  written.endsWith("\n") ||
  written.includes("\n\n") ||
  lines.length !== 2 ||
  !lines[0].startsWith("To: ") ||
  lines[0].trim().length <= 4 ||
  lines[1].length === 0 ||
  lines[1].length > 200
) {
  console.error(
    `gate failed: entry.txt is ${written.length} chars, ${lines.length} lines`,
  );
  process.exit(1);
}

console.log(written);
console.log(`wrote ${outPath} (${written.length} chars)`);
