import express from 'express';
const port = 3002;
const server = express();
server.listen(port, () => {
	console.log('server running!', port);
});
