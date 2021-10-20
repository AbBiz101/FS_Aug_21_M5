import express from 'express';
import Endpoints from 'express-list-endpoints';
import cors from 'cors';
import studentRounter from './services/students/index.js';
import booksRounter from './services/books/index.js';
import { errorHandler } from './errorHandler';
//  errorHandler;
const server = express();

server.use(cors());
server.use(express.json());

server.use('/students', studentRounter);
server.use('/authors', booksRounter);

server.use(errorHandler);

const port = 3001;
console.table(Endpoints(server));

server.listen(port, () => {
	console.log('server running-', port);
});
