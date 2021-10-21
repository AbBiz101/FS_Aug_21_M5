import { body } from 'express-validator';
export const blogValidator = [
	body('title').exists().withMessage('title is mandatory field.'),
];
