import { body } from 'express-validator';
export const authorValidator = [
	body('title').exists().withMessage('title is mandatory field.'),
	body('category').exists().withMessage('category is mandatory field.'),
];
