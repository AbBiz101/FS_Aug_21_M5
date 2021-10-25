import React from 'react';
import { Card } from 'react-bootstrap';

export default function Cards(props) {
	return (
		<Card
			key={props.asin}
			style={{
				marginTop: '10px',
				marginLeft: '10px',
				width: '18rem',
				border: '1px solid black',
				borderRadius: '20px',
			}}
		>
			<Card.Img
				style={{ borderRadius: '20px 20px 0px 0px', width: '18rem' }}
				variant="top"
				src={props.img}
			/>
			<Card.Body>
				<Card.Title>{ props.title}</Card.Title>
				<Card.Text>{props.category}</Card.Text>
				<Card.Text>{props.price}</Card.Text>
			</Card.Body>
		</Card>
	)
};
