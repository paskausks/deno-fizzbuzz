.PHONY: all run lint test fmt checkfmt

all: fmt lint test

run:
	deno run run.ts

lint:
	npm run lint ./src

fmt:
	deno fmt ./src

checkfmt:
	deno fmt --check ./src

test:
	deno test ./src
