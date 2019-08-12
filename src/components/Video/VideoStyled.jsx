import styled from 'styled-components';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';

const VideoStyled = styled.div`
	width: 100%;
	margin-bottom: 60px;
	video {
		width: 100%;
		height: auto;
		max-height: 300px;
		margin-bottom: 10px;
		flex-shrink: 0;
		object-fit: cover;
		@media all and (min-width: ${breakpoints.tablet}) {
			margin-right: 40px;
			margin-bottom: 0;
			width: 50%;
		}
	}
`;

export const Flex = styled.div`
	display: flex;
	flex-direction: column;
	@media all and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
`;

export const InnerFlex = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	border-bottom: 1px solid ${colors.offwhite};
	.VideoButton {
		align-self: flex-end;
		margin-top: auto;
		margin-bottom: 10px;
	}
`;

export default VideoStyled;
