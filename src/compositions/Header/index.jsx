import React from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';

import { StyledHeader, Wrapper, H2WithLines } from './style.jsx';

const Header = () => {
	return (
		<StyledHeader>
			<Wrapper>
				<H1>Psykolog Jenny</H1>
				<H2WithLines>Snart kommer tankeväckande saker hit!</H2WithLines>
			</Wrapper>
		</StyledHeader>
	);
};

Header.propTypes = {};

Header.defaultTypes = {};

export default Header;
