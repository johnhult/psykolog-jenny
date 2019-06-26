import React from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';

import { StyledHeader, Wrapper, H2WithLines } from './style.jsx';

const Header = props => {
	return (
		<StyledHeader>
			<Wrapper>
				<img src={`${props.img.file.url}?w=200&h=200&fit=fill&f=face`}></img>
				<div>
					<H1>Psykolog Jenny</H1>
					<H2WithLines>Snart kommer tankeväckande saker hit!</H2WithLines>
				</div>
			</Wrapper>
		</StyledHeader>
	);
};

Header.propTypes = {
	img: PropTypes.object
};

Header.defaultTypes = {};

export default Header;
