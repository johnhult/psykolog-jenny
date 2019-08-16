import React from 'react';
import PropTypes from 'prop-types';

import TagsStyled, { NoteTag } from './TagsStyled';

const Tags = ({ tags, ...props }) => (
	<TagsStyled {...props}>
		{tags.map((tag, index) => (
			<NoteTag key={`Tags-${index}`}>{tag.fields.name}</NoteTag>
		))}
	</TagsStyled>
);

Tags.propTypes = {
	tags: PropTypes.array
};

Tags.defaultProps = {};

export default Tags;
