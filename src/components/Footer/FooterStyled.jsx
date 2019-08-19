import styled from 'styled-components';

import colors from 'tokens/colors.mjs';

const FooterStyled = styled.div`
	background: ${colors.black};
	width: 100%;
	color: ${colors.white};
	margin-top: 100px;
	position: relative;
	z-index: 0;
`;

export const FooterFirst = styled.div`
	padding: 60px 5%;
	border-bottom: 1px solid rgba(255, 255, 255, 1);
	display: flex;
	.InputWrapper {
		margin-bottom: 40px;
	}
	button {
		margin: 0 auto;
	}
`;

export const Contact = styled.div`
	width: 70%;
	text-align: center;
`;
export const Social = styled.div`
	width: 30%;
	padding-left: 40px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const FooterSecond = styled.div`
	padding: 20px 5%;
	display: flex;
	align-items: center;
	justify-content: center;
	a  {
		text-decoration: underline;
	}
`;

export default FooterStyled;
