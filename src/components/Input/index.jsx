import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Label';
import InputStyled from './InputStyled';

const Input = ({ label, extraText, textarea, type, wrapperProps, ...props }) => {
	const [filled, setFilled] = useState(false);

	const checkValue = value => {
		if (value === '') {
			setFilled(false);
		} else {
			setFilled(true);
		}
	};

	return (
		<InputStyled
			{...wrapperProps}
			className={`InputWrapper ${wrapperProps.className ? wrapperProps.className : ''} ${
				filled ? 'Filled' : ''
			}`}
		>
			{textarea && <textarea id={props.name} {...props} />}
			{!textarea && (
				<input id={props.name} type={type} {...props} onChange={e => checkValue(e.target.value)} />
			)}
			{label && <Label htmlFor={props.name}>{label}</Label>}
			{extraText && <span className="ExtraText">{extraText}</span>}
		</InputStyled>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	pattern: PropTypes.string,
	required: PropTypes.bool,
	textarea: PropTypes.bool,
	extraText: PropTypes.string,
	type: PropTypes.string,
	wrapperProps: PropTypes.object
};

Input.defaultProps = {
	label: '',
	pattern: undefined, // '[^\#_@£$|*/]{2,500}' --> Does not seem to be a valid RegExp?
	required: false,
	textarea: false,
	type: 'text',
	wrapperProps: {}
};

export default Input;
