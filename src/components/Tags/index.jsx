import React from 'react';
import PropTypes from 'prop-types';

import TagsStyled, { NoteTag } from './TagsStyled';

const Tags = ({ tags, ...props }) => {
	// debugger;
	return (
		<TagsStyled {...props}>
			{tags.map((tag, index) => {
				return <NoteTag key={`Tags-${index}`}>{tag.fields.name}</NoteTag>;
			})}
		</TagsStyled>
	);
};

Tags.propTypes = {
	tags: PropTypes.array.isRequired
};

Tags.defaultProps = {};

export default Tags;
