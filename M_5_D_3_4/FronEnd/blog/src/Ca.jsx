import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export default function Ca() {
	useEffect(() => {
		const blogFetch = async () => {
			try {
				const resp = await fetch('http://localhost:3008/blogPosts');
				if (resp.ok) {
					const data = await resp.json();
					setBlogs(data);
					setIsLoading(false);
				} else {
					console.log('an error happened in the fetch!');
					setIsLoading(false);
				}
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		};
		blogFetch();
	}, []);
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	return blogs.map((blg) => {
		<Card key={blogs.id}>
			<Card.Img variant="top" src={blogs.cover} />
			<Card.Body>
				<Card.Title>{blogs.title}</Card.Title>
				<Card.Text>{blogs.category}</Card.Text>
			</Card.Body>
		</Card>;
	});
}
