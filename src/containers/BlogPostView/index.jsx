import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Transition, animated, config } from 'react-spring/renderprops';

import H3 from 'components/H3';
import Loader from 'components/Loader';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';
import Paragraph from 'components/Paragraph';
import Tags from 'components/Tags';
import mapBlogText from 'helpers/utils/mapBlogText';

import { BlogPostViewStyled, BlogHero, BlogHeroImage, InnerWrapper, BlogText } from './style.jsx';

class BlogPostView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: null,

			// Events
			isLoading: true
		};
	}

	async initView() {
		// In case you need to get view-specific data
		let data;
		if (this.props.location.state) {
			// console.log('ISNDE STATE WE HAVE PROSP IN BLOGPOST', this.props);
			data = this.props.location.state.data;
		} else {
			data = await getDataContentful('blogPost', true, {
				'fields.url[in]': this.props.match.params.id
			});
			data = data[0];
		}

		console.log(data);

		await (() => {
			this.setState({
				data,
				isLoading: false
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
		window.addEventListener('beforeunload', this.componentCleanup);
	}

	componentWillUnmount() {
		this.componentCleanup();
		window.removeEventListener('beforeunload', this.componentCleanup);
	}

	componentCleanup = () => {
		this.props.history.replace();
	};

	render() {
		const { data } = this.props.location.state || this.state;
		const { meta } = this.props.location.state ? this.props.location.state : {};

		return (
			<BlogPostViewStyled title={`${data ? `${data.title} - ` : ''}Psykolog Jenny`}>
				{this.state.isLoading ? (
					<Loader></Loader>
				) : (
					<Transition
						items={data}
						config={{ config: config.wobbly }}
						immediate={!meta ? true : false}
						from={{ ...meta, position: 'fixed' }}
						enter={{ top: 60, bottom: 0, left: 0, right: 0, width: 'auto', textAlign: 'left' }}
						after={{ position: 'initial', height: 'auto' }}
					>
						{data =>
							data &&
							(props => (
								<animated.div style={props} className="BlogWrapper">
									<BlogHero>
										<Transition
											items={data}
											from={{ height: 200 }}
											enter={{ height: 600 }}
											immediate={!meta ? true : false}
										>
											{data =>
												data &&
												(props => (
													<BlogHeroImage
														src={
															this.props.location.state && this.props.location.state.mainImage
																? this.props.location.state.mainImage.file.url
																: data.mainImage.file.url
														}
														style={props}
													></BlogHeroImage>
												))
											}
										</Transition>
										<InnerWrapper>
											<Tags tags={data.tags}></Tags>
											<H3>{data.title}</H3>
											<Paragraph>{data.summary}</Paragraph>
											<BlogText>{mapBlogText(data.text)}</BlogText>
										</InnerWrapper>
									</BlogHero>
								</animated.div>
							))
						}
					</Transition>
				)}
			</BlogPostViewStyled>
		);
		// }
	}
}

BlogPostView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	location: PropTypes.object
};

BlogPostView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(BlogPostView);
