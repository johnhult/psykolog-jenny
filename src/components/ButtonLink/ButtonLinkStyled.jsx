import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import fontWeights from 'tokens/fontWeights.mjs';

const ButtonLinkStyled = styled.div`
	color: ${colors.secondary};
	font-weight: ${fontWeights.bold};
	display: inline-flex;
	align-items: center;
	padding: 5px;
	img {
		transition: 0.2s;
		margin-left: 10px;
	}
	&:hover {
		img {
			transform: translateX(5px);
		}
	}
`;

export default ButtonLinkStyled;
