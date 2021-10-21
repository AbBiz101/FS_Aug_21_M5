import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import uniqid from 'uniqid';
import createHttpError from 'http-errors';
import { validationResult } from 'express-validator';
import { blogValidator } from './validation.js';
const blogpostRounter = express.Router();

const blogpostJSON = join(
	dirname(fileURLToPath(import.meta.url)),
	'blogpost.json',
);
const getPost = () => JSON.parse(fs.readFileSync(blogpostJSON));
const writePost = (post) =>
	fs.writeFileSync(blogpostJSON, JSON.stringify(post));

blogpostRounter.post('/', blogValidator, (req, res, next) => {
	try {
		const errorsList = validationResult(req);
		if (!errorsList.isEmpty()) {
			next(createHttpError(400, 'invalid blog post format.'));
		} else {
			const post = getPost();
			const newPost = { ...req.body, createdAt: new Date(), id: uniqid() };
			post.push(newPost);
			writePost(post);
			res.status(201).send('Post created');
		}
	} catch (error) {
		next(error);
	}
});
blogpostRounter.get('/', (req, res, next) => {
	try {
		const post = getPost();
		res.send(post);
	} catch (error) {
		next(error);
	}
});
blogpostRounter.get('/:postID', (req, res, next) => {
	try {
		const post = getPost();
		const singlePost = post.find((p) => p.id === req.params.postID);
		res.send(singlePost);
	} catch (error) {
		next(error);
	}
});
blogpostRounter.put('/:postID', (req, res, next) => {
	try {
		const post = getPost();
		const postIndex = post.findIndex((p) => p.id === req.params.postID);
		const editedPost = { ...post[postIndex], ...req.body };
		post[postIndex] = editedPost;
		writePost(post);
		res.send(editedPost);
	} catch (error) {
		next(error);
	}
});
blogpostRounter.delete('/:postID', (req, res, next) => {
	try {
		const post = getPost();
		filterdPost = post.filter((p) => p.id !== req.params.postID);
		console.log(req.params.postID);
		writePost(filterdPost);
		console.log('deeted');
		res.status(204).send();
	} catch (error) {
		next(error);
	}
});

export default blogpostRounter;
