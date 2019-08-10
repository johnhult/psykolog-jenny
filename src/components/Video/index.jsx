import React from 'react';
import PropTypes from 'prop-types';

import H3 from 'components/H3';
import Button from 'components/Button';
import Paragraph from 'components/Paragraph';
import VideoStyled, { Flex, InnerFlex } from './VideoStyled';

const Video = ({ video, title, summary, url, ...props }) => (
	<VideoStyled {...props}>
		<H3 noMargin mBot={20}>
			{title}
		</H3>
		<Flex>
			{video && <video controls={false} autoPlay={false} src={video}></video>}
			<InnerFlex>
				<Paragraph>{summary}</Paragraph>
				<Button
					className="VideoButton"
					to={{ path: url, state: { video: video, title: title, summary: summary } }}
				>
					Se video
				</Button>
			</InnerFlex>
		</Flex>
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
