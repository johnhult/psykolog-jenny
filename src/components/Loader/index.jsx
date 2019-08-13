import React from 'react';
import PropTypes from 'prop-types';

// import Graphic from 'components/Graphic';

import LoaderStyled from './LoaderStyled';

const Loader = props => (
	<LoaderStyled {...props}>
		<div className="loading">
			<div className="finger finger-1">
				<div className="finger-item">
					<span></span>
					<i></i>
				</div>
			</div>
			<div className="finger finger-2">
				<div className="finger-item">
					<span></span>
					<i></i>
				</div>
			</div>
			<div className="finger finger-3">
				<div className="finger-item">
					<span></span>
					<i></i>
				</div>
			</div>
			<div className="finger finger-4">
				<div className="finger-item">
					<span></span>
					<i></i>
				</div>
			</div>
			<div className="last-finger">
				<div className="last-finger-item">
					<i></i>
				</div>
			</div>
		</div>
		<span className="LoadingText">Loading...</span>
	</LoaderStyled>
);

Loader.propTypes = {
	green: PropTypes.bool
	/*
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.element
	]).isRequired,
	to: PropTypes.string.isRequired
	*/
};

Loader.defaultProps = {
	// target: '_self'
};

export default Loader;
