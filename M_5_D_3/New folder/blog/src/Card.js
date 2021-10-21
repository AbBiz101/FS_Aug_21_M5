import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export default function Cards() {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const blogFetch = async () => {
			try {
				const resp = await fetch('http://localhost:3000.8/blogPosts');
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

	return { blogs, isLoading };

	
}
