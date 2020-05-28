type Rule = (num: number) => string | undefined;

/*
 * Make a `Rule` function,
 * specific to evenly divisible numbers
 */
function makeModuloRule(divisor: number, replacer: string): Rule {
  return (num: number) => {
    if (num % divisor === 0) {
      return replacer;
    }
  };
}

const FIZZ_RULE = 3;
const BUZZ_RULE = 5;
const FIZZBUZZ_RULE = 15;

/**
 * The rule set for a fizzbuzz game.
 * In order of specificity.
 */
const fizzBuzzRules: Rule[] = [
  makeModuloRule(FIZZBUZZ_RULE, "fizzbuzz"),
  makeModuloRule(BUZZ_RULE, "buzz"),
  makeModuloRule(FIZZ_RULE, "fizz"),
  (num) => num.toString(),
];

/**
 * Generates a string sequence,
 * defaulting to fizzbuzz.
 */
function* parseSequence(
  start: number,
  end: number,
  ruleSet: Rule[] = fizzBuzzRules,
): Generator<string> {
  if (start > end) {
    return;
  }

  yield ruleSet
    .map((ruleFunction) => ruleFunction(start))
    .filter((result) => Boolean(result))[0] || "";

  yield* parseSequence(start + 1, end, ruleSet);
}

export {
  makeModuloRule,
  parseSequence,
};
