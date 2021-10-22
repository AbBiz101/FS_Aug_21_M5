import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { readJSON, writeJSON, writeFile } = fs;

const blogpostJSON = join(
	dirname(fileURLToPath(import.meta.url)),
	'./server/data/blogpost.json',
);

export const getPost = () => readJSON(blogpostJSON);
export const writePost = (post) => writeJSON(blogpostJSON,post);

const imgFolder = join(process.cwd(), './public/post');
export const blogImag = (filename, buffer) => {
	writeFile(join(imgFolder, filename), buffer);
};


