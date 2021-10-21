import cors from 'cors';
import { join } from 'path';
import express from 'express';
import Endpoints from 'express-list-endpoints';
import booksRounter from './services/books/index.js';
import studentRounter from './services/students/index.js';
import bookImgRouter from '../src/services/files/bookImg.js';
import studentImgRouter from '../src/services/files/studentImg.js';
import {
	genericErrorHandler,
	badRequestHandler,
	notFoundHandler,
	unAutorizedHandler,
} from './errorHandler.js';


const server = express();

const publicFolder = join(process.cwd(), './public');
server.use(express.static(publicFolder));
server.use(cors());
server.use(express.json());

server.use('/students', studentRounter);
server.use('/authors', booksRounter);
server.use('/bookimg', bookImgRouter);
server.use('/studentimg', studentImgRouter);

server.use(badRequestHandler);
server.use(unAutorizedHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

const port = 3001;
console.table(Endpoints(server));

server.listen(port, () => {
	console.log('server running-', port);
});
