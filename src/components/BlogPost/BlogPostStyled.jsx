import styled from 'styled-components';

import Note from 'components/Note';

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

export const Tags = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const NoteTag = styled(Note)`
	padding: 5px 10px;
	border: 1px solid ${colors.black};
	color: ${colors.black};
	margin-right: 10px;
	border-radius: 50px;
`;

export default BlogPostStyled;
