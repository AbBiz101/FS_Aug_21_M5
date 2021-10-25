import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function InputForm({ title }) {
	return (
		<Form className="inputgroup">
			<h2>{title}</h2>
			<div className="lol">
				<div className="minibox">
					<h5> Title </h5>
					<Form.Control type="text" placeholder="Enter the title" />
				</div>

				<div className="minibox">
					<h5> Category </h5>
					<Form.Control type="text" placeholder="Category of the post" />
				</div>
			</div>

			<div className="lol">
				<div className="minibox">
					<h5> Author name </h5>
					<Form.Control placeholder="Name of the author" />
				</div>

				<div className="minibox">
					<h5> Cover </h5>
					<input type="file" />
					<h5> Author image </h5>
					<input type="file" />
					<Button type="submit">Submit</Button>
				</div>
			</div>
		</Form>
	);
}
