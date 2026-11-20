// gta6-meme-x-01 v6 — entrypoint.
//
// The entry itself is the X post (the MISSING poster); this program only
// delivers the post's address to the grader. It copies POST.json into the
// output directory, then reads the copy back and checks the URL inside it
// is a real https address, so a leftover placeholder or a typo fails loudly
// here instead of slipping through to the gate.
//
// Local run (outside the grader container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  fail(`could not copy POST.json from ${source}: ${(err as Error).message}`);
}

// Read back what we just wrote and make sure it names a real post.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(target, 'utf8'));
} catch (err) {
  fail(`POST.json in ${outDir} is not valid JSON: ${(err as Error).message}`);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || url.length === 0 || !url.startsWith('https://')) {
  fail(`POST.json url must be a non-empty https:// address, got: ${JSON.stringify(url)}`);
}

console.log(`POST.json OK — post at ${url}`);
