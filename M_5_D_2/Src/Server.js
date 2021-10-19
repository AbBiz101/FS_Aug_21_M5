import express from 'express';
import Endpoints from 'express-list-endpoints';

import studentRounter from './services/students/index.js';

const server = express();

server.use('/students', studentRounter);

const port = 3001;

console.table(Endpoints(server));

server.listen(port, () => {
	console.log('server running-', port);
});
