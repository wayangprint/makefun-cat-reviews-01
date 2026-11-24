import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. He shoves me off his warm laptop to type 'urgent' emails, then acts shocked when I sit on the keyboard and email his boss a row of kkkkkkkkkk.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1-200
// characters, not only whitespace, a single line. The program writes
// the entry with no trailing newline, so the file is byte-identical
// to the entry string itself.
const MAX_CHARS = 200;

const length = [...ENTRY].length;
if (length < 1 || length > MAX_CHARS) {
  throw new Error(`Entry must be 1-200 characters, got ${length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
