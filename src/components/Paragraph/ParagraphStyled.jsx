import styled from 'styled-components';

import fontFamilies from 'tokens/fontFamilies.mjs';
import fontSizes from 'tokens/fontSizes.mjs';
import colors from 'tokens/colors.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const ParagraphStyled = styled.p`
	font-family: ${fontFamilies.fontRegular};
	font-size: ${fontSizes.lmobile};
	line-height: ${lineHeights.l};
	color: ${colors.gray1};
	margin: 0;
	margin-bottom: ${({ noBot }) => (noBot ? 0 : '20px')};
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.l};
	}
`;

export default ParagraphStyled;
