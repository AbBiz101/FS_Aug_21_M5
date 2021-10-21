import { body } from 'express-validator';
export const studentValidator = [
	body('firstName').exists().withMessage('First name is mandatory field.'),
	body('lasttName').exists().withMessage('Last name is mandatory field.'),
	body('email')
		.exists()
		.withMessage('Email is mandatory field.')
		.isEmail()
		.withMessage('Wrong email format.'),
];
