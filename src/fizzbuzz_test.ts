/* global Deno */
/* eslint-disable no-magic-numbers */
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { makeModuloRule, parseSequence } from "./fizzbuzz.ts";

Deno.test("makeModuloRule", () => {
  const ruleFn = makeModuloRule(3, "foo");

  assertEquals(ruleFn(1), undefined);
  assertEquals(ruleFn(2), undefined);
  assertEquals(ruleFn(3), "foo");
  assertEquals(ruleFn(4), undefined);
  assertEquals(ruleFn(9), "foo");
});

Deno.test("parseSequence with no rules", () => {
  assertEquals(
    Array.from(parseSequence(1, 10, [])),
    new Array(10).fill(""),
  );
});

Deno.test("parseSequence with a rule", () => {
  const returnVal = "hi!";

  function rule() {
    return returnVal;
  }

  assertEquals(
    Array.from(parseSequence(1, 3, [rule])),
    new Array(3).fill(returnVal),
  );
});

Deno.test("parseSequence with fizzbuzz rules", () => {
  assertEquals(Array.from(parseSequence(1, 15)), [
    "1",
    "2",
    "fizz",
    "4",
    "buzz",
    "fizz",
    "7",
    "8",
    "fizz",
    "buzz",
    "11",
    "fizz",
    "13",
    "14",
    "fizzbuzz",
  ]);
});
