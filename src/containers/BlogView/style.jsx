import styled from 'styled-components';

import View from 'containers/View';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

export const BlogViewStyled = styled(View)`
	canvas {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
		z-index: -1;
	}
`;
