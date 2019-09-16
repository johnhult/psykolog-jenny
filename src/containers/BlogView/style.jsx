import styled from 'styled-components';
import { transparentize } from 'polished';

import View from 'containers/View';

import colors from 'tokens/colors.mjs';
import breakpoints from 'helpers/constants/breakpoints.mjs';
import Button from 'components/Button/index';
import H3 from 'components/H3';
import Loader from '../../components/Loader/index';

export const BlogViewStyled = styled(View)`
	text-align: center;
`;

export const BlogHeader = styled.div`
	padding: 100px 5% 40px;
	max-width: calc(1100px + 10%);
	margin: 0 auto;
	@media all and (min-width: ${breakpoints.tablet}) {
		padding: 100px 5%;
	}
`;

export const Filter = styled.div`
	padding: 0 5%;
	max-width: calc(1100px + 10%);
	margin: 0 auto;
	span {
		display: inline-block;
		margin-bottom: 10px;
	}
`;

export const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const Tag = styled.div`
	padding: 10px 20px;
	border: 1px solid ${colors.secondary};
	border-radius: 50px;
	margin: 5px;
	cursor: pointer;
	transition: 0.2s;
	background-color: ${({ active }) => (active ? colors.secondary : colors.white)};
	color: ${({ active }) => (active ? colors.white : null)};
	&:hover {
		background-color: ${({ active }) =>
			active ? transparentize(0.2, colors.secondary) : transparentize(0.8, colors.secondary)};
	}
`;

export const Posts = styled.div`
	max-width: calc(1100px + 10%);
	padding: 40px 5% 0;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
	column-gap: 10px;
	row-gap: 10px;
	width: 100%;
	@media all and (min-width: ${breakpoints.tablet}) {
		padding: 100px 5% 0;
	}
	@media all and (min-width: ${breakpoints.desktop}) {
		grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
	}
`;

export const NoPosts = styled(H3)`
	grid-column: 1 / -1;
	height: 100px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.grey};
`;

export const LoadingPosts = styled(Loader)`
	margin-top: 20px;
`;

export const LoadMoreButton = styled(Button)`
	margin: 100px auto 0;
`;
