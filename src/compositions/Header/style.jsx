import styled from 'styled-components';

import H2 from 'components/H2';

import breakpoints from 'helpers/constants/breakpoints.mjs';

export const StyledHeader = styled.div`
	padding: 0 5%;
	width: 100%;
	height: 100%;
	background: #ed4264;
	background: linear-gradient(to bottom right, #ffedbc, #ed4264);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
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
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		img {
			margin-right: 40px;
			margin-bottom: 0;
		}
	}

	img {
		border-radius: 200px;
		margin-bottom: 40px;
	}
`;

export const H2WithLines = styled(H2)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&::before,
	&::after {
		content: '';
		display: block;
		width: 200px;
		height: 2px;
		background-color: white;
	}
	&::before {
		margin-bottom: 20px;
	}
	&::after {
		margin-top: 20px;
	}
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		&::before,
		&::after {
			width: 20px;
			margin-bottom: 0;
			margin-top: 0;
		}
		&::before {
			margin-right: 20px;
		}
		&::after {
			margin-left: 20px;
		}
	}
`;
