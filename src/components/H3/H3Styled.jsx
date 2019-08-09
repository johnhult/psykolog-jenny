import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const H3Styled = styled.h3`
	font-size: ${fontSizes.h3mobile};
	line-height: ${lineHeights.xs};
	font-weight: ${fontWeights.bold};
	text-align: ${props => (props.center ? 'center' : '')};
	margin: 0;
	margin-top: ${({ mTop }) => (mTop ? `${mTop}px` : null)};
	margin-bottom: ${({ mBot }) => (mBot ? `${mBot}px` : null)};
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.h3};
	}
`;

export default H3Styled;
