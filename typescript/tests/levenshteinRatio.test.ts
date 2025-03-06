import { assertEquals } from "jsr:@std/assert";
import { levenshteinRatio } from "../mod.ts";

Deno.test("levenshteinRatio should return 1 for identical strings", () => {
    assertEquals(levenshteinRatio("test", "test"), 1);
});

Deno.test("levenshteinRatio should return 0 for completely different strings", () => {
    assertEquals(levenshteinRatio("test", "example"), 0);
});

Deno.test("levenshteinRatio should return a value between 0 and 1 for similar strings", () => {
    assertEquals(levenshteinRatio("kitten", "sitting"), 0.5714285714285714);
});