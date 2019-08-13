import React from 'react';
import PropTypes from 'prop-types';

import H3 from 'components/H3';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';

import BlogPostStyled, { Tags, NoteTag } from './BlogPostStyled';

const BlogPost = ({ img, title, summary, url, text, tags, ...props }) => (
	<BlogPostStyled {...props}>
		<img src={`${img}?w=500`}></img>
		<Tags>
			{tags.map((tag, index) => (
				<NoteTag key={`Tags-${index}`}>{tag.fields.name}</NoteTag>
			))}
		</Tags>
		<H3>{title}</H3>
		<Paragraph>{summary}</Paragraph>
		<Button
			to={{ path: url, state: { img: img, title: title, summary: summary, text: text } }}
			className="BlogPostButton"
		>
			Läs inlägg
		</Button>
	</BlogPostStyled>
);

BlogPost.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
	url: PropTypes.string,
	text: PropTypes.object,
	tags: PropTypes.array
};

BlogPost.defaultProps = {};

export default BlogPost;
