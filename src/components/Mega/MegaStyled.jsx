import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const MegaStyled = styled.span`
	font-size: ${fontSizes.megamobile};
	line-height: ${lineHeights.xxs};
	font-weight: ${fontWeights.bold};
	text-align: ${props => (props.center ? 'center' : '')};
	margin-top: 0;
	color: ${({ offwhite }) => (offwhite ? colors.offwhite : colors.black)};
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.mega};
	}
`;

export default MegaStyled;
