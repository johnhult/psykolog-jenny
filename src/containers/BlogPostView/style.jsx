import styled from 'styled-components';
import { transparentize } from 'polished';
import { animated } from 'react-spring/renderprops';

import View from 'containers/View';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import H3 from '../../components/H3/index';

export const BlogPostViewStyled = styled(View)`
	.BlogWrapper {
		z-index: 5;
		background-color: ${colors.white};
	}
`;

export const BlogHero = styled.div`
	width: 100%;
`;

export const BlogHeroImage = styled(animated.img)`
	height: 200px;
	width: 100%;
	object-fit: cover;
	@media all and (min-width: ${breakpoints.tablet}) {
		height: 600px;
	}
`;

export const InnerWrapper = styled.div`
	max-width: calc(600px + 10%);
	width: 100%;
	margin: 0 auto;
	padding: 0 5%;
`;

export const H3Blog = styled(H3)`
	margin: 20px 0;
`;

export const BlogText = styled.div``;
