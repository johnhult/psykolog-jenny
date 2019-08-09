import styled from 'styled-components';

import colors from 'tokens/colors.mjs';

const BlogPostStyled = styled.div`
	padding: 20px;
	border: 1px solid ${colors.offwhite};
	display: flex;
	flex-direction: column;
	h3 {
		margin: 20px 0;
	}
	img {
		height: 200px;
		width: 100%;
		object-fit: cover;
	}
	.BlogPostButton  {
		margin: auto auto 0;
		width: 200px;
	}
`;

export default BlogPostStyled;
