import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

const H1Styled = styled.h1`
	font-size: ${fontSizes.h1};
	line-height: ${lineHeights.xs};
	font-weight: ${fontWeights.bold};
	text-align: ${props => (props.center ? 'center' : '')};
	margin-top: 0;
`;

export default H1Styled;
