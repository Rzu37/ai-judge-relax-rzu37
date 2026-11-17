import fs from 'node:fs';
import path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const entry = [
  'Breathe in slowly.',
  'Let the quiet settle.',
  'You can move at the pace of still water.',
  'One gentle step is enough.',
  'Rest here for a moment.',
].join('\n') + '\n';

fs.writeFileSync(path.join(outputDir, 'entry.txt'), entry, 'utf8');
