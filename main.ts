import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I told my AI assistant to be more human — now it ghosts me, blames the Wi-Fi, and says 'per my last email'.";

// Gate: the bounty requires one line of 1-200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
