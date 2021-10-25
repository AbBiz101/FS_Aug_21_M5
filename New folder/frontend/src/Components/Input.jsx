import React, { Component } from 'react';
import { Card, Row } from 'react-bootstrap';

export default class Input extends Component {
	state = { books: [] };

	componentDidMount = async () => {
		const resp = await fetch(
			'https://striveschool.herokuapp.com/books?offset=0&limit=50',
		);
		if (resp.ok) {
			const newbooks = await resp.json();
			this.setState({ books: newbooks });
		}
	};

	render() {
		return (
			<Row>
				{this.state.books.map((book) => (
					<Card className="col-md-3" key={book.asin}>
						<Card.Img variant="top" src={book.img} />
						<Card.Body>
							<Card.Title>{book.title}</Card.Title>
							<Card.Text>{book.category}</Card.Text>
							<Card.Text>{book.price}</Card.Text>
						</Card.Body>
					</Card>
				))}
			</Row>
		);
	}
}
