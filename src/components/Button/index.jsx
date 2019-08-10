import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ButtonStyled from './ButtonStyled';

const Button = ({ loading, to, ...props }) => (
	<ButtonStyled
		{...props}
		to={to}
		as={to ? Link : null}
		className={`${props.className ? props.className : ''} ${loading ? 'Loading' : ''}`}
		onClick={e => (props.onClick ? props.onClick(e) : null)}
		disabled={props.disabled}
	>
		{props.children}
	</ButtonStyled>
);

Button.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	loading: PropTypes.bool,
	className: PropTypes.string
};

Button.defaultTypes = {
	disabled: false,
	onClick: () => null
};

export default Button;
