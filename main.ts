import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const TEXT = [
  'Settle into the chair and let the day become quieter.',
  'There is nowhere else you need to be for this moment.',
  'Notice the gentle weight of your hands, resting easily.',
  'Breathe in slowly, then let the breath leave without effort.',
  'The room can remain just as it is. You can do the same.',
  'For now, nothing needs to be solved, hurried, or held.',
].join('\n');

writeFileSync(join(outputDir, 'entry.txt'), TEXT, 'utf8');
