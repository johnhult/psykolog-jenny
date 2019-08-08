import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const ButtonStyled = styled.button`
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	border-radius: 500px;
	height: ${({ h }) => (h ? `${h}px` : null)};
	width: ${({ w }) => (w ? `${w}px` : null)};

	font-size: ${fontSizes.button};
	font-weight: ${fontWeights.bold};
	color: ${colors.white};
	letter-spacing: 1px;
	text-transform: uppercase;
	background: linear-gradient(to bottom right, #ffedbc, #ed4264);
	background: ${({ secondary }) => (secondary ? colors.secondary : null)};
	padding: ${({ h }) => (h ? 0 : '10px')} ${({ w }) => (w ? 0 : '30px')};
	cursor: pointer;
	transition: 0.2s;
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.button};
	}

	&:focus {
		outline: 0;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
	}

	&:hover:not(:disabled) {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
	}

	&:disabled:not(.Loading) {
		cursor: not-allowed;
		border: 0;
		color: ${colors.offwhite};
		background-color: ${colors.grey};
		transition: 0.2s;
	}
`;

export default ButtonStyled;
