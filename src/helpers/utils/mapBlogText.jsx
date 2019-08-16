import React from 'react';
import Paragraph from 'components/Paragraph';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function mapBlogText(blogText) {
	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
		}
	};

	return documentToReactComponents(blogText, options);
}
