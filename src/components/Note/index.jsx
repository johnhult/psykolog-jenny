import React from 'react';
import PropTypes from 'prop-types';

import NoteStyled from './NoteStyled';

const Note = props => <NoteStyled {...props}>{props.children}</NoteStyled>;

Note.propTypes = { children: PropTypes.node };

Note.defaultProps = {};

export default Note;
