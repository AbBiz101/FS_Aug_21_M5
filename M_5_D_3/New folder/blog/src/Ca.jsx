import { Card } from 'react-bootstrap';
import cards from './Card';

export default function Ca() {
	const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { blogs, isLoading } = cards;
	return (
		<div>
			blogs.map((blg) =>
			{
				<Card key={blg.id}>
					<Card.Img variant="top" src={blg.cover} />
					<Card.Body>
						<Card.Title>{blg.title}</Card.Title>
						<Card.Text>{blg.category}</Card.Text>
					</Card.Body>
				</Card>
			}
			)
		</div>
	);
}
