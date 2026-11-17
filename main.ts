import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const TEXT = [
  'The kettle was switched off a while ago.',
  'In the quiet kitchen, a drop gathers at the tap and lets go.',
  'Outside, the last light moves slowly across the wall.',
  'A small pile of leaves waits beside the door.',
  'Nothing in this room needs an answer.',
].join('\n');

writeFileSync(join(outputDir, 'entry.txt'), TEXT, 'utf8');
