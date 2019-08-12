import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import H1 from 'components/H1';
import H3 from 'components/H3';
import Waves from 'components/Waves';
import Loader from 'components/Loader';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';
import BlogPost from 'components/BlogPost';

import { BlogViewStyled, BlogHeader, Filter, Tag, Tags, Posts, LoadMoreButton } from './style.jsx';

class BlogView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: null,
			activeBlogPosts: null,

			// Events
			isLoading: true,
			loadingPosts: false,
			timesLoaded: 0,
			blogPostLimit: 9
		};

		this.date;
	}

	async initView() {
		// In case you need to get view-specific data
		this.date = new Date().toISOString();
		const promises = [
			getDataContentful('4kRRVYY7pxQhrnLLJfBCWm'),
			getDataContentful('blogPost', true, {
				limit: this.state.blogPostLimit,
				order: '-fields.publishDate',
				'fields.publishDate[lt]': this.date
			}),
			getDataContentful('tags', true, { order: 'fields.name' })
		];
		const result = await Promise.all(promises);
		const data = { blogPosts: result[1], tags: result[2], ...result[0] };
		data.tags = data.tags.sort((a, b) =>
			a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'sv')
		);

		console.log(data);

		await (() => {
			this.setState({
				data,
				activeBlogPosts: data.blogPosts,
				isLoading: false,
				timesLoaded: 1
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
	}

	loadMorePosts = async () => {
		const newPosts = await getDataContentful('blogPost', true, {
			limit: this.state.blogPostLimit,
			skip: this.state.blogPostLimit * this.state.timesLoaded,
			order: '-fields.publishDate',
			'fields.publishDate[lt]': this.date
		});
		this.setState(prevState => {
			return {
				activeBlogPosts: [...prevState.activeBlogPosts, ...newPosts],
				timesLoaded: prevState.timesLoaded + 1
			};
		});
	};

	render() {
		const { data } = this.state;
		const { activeBlogPosts } = this.state;

		if (this.state.isLoading) {
			return <Loader />;
		} else {
			return (
				<BlogViewStyled title="Blogg - Psykolog Jenny">
					<BlogHeader>
						<H1>{data.title}</H1>
						<H3>{data.ingress}</H3>
					</BlogHeader>
					<Waves mTop={{ mobile: -400, desktop: -350 }}></Waves>
					<Filter>
						<span>
							Filtrera inläggen genom att välja vilka kategorier du är intresserad av att läsa.
						</span>
						<Tags>
							{data.tags.map((tag, index) => (
								<Tag key={`Tag-${index}`}>{tag.name}</Tag>
							))}
						</Tags>
					</Filter>
					<Posts>
						{activeBlogPosts.map((post, index) => {
							return (
								<BlogPost
									key={`Post-${index}`}
									className="Post"
									img={post.mainImage.file.url}
									title={post.title}
									summary={post.summary}
									url={`/blog/${post.url}`}
								></BlogPost>
							);
						})}
					</Posts>
					{data.blogPosts.totalItems > activeBlogPosts.length && (
						<LoadMoreButton onClick={this.loadMorePosts}>Ladda fler inlägg</LoadMoreButton>
					)}
				</BlogViewStyled>
			);
		}
	}
}

BlogView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

BlogView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(BlogView);
