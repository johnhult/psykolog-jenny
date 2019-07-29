import styled from 'styled-components';

import H2 from 'components/H2';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledHeader = styled.div`
	width: 100%;
	/* background: linear-gradient(to bottom right, #ffedbc, #ed4264); */
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10% 5%;
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

export const BlobImg = styled.img`
	position: absolute;
	width: 80%;
	height: auto;
	z-index: -1;
	&.Nudge {
		z-index: -2;
		transform: translate3d(10%, 20px, 0);
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	img {
		order: -1;
		border-radius: 200px;
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
