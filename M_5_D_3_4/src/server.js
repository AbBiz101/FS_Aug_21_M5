import cors from 'cors';
import express from 'express';
import Endpoints from 'express-list-endpoints';
import blogpostRounter from './server/post/blogpost.js';
import authorsRounter from './server/author/author.js';
import {
	badRequestHandler,
	unAuterizedHandler,
	notFoundHandler,
	genericErrorHandler,
} from './errorHandler.js';

const server = express();

server.use(cors());
server.use(express.json());
server.use('/blogPosts', blogpostRounter);
server.use('/authors', authorsRounter);

server.use(badRequestHandler);
server.use(unAuterizedHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

const port = 3008;
console.table(Endpoints(server));
server.listen(port, () => {
	console.log('server running-', port);
});
