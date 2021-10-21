import multer from 'multer';
import express from 'express';
import { bookImageFolder } from '../../fs-tool.js';

const bookImgRouter = express.Router();
bookImgRouter.post(
	'/:id/uploadSingleImg',
	multer().single('profilePic'),
	async (req, res, next) => {
		try {
			res.send('ok');
		} catch (error) {
			next(error);
		}
	},
);

bookImgRouter.post(
	'/:id/uploaMuliImg',
	multer().array('multiPics'),
	async (req, res, next) => {
		try {
			res.send('ok');
		} catch (error) {
			next(error);
		}
	},
);
export default bookImgRouter;
