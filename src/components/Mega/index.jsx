import React from 'react';
import PropTypes from 'prop-types';

import MegaStyled from './MegaStyled';

const Mega = props => <MegaStyled {...props}>{props.children}</MegaStyled>;

Mega.propTypes = {
	children: PropTypes.node
};

Mega.defaultProps = {};

export default Mega;
