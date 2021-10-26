import React from 'react';
import classes from '../style/Header.module.css';
import HeaderCart from './HeaderCart';

export default function Header() {
	return (
		<>
			<header className={classes.header}>
				<h1>Aberu Bule bet</h1>
				<HeaderCart />
			</header>
			<div className={classes['main-image']}>
				<img src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/img_1101.jpeg?itok=lIvMCfQu" />
			</div>
		</>
	);
}
