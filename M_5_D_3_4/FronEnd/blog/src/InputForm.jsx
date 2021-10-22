import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function InputForm() {
	return (
		<Form>
			<Form>
				<Form.Group as={Col} controlId="formtitle">
					<Form.Label>title</Form.Label>
					<Form.Control type="text" placeholder="Enter the title" />
				</Form.Group>

				<Form.Group as={Col} controlId="formcategory">
					<Form.Label>category</Form.Label>
					<Form.Control type="text" placeholder="category" />
				</Form.Group>
			</Form>

			<Form.Group controlId="formGridAddress1">
				<Form.Label>Address</Form.Label>
				<Form.Control placeholder="1234 Main St" />
			</Form.Group>

			<Form.Group controlId="formGridAddress2">
				<Form.Label>Address 2</Form.Label>
				<Form.Control placeholder="Apartment, studio, or floor" />
			</Form.Group>

			<Form>
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>City</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Zip</Form.Label>
					<Form.Control />
				</Form.Group>
			</Form>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
