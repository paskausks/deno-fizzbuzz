/* eslint-disable no-console */
import { parseSequence } from "./src/fizzbuzz.ts";

const END = 20;

Array.from(parseSequence(1, END), (val) => console.log(val));
