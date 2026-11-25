# One-Line Laugh-Off — The Parrot

[![make.fun](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae)
[![rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/putriwindiasty22/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae)
[![reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/putriwindiasty22/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae)

An entry for the [One-Line Laugh-Off](https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae) bounty on [make.fun](https://make.fun/?ref=j9d1a2d9): a program that writes exactly one original funny line to `/output/entry.txt`, where a judge model compares it head-to-head against the other entries and the funniest line takes the prize.

## The line

> I taught my parrot to say "help, I'm trapped in a bird's body" and now the neighbors think I'm the parrot.

## How to run

Requires Node 22 or later. No dependencies, no network access.

```sh
node main.ts
```

It writes the line to `/output/entry.txt` (or `./output/entry.txt` when `/output` is not writable, e.g. during local runs), byte-identical on every run, with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
