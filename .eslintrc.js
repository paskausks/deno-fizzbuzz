/* eslint-disable import/unambiguous */
/* global module */
const INDENT = 2;

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "hardcore",
    "hardcore/fp",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    console: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "eslint-comments/no-use": "off",
    "import/no-unresolved": [
      "error",
      {
        // Ignore deno standard library imports.
        ignore: ["^https://deno.land/std/[A-Za-z0-9-_/]+.ts$"],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        // Allow us to follow deno conventions for filenames.
        case: "snakeCase",
      },
    ],

    // deno fmt stuff, fingers crossed for an
    // official eslint plugin in the future.
    indent: ["error", INDENT],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "generator-star-spacing": ["error", {
      before: false, after: true,
    }],
  },
};
