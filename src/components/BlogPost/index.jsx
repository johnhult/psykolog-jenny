import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import H3 from 'components/H3';
import Button from 'components/Button';
import Tags from 'components/Tags';
import Paragraph from 'components/Paragraph';

import BlogPostStyled, { BlogImg } from './BlogPostStyled';

const BlogPost = ({ mainImage, title, summary, url, text, tags, ...props }) => {
	const blogWrapper = useRef(null);

	// useEffect(() => {
	// 	console.log(Object.assign({}, blogWrapper.current.getBoundingClientRect()));
	// }, []);

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
		<BlogPostStyled {...props} ref={blogWrapper}>
			<BlogImg className="ImageMobile" src={`${mainImage.file.url}?w=1000`} />
			<BlogImg className="ImageDesktop" src={`${mainImage.file.url}`} />
			<Tags tags={tags}></Tags>
			<H3>{title}</H3>
			<Paragraph>{summary}</Paragraph>
			{blogWrapper && (
				<Button onClick={() => navigate()} className="BlogPostButton">
					Läs inlägg
				</Button>
			)}
		</BlogPostStyled>
	);
};

BlogPost.propTypes = {
	mainImage: PropTypes.object,
	title: PropTypes.string,
	summary: PropTypes.string,
	url: PropTypes.string,
	text: PropTypes.object,
	tags: PropTypes.array,
	history: PropTypes.object
};

BlogPost.defaultProps = {};

export default withRouter(BlogPost);
