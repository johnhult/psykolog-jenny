import React from 'react';
import PropTypes from 'prop-types';

import H3 from 'components/H3';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import VideoStyled from './VideoStyled';

const Video = ({ video, title, summary, url, ...props }) => (
	<VideoStyled {...props}>
		<H3 noMargin mBot={20}>
			{title}
		</H3>
		<>{video && <video controls={false} autoPlay={false} src={video}></video>}</>
		<div>
			<Paragraph>{summary}</Paragraph>
			<Button to={url} className="BlogPostButton">
				Läs inlägg
			</Button>
		</div>
	</VideoStyled>
);

Video.propTypes = {
	video: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
	url: PropTypes.string
};

Video.defaultProps = {};

export default Video;
