import multer from 'multer';
import express from 'express';
import { saveStudentPic } from '../../fs-tool.js';

const studentImgRouter = express.Router();

studentImgRouter.post(
	'/:id/uploadSingleImg',
	multer().single('profilePic'),
	async (req, res, next) => {
		try {
			await saveStudentPic(req.file.originalname, req.file.buffer);
			res.send('ok');
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
			res.send('ok');
		} catch (error) {
			next(error);
		}
	},
);

export default studentImgRouter;
