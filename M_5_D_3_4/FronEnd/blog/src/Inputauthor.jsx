import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Inputauthor({ title }) {
	const [author, setAuthor] = useState({
		name: '',
		surname: '',
		dateOfBirth: '',
		email: '',
		avatar: '',
	});

	const inputHandler = (x, y) => {
		setAuthor({ ...author.name, [x]: y });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			let post = await fetch('http://localhost:3008/authors', {
				method: 'POST',
				body: JSON.stringify(author),
				headers: {
					'Content-type': 'application/json',
				},
			});
			// console.log(post);
			if (post.ok) {
				alert("Author's info was successfully created.");
				setAuthor({
					name: '',
					surname: '',
					dateOfBirth: '',
					email: '',
					avatar: '',
				});
			}
			// else {
			// 	alert("Author's info could not be created.");
			// }
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Form onSubmit={submitHandler} className="inputgroup">
			<h2>{title}</h2>
			<div className="lol">
				<div className="minibox">
					<h5> First Name </h5>
					<Form.Control
						required
						type="text"
						value={author.name}
						placeholder="Enter the first name "
						onChange={(e) => inputHandler('name', e.target.value)}
					/>
				</div>

				<div className="minibox">
					<h5> Sur-Name </h5>
					<Form.Control
						required
						type="text"
						value={author.surname}
						placeholder="Enter the Sur name"
						onChange={(e) => inputHandler('surname', e.target.value)}
					/>
				</div>
			</div>

			<div className="lol">
				<div className="minibox">
					<h5>Date of birth</h5>
					<Form.Control
						required
						type="date"
						value={author.dateOfBirth}
						placeholder="Birth date of the author"
						onChange={(e) => inputHandler('dateOfBirth', e.target.value)}
					/>
				</div>

				<div className="minibox">
					<h5>Email</h5>
					<Form.Control
						required
						type="text"
						value={author.email}
						placeholder="Email of the author"
						onChange={(e) => inputHandler('email', e.target.value)}
					/>
					<h5> Author image </h5>
					<input
						type="file"
						value={author.avatar}
						onChange={(e) => inputHandler('avatar', e.target.value)}
					/>
					<Button type="submit">Submit</Button>
				</div>
			</div>
		</Form>
	);
}
