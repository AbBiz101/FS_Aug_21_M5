import React, { Component } from 'react';
import Card from './Card';

export default class Blog extends Component {
	state = {
		loading: false,
		error: false,
		blogs: [],
	};
	blogfetch = async () => {
		try {
			const resp = await fetch('http://localhost:3001/blogPosts');
			if (response.ok) {
				const blogs = await resp.json();
				this.setState({ blogs, loading: false });
			}
		} catch (error) {
			this.setState({ loading: false, error: error.message });
		}
	};
	render() {
		const { loading, blogs, error } = this.state;
		return blogs.map((blog) => (
			<Card
				key={blog.id}
				category={blog.category}
				title={blog.title}
				cover={blog.cover}
			/>
		));
	}
}
