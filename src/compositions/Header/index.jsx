import React from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';

import { StyledHeader, Wrapper, BlobImg } from './style.jsx';
import Paragraph from '../../components/Paragraph/index.jsx';

const Header = props => {
	return (
		<StyledHeader>
			<BlobImg src="/assets/gfx/gradient-blob.svg"></BlobImg>
			<BlobImg className="Nudge" src="/assets/gfx/blue-blob.svg"></BlobImg>
			<Wrapper>
				<div>
					<H1>Psykolog Jenny</H1>
					<Paragraph noBot>{props.text}</Paragraph>
				</div>
				<img src={`${props.img.file.url}?w=200&h=200&fit=fill&f=face`}></img>
			</Wrapper>
		</StyledHeader>
	);
};

Header.propTypes = {
	img: PropTypes.object,
	text: PropTypes.string
};

Header.defaultTypes = {};

export default Header;
