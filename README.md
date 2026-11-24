# One Word, One Username, One Reward

[![make.fun · u-rusdyxbt-one-word-one-username-one-reward-1a191fae](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/keyi898/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/keyi898/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for the [make.fun](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) competition
`u-rusdyxbt-one-word-one-username-one-reward-1a191fae`.

## What this program does

It writes our own make.fun handle — one word, nothing else — to
`/output/entry.txt`:

```
quick-raven-52-4659
```

No explanation, no links, no extra words, no trailing newline.

## Run

Requires Node 22.18 or later (TypeScript runs directly, no build step,
no dependencies, no network access at runtime):

```sh
node main.ts
```

The program creates `/output` if needed and writes the entry as UTF-8
text (19 characters, within the 1–30 character gate).
