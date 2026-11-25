// One Star for Monday — make.fun entry
// Writes a single one-line, one-star review of Monday as if Monday
// were a restaurant, to the absolute path /output/entry.txt.
// The line must be UTF-8 text of 1 to 180 characters, a single line,
// plain text, no trailing newline, so the sealed gate accepts it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The review: a diner orders the soup of the day and gets Monday;
// asks for the check and gets Monday again. Two classic restaurant
// beats — the dish and the bill — and Monday is the punchline both
// times, which is what makes it a review of Monday specifically
// rather than of any bad meal.
const REVIEW =
  "Ordered the soup of the day. It was Monday. Asked for the check. It was also Monday.";

const OUTPUT_PATH = "/output/entry.txt";

function main() {
  // Create /output first: the grader mounts the repo read-only, so a
  // relative output/ directory would fail the write outright.
  mkdirSync("/output", { recursive: true });

  // Write exactly the line: no trailing newline, no extra whitespace.
  writeFileSync(OUTPUT_PATH, REVIEW, "utf8");

  // Self-check the gate the sealed scorer applies: 1-180 characters,
  // a single line, not only whitespace, and the bytes on disk must be
  // exactly the line we intended — no newline sneaking in.
  const chars = [...REVIEW].length;
  if (chars < 1 || chars > 180) {
    throw new Error(`gate failed: entry is ${chars} characters (must be 1-180)`);
  }
  if (REVIEW.split("\n").length !== 1) {
    throw new Error("gate failed: entry spans more than one line");
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  const onDisk = readFileSync(OUTPUT_PATH, "utf8");
  if (onDisk !== REVIEW) {
    throw new Error("gate failed: file contents differ from the review line");
  }
  if (onDisk.endsWith("\n")) {
    throw new Error("gate failed: entry ends with a newline");
  }
  const words = REVIEW.split(/\s+/).filter(Boolean).length;
  if (words > 25) {
    throw new Error(`gate failed: entry is ${words} words (must be at most 25)`);
  }
  const bytes = Buffer.byteLength(onDisk, "utf8");

  console.log(`wrote ${chars} characters (${bytes} bytes, ${words} words) to ${OUTPUT_PATH}`);
}

main();
