import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { readJSON, writeJSON, writeFile } = fs;

const dataFolder = join(dirname(fileURLToPath(import.meta.url)), '/data');

const studentImageFolder = join(process.cwd(), '../public/students');
const bookImageFolder = join(process.cwd(), '../public/books');

export const booksJSON = join(dataFolder, 'books.json');
export const studentsJSON = join(dataFolder, 'students.json');

export const getBook = () => readJSON(booksJSON);
export const writeBooks = (content) => writeJSON(booksJSON, content);

export const getStudents = () => readJSON(studentsJSON);
export const writeStudents = (content) => writeJSON(studentsJSON, content);

export const saveStudentPic = (filename, content) => {
	writeFile(joun(studentImageFolder, filename), content);
};
export const saveBooksPic = (filename, content) => {
	writeFile(joun(bookImageFolder, filename), content);
};
