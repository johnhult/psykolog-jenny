import styled from 'styled-components';

import fontSizes from 'tokens/fontSizes.mjs';
import lineHeights from 'tokens/lineHeights.mjs';
import fontWeights from 'tokens/fontWeights.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const NoteStyled = styled.div`
	font-size: ${fontSizes.smobile};
	line-height: ${lineHeights.xs};
	font-weight: ${fontWeights.regular};
	text-align: ${props => (props.center ? 'center' : '')};
	margin-top: 0;
	@media all and (min-width: ${breakpoints.tablet}) {
		font-size: ${fontSizes.s};
	}
`;

export default NoteStyled;
