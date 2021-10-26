import { useState, useEffect } from 'react';
import { Card, Row, Spinner } from 'react-bootstrap';
export default function Cards() {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
				}
			} catch (error) {
				console.log(error);
			}
		};
		blogFetch();
	},[]);

	return (
		<Row>
			{isLoading && <Spinner animation="grow" />}
			{!isLoading &&
				blogs.map((blg) => (
					<Card className="cards" key={blg.id}>
						<Card.Img
							style={{ width: '290px', borderRadius: '10px 10px 0px 0px', padding: '51px'}}
							variant="top"
							src={blg.cover}
						/>
						<Card.Body>
							<Card.Title>{blg.title}</Card.Title>
							<Card.Text>{blg.category}</Card.Text>
							<input type="text" />
						</Card.Body>
					</Card>
				))}
		</Row>
	);
}
