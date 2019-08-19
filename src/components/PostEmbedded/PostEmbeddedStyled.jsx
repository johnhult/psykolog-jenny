import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const PostEmbeddedStyled = styled.div`
	width: 100%;
	border: 1px solid ${colors.offwhite};
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 10px;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.2s;
	margin-bottom: 20px;
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
	&:hover {
		border-color: ${colors.grey};
	}
	h3 {
		margin-top: 0;
	}
	img {
		width: 100%;
		object-fit: cover;
		height: 120px;
		margin-bottom: 10px;
		@media all and (min-width: ${breakpoints.tablet}) {
			width: 200px;
			margin-right: 10px;
			margin-bottom: 0;
		}
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media all and (min-width: ${breakpoints.tablet}) {
		align-items: flex-start;
		flex: 1;
	}
`;

export default PostEmbeddedStyled;
