import styled from 'styled-components';

//import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const WavesStyled = styled.img`
	position: absolute;
	left: 0;
	z-index: -10;
	width: 100%;
	min-width: 1400px;
	margin-top: ${({ mTop }) => (mTop ? `${mTop.mobile}px` : '-160px')};
	@media all and (min-width: ${breakpoints.tablet}) {
		margin-top: ${({ mTop }) => (mTop ? `${mTop.desktop}px` : '-100px')};
	}
`;

export default WavesStyled;
