import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const LabelStyled = styled.label`
	width: 100%;
	height: 100%;
	text-align: left;
	display: flex;
	align-items: center;
	padding: 0 20px;
	font-size: ${fontSizes.mmobile};
	position: absolute;
	left: 0;
	top: 0;
	pointer-events: none;
	transform-origin: 0% 0%;
	transition: 0.2s;
	color: ${colors.black};

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.m};
	}
`;

export default LabelStyled;
