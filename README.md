# Deno fizzbuzz

A micro-project example for how a simple deno project could look like.

## Requirements

* [Deno](https://deno.land/) - for running
* [Make](https://www.gnu.org/software/make/) - for convenience
* [Node.js](https://nodejs.org/) - for linting with ESLint

## Setup

For linting, `npm install` and run `make lint`. Otherwise, you just need make and deno. Lint rules are somewhat aligned with the output of `deno fmt`.

## Running

Run deno fmt, lint and run tests:
```
make
```

Run fizzbuzz from 1 to 20.
```sh
make run
```

## Development

The project includes a _denon.json_ config file for [denon](https://github.com/denosaurs/denon). It can be used to automatically re-run things while developing.

Runs _run.ts_:

```
denon start
```

Runs tests:

```
denon test
```
