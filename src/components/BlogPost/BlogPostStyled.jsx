import styled from 'styled-components';

import Note from 'components/Note';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const BlogPostStyled = styled.div`
	padding: 20px;
	border: 1px solid ${colors.offwhite};
	display: flex;
	flex-direction: column;
	background-color: white;
	h3 {
		margin: 20px 0;
	}
	.BlogPostButton  {
		margin: auto auto 0;
		width: 200px;
	}
`;

export const BlogImg = styled.img`
	height: 200px;
	width: 100%;
	object-fit: cover;
	&.ImageMobile {
		@media all and (min-width: ${breakpoints.tablet}) {
			display: none;
		}
	}
	&.ImageDesktop {
		display: none;
		@media all and (min-width: ${breakpoints.tablet}) {
			display: block;
		}
	}
`;

export default BlogPostStyled;
