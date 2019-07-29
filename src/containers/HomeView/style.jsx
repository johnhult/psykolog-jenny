import styled from 'styled-components';

import View from 'containers/View';

import colors from 'tokens/colors.mjs';

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
	margin-top: -5%;
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
