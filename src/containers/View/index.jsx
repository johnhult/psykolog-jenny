import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Footer from 'components/Footer';

import ViewStyled from './ViewStyled';

const View = ({ title, ...props }) => (
	<ViewStyled {...props}>
		<Helmet>
			<title>{title}</title>
			<link rel="canonical" href={window.location.href} />
		</Helmet>
		{props.children}
	</ViewStyled>
);

View.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]),
	title: PropTypes.string.isRequired
};

export default View;
