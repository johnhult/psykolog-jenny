import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import H1 from 'components/H1';
import H3 from 'components/H3';
import Waves from 'components/Waves';
import Loader from 'components/Loader';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';
import BlogPost from 'components/BlogPost';

import { VideoViewStyled } from './style.jsx';

class VideoView extends React.Component {
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
			filteringPosts: false,
			timesLoaded: 0,
			blogPostLimit: 9,
			activeFilter: null
		};

		this.date;
	}

	async initView() {
		// In case you need to get view-specific data
		this.date = new Date().toISOString();
		const promises = [
			getDataContentful('7vSyjQD9x4pU7ftn1Xd6So'),
			this.getAllVideoPosts(),
			getDataContentful('tags', true, { order: 'fields.name' }, true)
		];
		const result = await Promise.all(promises);
		const data = { videos: result[1], tags: result[2], ...result[0] };
		data.tags = data.tags.sort((a, b) =>
			a.fields.name.toLowerCase().localeCompare(b.fields.name.toLowerCase(), 'sv')
		);

		console.log(data);

		await (() => {
			this.setState({
				data,
				activeVideos: data.videos,
				isLoading: false,
				timesLoaded: 1
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
	}

	getAllVideoPosts = async () => {
		return getDataContentful('video', true, {
			limit: this.state.blogPostLimit,
			order: '-fields.publishDate',
			'fields.publishDate[lt]': this.date
		});
	};

	loadMorePosts = async () => {
		await this.setState({
			loadingPosts: true
		});
		let newPosts;
		if (this.state.activeFilter) {
			newPosts = await getDataContentful('blogPost', true, {
				limit: this.state.blogPostLimit,
				skip: this.state.blogPostLimit * this.state.timesLoaded,
				order: '-fields.publishDate',
				links_to_entry: this.state.activeFilter.sys.id,
				'fields.publishDate[lt]': this.date
			});
		} else {
			newPosts = await getDataContentful('blogPost', true, {
				limit: this.state.blogPostLimit,
				skip: this.state.blogPostLimit * this.state.timesLoaded,
				order: '-fields.publishDate',
				'fields.publishDate[lt]': this.date
			});
		}
		this.setState(prevState => {
			return {
				activeBlogPosts: [...prevState.activeBlogPosts, ...newPosts],
				timesLoaded: prevState.timesLoaded + 1,
				loadingPosts: false
			};
		});
	};

	setFilter = async tagObject => {
		await this.setState(prevState => ({
			activeFilter:
				prevState.activeFilter && prevState.activeFilter.fields.name === tagObject.fields.name
					? null
					: tagObject,
			filteringPosts: true,
			activeBlogPosts: []
		}));

		let newPosts;
		if (this.state.activeFilter) {
			newPosts = await getDataContentful('blogPost', true, {
				limit: this.state.blogPostLimit,
				order: '-fields.publishDate',
				links_to_entry: this.state.activeFilter.sys.id,
				'fields.publishDate[lt]': this.date
			});
		} else {
			newPosts = await this.getAllBlogPosts();
		}
		this.setState(prevState => {
			return {
				data: { ...prevState.data, blogPosts: newPosts },
				activeBlogPosts: newPosts,
				timesLoaded: 1,
				filteringPosts: false
			};
		});
	};

	render() {
		const { data } = this.state;
		const { activeBlogPosts } = this.state;

		return (
			<VideoViewStyled title="Videos - Psykolog Jenny">
				{this.state.isLoading ? (
					<Loader></Loader>
				) : (
					<div>
						{/* <BlogHeader>
							<H1>{data.title}</H1>
							<H3>{data.ingress}</H3>
						</BlogHeader> */}
						<Waves mTop={{ mobile: -400, desktop: -350 }}></Waves>
						{/* <Filter>
							<span>
								Filtrera inläggen genom att välja vilken kategori du är intresserad av att läsa.
							</span>
							<Tags>
								{data.tags.map((tag, index) => (
									<Tag
										key={`Tag-${index}`}
										active={
											this.state.activeFilter &&
											this.state.activeFilter.fields.name === tag.fields.name
										}
										onClick={() => (this.state.filteringPosts ? null : this.setFilter(tag))}
									>
										{tag.fields.name}
									</Tag>
								))}
							</Tags>
						</Filter> */}
						{/* <Posts>
							{activeBlogPosts.totalItems !== 0 ? (
								activeBlogPosts.map((post, index) => {
									return (
										<BlogPost
											key={`Post-${index}`}
											className="Post"
											mainImage={post.mainImage}
											title={post.title}
											summary={post.summary}
											url={`/blog/${post.url}`}
											tags={post.tags}
											text={post.text}
										></BlogPost>
									);
								})
							) : (
								<NoPosts>Inga inlägg hittade.</NoPosts>
							)}
						</Posts>
						{(this.state.loadingPosts || this.state.filteringPosts) && (
							<LoadingPosts h={100}></LoadingPosts>
						)}
						{activeBlogPosts &&
							data.blogPosts.totalItems > activeBlogPosts.length &&
							!this.state.filteringPosts &&
							!this.state.loadingPosts && (
								<LoadMoreButton onClick={this.loadMorePosts} disabled={this.state.loadingPosts}>
									Ladda fler inlägg
								</LoadMoreButton>
							)} */}
					</div>
				)}
			</VideoViewStyled>
		);
		// }
	}
}

VideoView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

VideoView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(VideoView);