import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './ButtonStyled';

const Button = ({ loading, ...props }) => (
	<ButtonStyled
		{...props}
		className={`${props.className ? props.className : ''} ${loading ? 'Loading' : ''}`}
		onClick={e => (props.onClick ? props.onClick(e) : null)}
		disabled={props.disabled}
	>
		{props.children}
	</ButtonStyled>
);

Button.propTypes = {
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

Button.defaultTypes = {
	disabled: false,
	onClick: () => null
};

export default Button;
