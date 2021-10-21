import express from 'express';
import uniqid from 'uniqid';
import createHttpError from 'http-errors';
import { validationResult } from 'express-validator';
import { bookValidator } from './validation.js';
import { getBook, writeBooks } from '../../fs-tool.js';

const booksRounter = express.Router();

// 1
booksRounter.post('/', bookValidator, async (req, res, next) => {
	try {
		const errorsList = validationResult(req);
		if (!errorsList.isEmpty()) {
			next(createHttpError(400, `invalid book information`, { errorsList }));
		} else {
			const allBooks = await getBook();
			const newBook = { ...req.body, createdAt: new Date(), id: uniqid() };
			allBooks.push(newBook);
			await writeBooks(allBooks);
			res.status(201).send(`new book is created`);
		}
	} catch (error) {
		next(error);
	}
});

// 2
booksRounter.get('/', async (req, res, next) => {
	try {
		const allBooks = await getBook();
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
booksRounter.get('/:id', async (req, res, next) => {
	try {
		const allBooks = await getBook();
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
booksRounter.put('/:id', async (req, res, next) => {
	try {
		const allBooks = await getBook();
		const index = allBooks.findIndex((book) => book.id === req.params.id);
		const editedBook = { ...allBooks[index], ...req.body };
		allBooks[index] = editedBook;
		await writeBooks(allBooks);
		res.send(editedBook);
	} catch (error) {
		next(error);
	}
});

// 5
booksRounter.delete('/:id', async (req, res, next) => {
	try {
		const allBooks = await getBook();
		const singleBook = allBooks.filter((book) => book.id !== req.params.id);
		await writeBooks(singleBook);
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default booksRounter;
