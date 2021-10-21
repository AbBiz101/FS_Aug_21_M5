import { body } from 'express-validator';
export const bookValidator = [
	body('title').exists().withMessage('title is mandatory field.'),
];
