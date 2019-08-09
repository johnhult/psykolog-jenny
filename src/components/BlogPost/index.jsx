import React from 'react';
import PropTypes from 'prop-types';

import BlogPostStyled from './BlogPostStyled';
import H3 from 'components/H3';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';

const BlogPost = ({ img, title, summary, url, ...props }) => (
	<BlogPostStyled {...props}>
		<img src={img}></img>
		<H3>{title}</H3>
		<Paragraph>{summary}</Paragraph>
		<Button to={url} className="BlogPostButton">
			Läs inlägg
		</Button>
	</BlogPostStyled>
);

BlogPost.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
	url: PropTypes.string
};

BlogPost.defaultProps = {};

export default BlogPost;
