import { assertEquals, assert } from "jsr:@std/assert";
import { Stopwatch } from "../mod.ts";

const delay_100ms = () => new Promise((resolve) => setTimeout(resolve, 100));

Deno.test("Stopwatch should start with a running state", () => {
  const sw = new Stopwatch();
  assert(sw.running);
});

Deno.test("Stopwatch should return a duration greater than 0 after some time", async () => {
  const sw = new Stopwatch();
  await delay_100ms();
  assert(sw.duration > 0);
});

Deno.test("Stopwatch should stop and return a fixed duration", async () => {
  const sw = new Stopwatch();
  await delay_100ms();
  sw.stop();
  const duration = sw.duration;
  await delay_100ms();
  assertEquals(sw.duration, duration);
});

Deno.test("Stopwatch should restart and reset the duration", async () => {
  const sw = new Stopwatch();
  await delay_100ms();
  sw.restart();
  assert(sw.duration < 100);
});

Deno.test("Stopwatch should reset and stop", async () => {
  const sw = new Stopwatch();
  await delay_100ms();
  sw.reset();
  assertEquals(sw.duration, 0);
  assert(!sw.running);
});

Deno.test("Stopwatch should start again after being stopped", async () => {
  const sw = new Stopwatch();
  await delay_100ms();
  sw.stop();
  sw.start();
  assert(sw.running);
});

Deno.test("Stopwatch toString should return a formatted string", async () => {
  const sw = new Stopwatch();
  await delay_100ms();
  const str = sw.toString();
  assert(str.endsWith("ms") || str.endsWith("s") || str.endsWith("μs"));
});