import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import colors from 'tokens/colors.mjs';

const size = (w, h) => {
	return css`
		height: ${h ? h : w};
		width: ${w};
	`;
};

const c = () => {
	return css`
		*zoom: 1;
		&:before,
		&:after {
			display: table;
			content: '';
		}
		&:after {
			clear: both;
		}
	`;
};

const LoaderStyled = styled.div`
	width: 200px;
	height: 100px;
	width: ${({ w }) => (w ? `${w}px` : '200px')};
	height: ${({ h }) => (h ? `${h}px` : '100vh')};
	position: relative;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	.LoadingText {
		margin-top: 110px;
	}
	.loading {
		position: absolute;
		${size('112px', '70px')};
		${c()};

		.finger {
			float: left;
			margin: 0 2px 0 0;
			${size('20px', '100%')};
		}
		.finger-1 {
			animation: finger-1-animation 2s infinite ease-out;

			span {
				animation: finger-1-animation-span 2s infinite ease-out;
			}
			i {
				animation: finger-1-animation-i 2s infinite ease-out;
			}
		}
		.finger-2 {
			animation: finger-2-animation 2s infinite ease-out;

			span {
				animation: finger-2-animation-span 2s infinite ease-out;
			}
			i {
				animation: finger-2-animation-i 2s infinite ease-out;
			}
		}
		.finger-3 {
			animation: finger-3-animation 2s infinite ease-out;

			span {
				animation: finger-3-animation-span 2s infinite ease-out;
			}
			i {
				animation: finger-3-animation-i 2s infinite ease-out;
			}
		}
		.finger-4 {
			animation: finger-4-animation 2s infinite ease-out;

			span {
				animation: finger-4-animation-span 2s infinite ease-out;
			}
			i {
				animation: finger-4-animation-i 2s infinite ease-out;
			}
		}
		.finger-item {
			position: relative;
			${size('100%')};
			border-radius: 6px 6px 8px 8px;
			background: ${colors.secondary};

			span {
				position: absolute;
				left: 0;
				top: 0;
				${size('100%', 'auto')};
				padding: 5px 5px 0 5px;

				&:before,
				&:after {
					content: '';
					position: relative;
					display: block;
					margin: 0 0 2px 0;
					${size('100%', '2px')};
					background: ${colors.white};
				}
			}
			i {
				position: absolute;
				left: 3px;
				bottom: 3px;
				${size('14px', '14px')};
				border-radius: 10px 10px 7px 7px;
				background: ${colors.white};
			}
		}
		.last-finger {
			position: relative;
			float: left;
			${size('24px', '100%')};
			overflow: hidden;
		}
		.last-finger-item {
			position: absolute;
			right: 0;
			top: 32px;
			${size('110%', '20px')};
			border-radius: 0 5px 14px 0;
			background: ${darken(0.05, colors.secondary)};
			animation: finger-5-animation 2s infinite linear;

			i {
				position: absolute;
				left: 0;
				top: -3px;
				${size('25px', '5px')};
				border-radius: 0 10px 0 0;
				background: ${darken(0.05, colors.secondary)};
				overflow: hidden;

				&::after {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					${size('34px', '20px')};
					border-radius: 0 0 15px 15px;
					background: ${lighten(0.05, colors.secondary)};
				}
			}
		}
	}

	// ANIMATION
	// ---------
	@keyframes finger-1-animation {
		0% {
			padding: 12px 0 5px 0;
		}
		20% {
			padding: 12px 0 5px 0;
		}
		29% {
			padding: 4px 0 24px 0;
		}
		35% {
			padding: 4px 0 24px 0;
		}
		41% {
			padding: 12px 0 5px 0;
		}
		100% {
			padding: 12px 0 5px 0;
		}
	}
	@keyframes finger-1-animation-span {
		0% {
			top: 0;
		}
		20% {
			top: 0;
		}
		29% {
			top: -7px;
		}
		35% {
			top: -7px;
		}
		41% {
			top: 0;
		}
		100% {
			top: 0;
		}
	}
	@keyframes finger-1-animation-i {
		0% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		20% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		29% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		35% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		41% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		100% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
	}

	@keyframes finger-2-animation {
		0% {
			padding: 6px 0 2px 0;
		}
		24% {
			padding: 6px 0 2px 0;
		}
		33% {
			padding: 2px 0 16px 0;
		}
		39% {
			padding: 2px 0 16px 0;
		}
		45% {
			padding: 6px 0 2px 0;
		}
		100% {
			padding: 6px 0 2px 0;
		}
	}
	@keyframes finger-2-animation-span {
		0% {
			top: 0;
		}
		24% {
			top: 0;
		}
		33% {
			top: -7px;
		}
		39% {
			top: -7px;
		}
		45% {
			top: 0;
		}
		100% {
			top: 0;
		}
	}
	@keyframes finger-2-animation-i {
		0% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		24% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		33% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		39% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		45% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		100% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
	}

	@keyframes finger-3-animation {
		0% {
			padding: 0 0 0 0;
		}
		28% {
			padding: 0 0 0 0;
		}
		37% {
			padding: 0 0 12px 0;
		}
		43% {
			padding: 0 0 12px 0;
		}
		49% {
			padding: 0 0 0 0;
		}
		100% {
			padding: 0 0 0 0;
		}
	}
	@keyframes finger-3-animation-span {
		0% {
			top: 0;
		}
		28% {
			top: 0;
		}
		37% {
			top: -7px;
		}
		43% {
			top: -7px;
		}
		49% {
			top: 0;
		}
		100% {
			top: 0;
		}
	}
	@keyframes finger-3-animation-i {
		0% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		28% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		37% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		43% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		49% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		100% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
	}

	@keyframes finger-4-animation {
		0% {
			padding: 8px 0 3px 0;
		}
		32% {
			padding: 8px 0 3px 0;
		}
		41% {
			padding: 4px 0 20px 0;
		}
		47% {
			padding: 4px 0 20px 0;
		}
		53% {
			padding: 8px 0 3px 0;
		}
		100% {
			padding: 8px 0 3px 0;
		}
	}
	@keyframes finger-4-animation-span {
		0% {
			top: 0;
		}
		32% {
			top: 0;
		}
		41% {
			top: -7px;
		}
		47% {
			top: -7px;
		}
		53% {
			top: 0;
		}
		100% {
			top: 0;
		}
	}
	@keyframes finger-4-animation-i {
		0% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		32% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		41% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		47% {
			bottom: 8px;
			height: 12px;
			border-radius: 7px 7px 4px 4px;
		}
		53% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
		100% {
			bottom: 3px;
			height: 14px;
			border-radius: 10px 10px 7px 7px;
		}
	}

	@keyframes finger-5-animation {
		0% {
			top: 32px;
			right: 0;
			border-radius: 0 5px 14px 0;
			transform: rotate(0deg);
		}
		34% {
			top: 32px;
			right: 0;
			border-radius: 0 5px 14px 0;
			transform: rotate(0deg);
		}
		43% {
			top: 20px;
			right: 2px;
			border-radius: 0 8px 20px 0;
			transform: rotate(-12deg);
		}
		50% {
			top: 20px;
			right: 2px;
			border-radius: 0 8px 20px 0;
			transform: rotate(-12deg);
		}
		60% {
			top: 32px;
			right: 0;
			border-radius: 0 5px 14px 0;
			transform: rotate(0deg);
		}
		100% {
			top: 32px;
			right: 0;
			border-radius: 0 5px 14px 0;
			transform: rotate(0deg);
		}
	}
`;

export default LoaderStyled;
