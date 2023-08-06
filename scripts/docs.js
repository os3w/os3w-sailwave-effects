import { mkdir, readdir, copyFile } from 'node:fs/promises';

const source = 'dist';
const dest = 'docs/dist';
const recursive = true;
const mode = 0o755;

const run = async () => {
  mkdir(dest, { recursive, mode });
  for (const filename of await readdir(source)) {
    copyFile(`${source}/${filename}`, `${dest}/${filename}`);
  }
};

run();
