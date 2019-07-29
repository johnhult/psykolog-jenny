import styled from 'styled-components';

import colors from 'tokens/colors.mjs';

const MenuStyled = styled.nav`
	width: 100%;
	height: 60px;
	background-color: ${colors.white};
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	z-index: 100;
	a {
		position: relative;
		padding: 5px 20px;
		opacity: 0.5;
		color: ${colors.black};
		font-weight: 800;
		transition: 0.2s;
		&.ActiveRoute {
			opacity: 1;
			::after {
				transform: scaleX(1);
			}
		}
		::after {
			content: '';
			display: block;
			position: absolute;
			right: 10px;
			bottom: 2px;
			background-color: ${colors.secondary};
			width: 40%;
			height: 12px;
			transform: scaleX(0);
			transition: 0.2s;
			transform-origin: 100% 0%;
			z-index: -1;
		}
		&:hover {
			opacity: 1;
		}
	}
`;

export default MenuStyled;
