import express from 'express';
import Endpoints from 'express-list-endpoints';
import cors from 'cors';
import blogpostRounter from './server/blogpost.js';

const server = express();
server.use(cors());
server.use(express.json());
server.use('/blogPosts', blogpostRounter);
const port = 3008;
console.table(Endpoints(server));
server.listen(port, () => {
	console.log('server running-', port);
});
