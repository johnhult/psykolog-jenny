import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const ButtonLinkStyled = styled.div`
	color: ${colors.secondary};
	font-weight: ${fontWeights.bold};
	font-size: ${fontSizes.mmobile};
	display: inline-flex;
	align-items: center;
	padding: 5px;
	img {
		transition: 0.2s;
		margin-left: 10px;
	}
	&:hover {
		img {
			transform: translateX(5px);
		}
	}

	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.m};
	}
`;

export default ButtonLinkStyled;
