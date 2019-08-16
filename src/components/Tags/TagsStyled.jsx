import styled from 'styled-components';
import Note from 'components/Note';

import colors from 'tokens/colors.mjs';

const TagsStyled = styled.div`
	display: flex;
	margin-top: 10px;
`;

export const NoteTag = styled(Note)`
	padding: 5px 10px;
	border: 1px solid ${colors.black};
	color: ${colors.black};
	margin-right: 10px;
	border-radius: 50px;
`;

export default TagsStyled;
