import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Label';
import InputStyled from './InputStyled';

const Input = ({ label, extraText, textarea, type, darkBg, wrapperProps, ...props }) => {
	const [filled, setFilled] = useState(false);

	const checkValue = e => {
		if (e.target.value === '') {
			setFilled(false);
		} else {
			setFilled(true);
		}
		if (props.onChange) {
			props.onChange(e);
		}
	};

	return (
		<InputStyled
			{...wrapperProps}
			className={`InputWrapper ${wrapperProps.className ? wrapperProps.className : ''} ${
				filled ? 'Filled' : ''
			}`}
			darkBg={darkBg}
		>
			{textarea && <textarea id={props.name} {...props} onChange={e => checkValue(e)} />}
			{!textarea && <input id={props.name} type={type} {...props} onChange={e => checkValue(e)} />}
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
	wrapperProps: PropTypes.object,
	onChange: PropTypes.func,
	darkBg: PropTypes.bool
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
