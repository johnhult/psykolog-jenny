import styled from 'styled-components';
import Note from 'components/Note';

import colors from 'tokens/colors.mjs';

const TagsStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 10px;
`;

export const NoteTag = styled(Note)`
	padding: 5px 10px;
	border: 1px solid ${colors.black};
	color: ${colors.black};
	margin-right: 5px;
	border-radius: 50px;
	margin-bottom: 5px;
`;

export default TagsStyled;
