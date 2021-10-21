import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { readJSON, writeJSON, writeFile } = fs;
const dataFolder = join(dirname(fileURLToPath(import.meta.url)), './data')
// console.log(dataFolder);