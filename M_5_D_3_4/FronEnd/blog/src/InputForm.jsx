import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function InputForm({ title }) {
	const [blogpost, setBlogpost] = useState({
		title: '',
		avatar: '',
		category: '',
		author_name: '',
		author_avatar: '',
	});

	const inputHandler = (propertyName, value) => {
		setBlogpost({ ...blogpost, [propertyName]: value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			let post = await fetch('http://localhost:3008/blogPosts', {
				method: 'POST',
				body: JSON.stringify(blogpost),
				headers: {
					'Content-type': 'application/json',
				},
			});
			console.log(post);
			if (post.ok) {
				alert('Blog post was successfully created.');
				setBlogpost({
					title: '',
					avatar: '',
					category: '',
					author_name: '',
					author_avatar: '',
				});
			} else {
				alert('Blog post could not be created.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	// useEffect(() => {
	// 	const blogFetch = async () => {
	// 		try {
	// 			const resp = await fetch('http://localhost:3008/blogPosts', {
	// 				method: 'POST',
	// 				body: JSON.stringify(blogpost),
	// 				headers: {
	// 					'Content-type': 'application/json',
	// 				},
	// 			});
	// 			if (resp.ok) {
	// 				const data = await resp.json();
	// 			} else {
	// 				console.log('an error happened in the fetch!');
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	blogFetch();
	// }, []);

	return (
		<Form onSubmit={submitHandler} className="inputgroup">
			<h2>{title}</h2>
			<div className="lol">
				<div className="minibox">
					<h5> Title </h5>
					<Form.Control
						required
						type="text"
						value={blogpost.title}
						placeholder="Enter the title"
						onChange={(e) => inputHandler('title', e.target.value)}
					/>
				</div>

				<div className="minibox">
					<h5> Category </h5>
					<Form.Control
						required
						onChange={(e) => inputHandler('category', e.target.value)}
						value={blogpost.category}
						type="text"
						placeholder="Category of the post"
					/>
				</div>
			</div>

			<div className="lol">
				<div className="minibox">
					<h5> Author name </h5>
					<Form.Control
						required
						onChange={(e) => inputHandler('author_name', e.target.value)}
						value={blogpost.author_name}
						type="text"
						placeholder="Name of the author"
					/>
				</div>

				<div className="minibox">
					<h5> Cover </h5>
					<input
						onChange={(e) => inputHandler('avater', e.target.value)}
						value={blogpost.avatar}
						type="file"
					/>
					<h5> Author image </h5>
					<input
						value={blogpost.author_avatar}
						onChange={(e) => inputHandler('author_avater', e.target.value)}
						type="file"
					/>
					<Button type="submit">Submit</Button>
				</div>
			</div>
		</Form>
	);
}
