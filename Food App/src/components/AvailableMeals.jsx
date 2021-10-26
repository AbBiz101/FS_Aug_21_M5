import React from 'react';
import classes from '../style/AvailableMeals.module.css';

export default function AvailableMeals() {
	const DUMMY_MEALS = [
		{
			id: 'm1',
			name: 'Beyaynet',
			description: 'Finest fish and veggies',
			price: 22.99,
		},
		{
			id: 'm2',
			name: 'Shiro',
			description: 'A german specialty!',
			price: 16.5,
		},
		{
			id: 'm3',
			name: 'Tibs',
			description: 'American, raw, meaty',
			price: 12.99,
		},
		{
			id: 'm4',
			name: 'Kitfo Bowl',
			description: 'Healthy...and green...',
			price: 18.99,
		},
	];
	return (
		<section className={classes.availableMeals}>
			<ul>
				{DUMMY_MEALS.map((meal) => (
					<li key={meal.id}>meal.name -meal.description</li>
				))}
			</ul>
		</section>
	);
}
