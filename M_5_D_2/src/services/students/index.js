import express from 'express';
import uniqid from 'uniqid';
import createHttpError from 'http-errors';
import { validationResult } from 'express-validator';
import { studentValidator } from './validation.js';
import { getStudents, writeStudents } from '../../fs-tool.js';

const studentRounter = express.Router();

// 1.
studentRounter.post('/', studentValidator, async (req, res, next) => {
	try {
		const errorsList = validationResult(req);
		if (!errorsList.isEmpty()) {
			next(createHttpError(400, { errorsList }));
		} else {
			const allStudents = await getStudents();
			const newStudent = { ...req.body, createdAt: new Date(), id: uniqid() };
			console.log(newStudent);
			allStudents.push(newStudent);
			await writeStudents(allStudents);
			res
				.status(201)
				.send(`new student is created. the id is:- ${newStudent.id}`);
		}
	} catch (error) {
		next(error);
	}
});

// 2.
studentRounter.get('/', async (req, res, next) => {
	try {
		const allStudents = await getStudents();
		res.send(allStudents);
	} catch (error) {
		next(error);
	}
});

// 3.
studentRounter.get('/:id', async (req, res, next) => {
	try {
		const allStudents = await getStudents();
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
studentRounter.put('/:id', async (req, res, next) => {
	try {
		const allStudents = await getStudents();
		const index = allStudents.findIndex((s) => s.id === req.params.id);
		const updatStudent = { ...allStudents[index], ...req.body };
		allStudents[index] = updatStudent;
		await writeStudents(allStudents);
		res.send(updatStudent);
	} catch (error) {
		next(error);
	}
});

// 5.
studentRounter.delete('/:id', async (req, res) => {
	try {
		const allStudents = await getStudents();
		const studentByID = allStudents.filter((s) => s.id !== req.params.id);
		await writeStudents(studentByID);
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default studentRounter;
