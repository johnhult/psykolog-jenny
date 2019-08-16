import styled from 'styled-components';
import { transparentize } from 'polished';
import { animated } from 'react-spring/renderprops';

import View from 'containers/View';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

export const BlogPostViewStyled = styled(View)`
	text-align: center;
	.BlogWrapper {
	}
	/* &.AnimatePostIn-enter,
	&.AnimatePostIn-appear {
		.BlogWrapper {
			position: fixed;
			transition: 1s;
			transform: translate3d(0, 0, 0);
			padding: 20px;
			img {
				height: 200px;
				@media all and (min-width: ${breakpoints.tablet}) {
					height: 200px;
				}
			}
		}
	}
	&.AnimatePostIn-enter-active,
	&.AnimatePostIn-appear-active {
		.BlogWrapper {
			top: 60px !important;
			bottom: 0 !important;
			left: 0 !important;
			right: 0 !important;
			width: 100% !important;
			height: 100% !important;
			padding: 0 !important;
			img {
				height: 200px;
				@media all and (min-width: ${breakpoints.tablet}) {
					height: 600px;
				}
			}
		}
	}
	&.AnimatePostIn-enter-done,
	&.AnimatePostIn-appear-done {
		.BlogWrapper {
			inset: 0 !important;
			width: 100% !important;
			height: auto !important;
			img {
				height: 200px;
				@media all and (min-width: ${breakpoints.tablet}) {
					height: 600px;
				}
			}
		}
	} */
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
	max-width: 600px;
	width: 100%;
	margin: 0 auto;
	h3 {
		margin: 20px 0;
	}
`;

export const BlogText = styled.div``;
