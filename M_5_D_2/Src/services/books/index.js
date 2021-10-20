import express from 'express';
import fs from 'fs';
import uniqid from 'uniqid';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const booksRounter = express.Router();
const currentPath = fileURLToPath(import.meta.url);
const parentFolderPath = dirname(currentPath);
const booksJSON = join(parentFolderPath, 'books.json');
// or  booksJSON= join (dirname(fileURLToPath(import.meta.url)),'books.json') 
booksRounter.post('/', (req, res, next) => {
	try {
		const allBooks = JSON.parse(fs.readFileSync(booksJSON));
		const newBook = { ...req.body, createdAt: new Date(), id: uniqid() };
		allBooks.push(newBook);
		fs.writeFileSync(booksJSON, JSON.stringify(allBooks));
		res.status(201).send(`new book is created`);
	} catch (error) {
		next(error);
	}
});

booksRounter.get('/', (req, res, next) => {
	try {
		const allBooks = JSON.parse(fs.readFileSync(booksJSON));
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

booksRounter.get('/:id', (req, res, next) => {
	try {
		const allBooks = JSON.parse(fs.readFileSync(booksJSON));
		const singleBook = allBooks.find((book) => book.id === req.params.id);
		res.send(singleBook);
	} catch (error) {
		next(error);
	}
});

booksRounter.put('/:id', (req, res, next) => {
	try {
		const allBooks = JSON.parse(fs.readFileSync(booksJSON));
		const index = allBooks.findIndex((book) => book.id === req.params.id);
		const editedBook = { ...allBooks[index], ...req.body };
		allBooks[index] = editedBook;
		fs.writeFileSync(booksJSON, JSON.stringify(allBooks));
		res.send(editedBook);
	} catch (error) {
		next(error);
	}
});

booksRounter.delete('/:id', (req, res, next) => {
	try {
		const allBooks = JSON.parse(fs.readFileSync(booksJSON));
		const singleBook = allBooks.filter((book) => book.id !== req.params.id);
		fs.writeFileSync(booksJSON, JSON.stringify(singleBook));
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default booksRounter;
