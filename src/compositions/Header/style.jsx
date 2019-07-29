import styled from 'styled-components';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledHeader = styled.div`
	width: 100%;
	/* background: linear-gradient(to bottom right, #ffedbc, #ed4264); */
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 100px 5%;
	position: relative;
	max-width: calc(1100px + 10%);
	margin: 0 auto;
	h1,
	h2 {
		text-align: center;
	}
	@media all and (min-width: ${breakpoints.tablet}) {
		h1,
		h2 {
			text-align: left;
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	img {
		order: -1;
		border-radius: 200px;
		margin-bottom: 40px;
	}
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		img {
			margin-left: 40px;
			margin-bottom: 0;
			order: 1;
		}
	}
`;

export const BlobImg = styled.img`
	position: absolute;
	width: auto;
	height: 100%;
	z-index: -1;
	/* transform: rotate(90deg); */
	max-width: initial;
	@media all and (min-width: ${breakpoints.tablet}) {
		width: 80%;
		height: auto;
		/* transform: rotate(0); */
	}
	&.Nudge {
		z-index: -2;
		transform: translate3d(10%, 20px, 0);
	}
`;
