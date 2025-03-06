import { assertEquals } from "jsr:@std/assert";
import { normalize } from "../mod.ts";

Deno.test("normalize should remove diacritics from a string", () => {
  assertEquals(normalize("éxamplé"), "example");
  assertEquals(normalize("Ångström"), "Angstrom");
  assertEquals(normalize("Crème brûlée"), "Creme brulee");
});

Deno.test("normalize should handle empty strings", () => {
  assertEquals(normalize(""), "");
});

Deno.test("normalize should handle strings without diacritics", () => {
  assertEquals(normalize("example"), "example");
  assertEquals(normalize("test"), "test");
});

Deno.test("normalize should handle strings with mixed characters", () => {
  assertEquals(normalize("Café au lait"), "Cafe au lait");
  assertEquals(normalize("façade"), "facade");
  assertEquals(normalize("naïve"), "naive");
});

Deno.test("normalize should handle strings with multiple diacritics", () => {
  assertEquals(normalize("áéíóú"), "aeiou");
  assertEquals(normalize("ÀÈÌÒÙ"), "AEIOU");
});

Deno.test("normalize should handle strings with special characters", () => {
  assertEquals(normalize("!@#$%^&*()_+"), "!@#$%^&*()_+");
  assertEquals(normalize("1234567890"), "1234567890");
});