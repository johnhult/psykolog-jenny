import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ButtonLinkStyled from './ButtonLinkStyled';

const ButtonLink = props => (
	<ButtonLinkStyled as={Link} {...props}>
		{props.children}
		<img src="/assets/gfx/arrow.svg"></img>
	</ButtonLinkStyled>
);

ButtonLink.propTypes = {
	children: PropTypes.node
};

ButtonLink.defaultProps = {};

export default ButtonLink;
