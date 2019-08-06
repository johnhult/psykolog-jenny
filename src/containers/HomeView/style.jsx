import styled from 'styled-components';

import View from 'containers/View';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

export const HomeViewStyled = styled(View)`
	canvas {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		pointer-events: none;
	}
`;

export const Waves = styled.img`
	position: relative;
	z-index: -10;
	width: 100%;
	min-width: 1400px;
	margin-top: -160px;
	@media all and (min-width: ${breakpoints.tablet}) {
		margin-top: -100px;
	}
`;

export const BlogInfo = styled.div`
	width: 90%;
	max-width: 1100px;
	margin: 0 auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	padding: 30px 20px 20px;
	position: relative;
	margin-top: -70px;
	margin-top: -5%;
	background-color: ${colors.white};
	display: flex;
	flex-direction: column;
	h2 {
		position: absolute;
		left: 20px;
		top: -25px;
	}
	.Left {
		align-self: flex-end;
	}
`;

export const MegaSection = styled.div`
	width: 100%;
	padding: 100px 5%;
	max-width: calc(1100px + 10%);
	margin: 0 auto;
`;

export const MegaBox = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	position: relative;
	padding: 100px 10px;
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		flex-wrap: nowrap;
	}
	.Mega {
		left: 0;
		top: 0;
		z-index: -1;
		flex: 1;
		text-align: right;
		@media all and (min-width: ${breakpoints.tablet}) {
			position: absolute;
		}
	}
	.MegaText {
		margin-top: 20px;
		@media all and (min-width: ${breakpoints.tablet}) {
			margin-top: 0;
		}
	}
	img {
		width: 60px;
		height: auto;
		object-fit: contain;
		object-position: center top;
		order: -1;
		margin-right: 20px;
		@media all and (min-width: ${breakpoints.tablet}) {
			width: 180px;
			flex: initial;
			margin-left: 40px;
			width: initial;
			order: initial;
		}
	}
	&:nth-child(odd) {
		.Mega {
			right: 0;
			left: initial;
		}
		img {
			order: -1;
			margin-right: 40px;
			margin-left: 0;
		}
	}
`;
