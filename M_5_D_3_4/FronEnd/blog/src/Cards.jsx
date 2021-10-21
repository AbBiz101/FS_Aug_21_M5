import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

export default function Cards() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const blogFetch = async () => {
			try {
				const resp = await fetch('http://localhost:3008/blogPosts');
				if (resp.ok) {
					const data = await resp.json();
					setBlogs(data);
				} else {
					console.log('an error happened in the fetch!');
				}
			} catch (error) {
				console.log(error);
			}
		};
		blogFetch();
	}, []);
console.log(blogs);
	return blogs.map((blg) => (
		<Card style={{ width: '18rem' }} key={blg.id}>
			{/* <Card.Img variant="top" src={blg.cover} /> */}
			<Card.Img variant="top" src={blg.author.avatar} />
			<Card.Body>
				<Card.Title>{blg.title}</Card.Title>
				<Card.Text>{blg.category}</Card.Text>
			</Card.Body>
		</Card>
	));
}
