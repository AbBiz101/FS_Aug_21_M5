import express from 'express';
import Endpoints from 'express-list-endpoints';

import studentRounter from './services/students/index.js';
import booksRounter from './services/books/index.js';

const server = express();
server.use(express.json());
server.use('/students', studentRounter);
server.use('/authors', booksRounter);

const port = 3001;

console.table(Endpoints(server));

server.listen(port, () => {
	console.log('server running-', port);
});
