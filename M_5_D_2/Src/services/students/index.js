import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import uniqid from 'uniqid';
import createHttpError from 'http-errors';
import { validationResult } from 'express-validator';
import { studentValidator } from './validation.js';
const studentRounter = express.Router();

const studentsJSON = join(
	dirname(fileURLToPath(import.meta.url)),
	'students.json',
);
const getStudents = () => JSON.parse(fs.readFileSync(studentsJSON));
const writeStudents = (x) => fs.writeFileSync(studentsJSON, JSON.stringify(x));

// 1.
studentRounter.post('/', studentValidator, (req, res, next) => {
	const errorsList = validationResult(req);

	if (!errorsList.isEmpty()) {
		next(createHttpError(400, `Ivalid student information.`, { errorsList }));
	} else {
		try {
			const allStudents = getStudents();
			const newStudent = { ...req.body, createdAt: new Date(), id: uniqid() };
			console.log(newStudent);
			allStudents.push(newStudent);
			writeStudents(allStudents);
			res
				.status(201)
				.send(`new student is created. the id is:- ${newStudent.id}`);
		} catch (error) {
			next(error);
		}
	}
});

// 2.
studentRounter.get('/', (req, res, next) => {
	try {
		const allStudents = getStudents();
		res.send(allStudents);
	} catch (error) {
		next(error);
	}
});

// 3.
studentRounter.get('/:id', (req, res, next) => {
	try {
		const allStudents = getStudents();
		const studentByID = allStudents.find((s) => s.id === req.params.id);
		if (studentByID) {
			res.send(studentByID);
		} else {
			next(createHttpError(404, `Student with id ${req.params.id} not found`));
		}
	} catch (error) {
		next(error);
	}
});

// 4.
studentRounter.put('/:id', (req, res, next) => {
	try {
		const allStudents = getStudents();
		const index = allStudents.findIndex((s) => s.id === req.params.id);
		const updatStudent = { ...allStudents[index], ...req.body };
		allStudents[index] = updatStudent;
		writeStudents(allStudents);
		res.send(updatStudent);
	} catch (error) {
		next(error);
	}
});

// 5.
studentRounter.delete('/:id', (req, res) => {
	try {
		const allStudents = getStudents();
		const studentByID = allStudents.filter((s) => s.id !== req.params.id);
		writeStudents(studentByID);
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default studentRounter;
