import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import MenuStyled from './MenuStyled';

const Menu = props => (
	<MenuStyled {...props}>
		<NavLink exact activeClassName="ActiveRoute" to="">
			Hem
		</NavLink>
		<NavLink activeClassName="ActiveRoute" to="/blogg">
			Blogg
		</NavLink>
		<NavLink activeClassName="ActiveRoute" to="/videos">
			Videos
		</NavLink>
		<NavLink activeClassName="ActiveRoute" to="/tjanster">
			Tjänster
		</NavLink>
		<NavLink activeClassName="ActiveRoute" to="/om-mig">
			Om mig
		</NavLink>
	</MenuStyled>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
