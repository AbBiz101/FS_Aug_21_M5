import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import uniqid from 'uniqid';

const studentRounter = express.Router();
const currentPath = fileURLToPath(import.meta.url);
const parentFolderPath = dirname(currentPath);
const studentsJSON = join(parentFolderPath, 'students.json');

// 1.
studentRounter.post('/', (req, res) => {
	const allStudents = JSON.parse(fs.readFileSync(studentsJSON));
	const newStudent = { ...req.body, createdAt: new Date(), id: uniqid() };
	console.log(newStudent);
	allStudents.push(newStudent);
	fs.writeFileSync(studentsJSON, JSON.stringify(allStudents));
	res.status(201).send(`new student is created. the id is:- ${newStudent.id} `);
});

// 2.
studentRounter.get('/', (req, res) => {
	res.send(allStudents);
});

// 3.
studentRounter.get('/:id', (req, res) => {
	const allStudents = JSON.parse(fs.readFileSync(studentsJSON));
	const studentByID = allStudents.find((s) => s.id === req.params.id);
	res.send(studentByID);
});

// 4.
studentRounter.put('/:id', (req, res) => {
	const allStudents = JSON.parse(fs.readFileSync(studentsJSON));
	const index = allStudents.findIndex((s) => s.id === req.params.id);
	const updatStudent = { ...allStudents[index], ...req.body };
	allStudents[index] = updatStudent;
	fs.writeFileSync(studentsJSON, JSON.stringify(allStudents));
	res.send(updatStudent);
});

// 5.
studentRounter.delete('/:id', (req, res) => {
	const allStudents = JSON.parse(fs.readFileSync(studentsJSON));
	const studentByID = allStudents.filter((s) => s.id !== req.params.id);
	fs.writeFileSync(studentsJSON, JSON.stringify(studentByID));
	res.status(204).send();
});

export default studentRounter;
