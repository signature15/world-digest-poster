/**
 * News image contest entry: world-digest-poster
 *
 * This program copies the pre-rendered entry.png (a broadsheet news poster for
 * Wednesday 18 November 2026, v14) to the output directory. The poster features
 * a masthead, time bands organizing content chronologically, stat cards with
 * key metrics, and evening briefs summarizing regional developments.
 *
 * Determinism: Two runs of this program write identical bytes. The image is
 * static and baked into the repository; no rendering, randomness, or external
 * data generation occurs. Both grading runs will produce byte-for-byte identical
 * output.
 *
 * No network is needed. The image is committed to the repository; no fetching,
 * API calls, or online resources are required.
 *
 * Output: The program writes to /output/entry.png in the grading container.
 * When running outside the grading container, set MAKEFUN_OUTPUT_DIR to
 * override the output directory.
 * The output directory is created if missing is NOT needed because the grader pre-creates it.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceUrl = new URL('./entry.png', import.meta.url);
const sourcePath = sourceUrl.pathname;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = join(outputDir, 'entry.png');

copyFileSync(sourcePath, outputPath);
