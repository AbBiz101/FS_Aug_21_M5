import express from 'express';
import fs from 'fs';
import uniqid from 'uniqid';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import createHttpError from 'http-errors';
import { validationResult } from 'express-validator';
import { bookValidator } from './validation.js';
const booksRounter = express.Router();

const booksJSON = join(dirname(fileURLToPath(import.meta.url)), 'books.json');
const getBook = () => JSON.parse(fs.readFileSync(booksJSON));
const writeBooks = (x) => fs.writeFileSync(booksJSON, JSON.stringify(x));

// 1
booksRounter.post('/', bookValidator, (req, res, next) => {
	try {
		const errorsList = validationResult(req);
		if (!errorsList.isEmpty()) {
			next(createHttpError(400, `invalid book information`, { errorsList }));
		} else {
			const allBooks = getBook();
			const newBook = { ...req.body, createdAt: new Date(), id: uniqid() };
			allBooks.push(newBook);
			writeBooks(allBooks);
			res.status(201).send(`new book is created`);
		}
	} catch (error) {
		next(error);
	}
});

// 2
booksRounter.get('/', (req, res, next) => {
	try {
		const allBooks = getBook();
		if (req.query && req.query.title) {
			const filter = allBooks.filter((b) => b.title === req.query.title);
			res.send(filter);
		} else {
			res.send(allBooks);
		}
	} catch (error) {
		next(error);
	}
});

// 3
booksRounter.get('/:id', (req, res, next) => {
	try {
		const allBooks = getBook();
		const singleBook = allBooks.find((book) => book.id === req.params.id);
		if (singleBook) {
			res.send(singleBook);
		} else {
			next(createHttpError(404, `Book with id ${req.params.id} not found`));
		}
	} catch (error) {
		next(error);
	}
});

// 4
booksRounter.put('/:id', (req, res, next) => {
	try {
		const allBooks = getBook();
		const index = allBooks.findIndex((book) => book.id === req.params.id);
		const editedBook = { ...allBooks[index], ...req.body };
		allBooks[index] = editedBook;
		writeBooks(allBooks);
		res.send(editedBook);
	} catch (error) {
		next(error);
	}
});

// 5
booksRounter.delete('/:id', (req, res, next) => {
	try {
		const allBooks = getBook();
		const singleBook = allBooks.filter((book) => book.id !== req.params.id);
		writeBooks(singleBook);
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default booksRounter;
