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
		<Card
			style={{
				width: '18rem',
				border: '1px solid black',
				borderRadius: '10px',
				backgroung: 'gray',
				margin: '10px',
			}}
			key={blg.id}
		>
			<Card.Img
				style={{ width: '18rem', borderRadius: '10px 10px 0px 0px' }}
				variant="top"
				src={blg.author.avatar}
			/>
			<Card.Body>
				<Card.Title>{blg.title}</Card.Title>
				<Card.Text>{blg.category}</Card.Text>
			</Card.Body>
		</Card>
	));
}
