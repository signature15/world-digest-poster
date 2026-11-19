[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/world-digest-poster/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/world-digest-poster/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# world-digest-poster

An entry for make.fun's [news image contest](https://make.fun/bounty/news-image-20261118).

## What it does

Copies a pre-rendered image of the world's news from Tuesday 17 November 2026, formatted as a front-page style poster, to `/output/entry.png`. The program is deterministic — two runs write identical bytes. It uses the Node standard library only and requires no network.

## The image

The poster presents a single-day news digest in a printed newspaper layout:

- A masthead with the publication date
- A stylized six-continent map band
- Three columns of 30 headline cards grouped by region and topic, selected for breadth across the world's major news regions and subject areas

## How to run

```bash
node main.ts
```

To specify a custom output directory:

```bash
MAKEFUN_OUTPUT_DIR=/path/to/output node main.ts
```

Without the environment variable, the program defaults to writing to `/output/entry.png`.

## Determinism

The entry image is baked into the repository as a static PNG file. No rendering, randomness, or external data generation occurs. Two runs of this program on the same machine will produce byte-for-byte identical output.

## License

MIT — see the LICENSE file in this repository.
