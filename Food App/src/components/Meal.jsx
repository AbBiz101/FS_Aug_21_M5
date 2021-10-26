import React from 'react';
import classes from '../style/Meals.module.css';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

export default function Meal() {
    return <div className={classes.meal}>
        <MealsSummary />
        <AvailableMeals/>
    </div>;
}
