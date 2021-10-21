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
			const multiImg = req.files.map((file) =>
				saveStudentPic(file.originalname, file.buffer),
			);
			await Promise.all(multiImg);
			res.send('oks');
		} catch (error) {
			next(error);
		}
	},
);

export default studentImgRouter;
