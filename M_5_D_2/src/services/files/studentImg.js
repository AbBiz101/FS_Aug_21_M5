import multer from 'multer';
import express from 'express';
import { studentImageFolder } from '../../fs-tool.js';

const studentImgRouter = express.Router();
studentImgRouter.post(
	'/uploadSingleImg',
	multer().single('profilePic'),
	async (req, res, next) => {
		try {
			console.log(req.file)
			res.send('ok')
		} catch (error) {
			next(error);
		}
	},
);

studentImgRouter.post(
	'/:id/uploadMultiImg',
	multer().array('multiPics'),
	async (req, res, next) => {
		try {
			res.send('ok')
		} catch (error) {
			next(error);
		}
	},
);
export default studentImgRouter;
