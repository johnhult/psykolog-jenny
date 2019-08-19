import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import PostEmbeddedStyled, { Wrapper } from './PostEmbeddedStyled';
import H3 from '../H3/index';
import Tags from '../Tags/index';

const PostEmbedded = ({ mainImage, title, summary, url, text, tags, ...props }) => {
	const blogWrapper = useRef();
	const navigate = () => {
		const rect = blogWrapper.current ? blogWrapper.current.getBoundingClientRect() : null;
		let meta;
		if (rect) {
			meta = {
				top: rect.top,
				bottom: rect.bottom,
				left: rect.left,
				right: rect.right,
				width: rect.width,
				height: rect.height
			};
		}
		props.history.push({
			pathname: url,
			state: {
				data: {
					mainImage: mainImage,
					title: title,
					summary: summary,
					text: text,
					tags: tags
				},
				meta: meta ? { ...meta } : null
			}
		});
	};
	return (
		<PostEmbeddedStyled onClick={navigate} ref={blogWrapper}>
			<img src={mainImage.file ? mainImage.file.url : mainImage.fields.file.url}></img>
			<Wrapper>
				<H3>{title}</H3>
				<Tags tags={tags}></Tags>
			</Wrapper>
		</PostEmbeddedStyled>
	);
};

PostEmbedded.propTypes = {
	mainImage: PropTypes.object,
	title: PropTypes.string,
	summary: PropTypes.string,
	url: PropTypes.string,
	text: PropTypes.object,
	tags: PropTypes.array,
	history: PropTypes.object
};

PostEmbedded.defaultProps = {};

export default withRouter(PostEmbedded);
