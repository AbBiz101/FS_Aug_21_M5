import React from 'react';
import Card from 'react-bootstrap';
export default function Card({ category, title, cover }) {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img src={props.cover} />
			<Card.Body>
				<Card.Title>{props.category}</Card.Title>
				<Card.Title>{props.title}</Card.Title>
			</Card.Body>
		</Card>
	);
}
