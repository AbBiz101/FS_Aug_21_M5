import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Inputauthor({ title }) {
	return (
		<Form className="inputgroup">
			<h2>{title}</h2>
			<div className="lol">
				<div className="minibox">
					<h5> First Name </h5>
					<Form.Control type="text" placeholder="Enter the first name " />
				</div>

				<div className="minibox">
					<h5> Sur-Name </h5>
					<Form.Control type="text" placeholder="Enter the Sur name" />
				</div>
			</div>

			<div className="lol">
				<div className="minibox">
					<h5>Date of birth</h5>
					<Form.Control placeholder="Birth date of the author" />
				</div>

				<div className="minibox">
					<h5> Author image </h5>
					<input type="file" />
					<Button type="submit">Submit</Button>
				</div>
			</div>

		</Form>
	);
}
