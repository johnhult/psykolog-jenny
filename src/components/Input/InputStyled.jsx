import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const InputStyled = styled.div`
	position: relative;

	&.Filled {
		label {
			color: ${({ darkBg }) => (darkBg ? colors.white : null)};
			transform: scale(0.8) translateY(-85%);
		}
	}
	input:focus + label {
		color: ${({ darkBg }) => (darkBg ? colors.white : null)};
		transform: scale(0.8) translateY(-85%);
	}
	textarea:focus + label {
		color: ${({ darkBg }) => (darkBg ? colors.white : null)};
		transform: scale(0.8) translateY(-85%);
	}
	textarea + label {
		height: 50px;
	}

	input,
	textarea {
		width: 100%;
		height: 100%;
		padding: 10px 20px;
		border: 0;
		font-size: ${fontSizes.mmobile};
		box-sizing: border-box;
		border: 1px solid ${colors.secondary};
		border-radius: 500px;

		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		@media all and (min-width: ${breakpoints.tablet}) {
			font-size: ${fontSizes.m};
		}

		&:focus {
			outline: 0;
			box-shadow: 0 0 6px 2px ${colors.secondary};
		}
	}

	textarea {
		border-radius: 20px;
		min-height: 150px;
		border: 1px solid ${colors.secondary};
		line-height: ${lineHeights.s};
		resize: none;
	}
`;

export default InputStyled;
