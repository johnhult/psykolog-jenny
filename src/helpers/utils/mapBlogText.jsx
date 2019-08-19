import React from 'react';
import Paragraph from 'components/Paragraph';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import PostEmbedded from 'components/PostEmbedded';
import H3 from '../../components/H3/index';

export default function mapBlogText(blogText) {
	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => {
				const paragraph = <Paragraph>{children}</Paragraph>;
				return paragraph;
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				const h3 = <H3>{children}</H3>;
				return h3;
			},
			[BLOCKS.HYPERLINK]: (node, children) => {
				const h3 = <H3>{children}</H3>;
				return h3;
			},
			[BLOCKS.EMBEDDED_ASSET]: node => {
				const img = <img src={node.data.target.fields.file.url}></img>;
				return img;
			},
			[BLOCKS.EMBEDDED_ENTRY]: node => {
				let embedded;
				if (node.data.target.sys.contentType.sys.id === 'blogPost') {
					embedded = (
						<PostEmbedded
							mainImage={
								node.data.target.fields.mainImage.fields
									? node.data.target.fields.mainImage.fields
									: node.data.target.fields.mainImage
							}
							summary={node.data.target.fields.summary}
							url={`/blog/${node.data.target.fields.url}`}
							tags={node.data.target.fields.tags}
							text={node.data.target.fields.text}
							title={node.data.target.fields.title}
							to={node.data.target.fields.url}
						></PostEmbedded>
					);
				}
				return embedded;
			}
		},
		renderMark: {
			[MARKS.BOLD]: children => {
				const bold = <b style={{ fontWeight: 900 }}>{children}</b>;
				return bold;
			}
		}
	};

	return documentToReactComponents(blogText, options);
}
