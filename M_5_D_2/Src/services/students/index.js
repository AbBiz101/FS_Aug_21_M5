import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const studentRounter = express.Router();
const currentPath = fileURLToPath(import.meta.url);
const parentFolderPath = dirname(currentPath);
const studentsJSON = join(parentFolderPath, 'students.json');
const allStudents = JSON.parse(fs.readFileSync(studentsJSON));
// 1.
studentRounter.post('/', (req, res) => {
	res.send(' post Hello World');
});

// 2.
studentRounter.get('/', (req, res) => {
	res.send(allStudents);
});

// 3.
studentRounter.get('/:id', (req, res) => {
	const studentByID = allStudents.find((s) => s.id === req.params.id);

	res.send(studentByID);
});

// 4.
studentRounter.put('/:id', (req, res) => {
	res.send('put Hello World');
});

// 5.
studentRounter.delete('/:id', (req, res) => {
	res.send('del Hello World');
});

export default studentRounter;
