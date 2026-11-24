import { mkdirSync, writeFileSync } from "node:fs";

// Ridiculous at First Glance, Real by the Second
// One sentence, <= 200 chars: a bizarre startup pitch that turns out to
// pencil out. Chosen after generating 12 candidates and scoring them on
// bizarreness + business logic + concreteness (creative-director phases):
// a rented professional debater for family dinners. The absurd premise
// (hiring a ringer to win an argument) is carried by a concrete scene
// (Thanksgiving, your uncle, 14 relatives) and a concrete price
// ($200/hour), so the reader laughs, then nods: the social cost of
// losing in front of the family exceeds the fee. Deterministic output:
// the same fixed string on every run.
const ENTRY =
  "We rent professional debaters to win your Thanksgiving arguments for $200 an hour, because losing to your uncle in front of 14 relatives costs more than hiring a ringer.";

// Gate guard: the sealed scorer requires 1-200 UTF-8 characters and
// non-whitespace only. Fail loudly instead of writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${[...ENTRY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
