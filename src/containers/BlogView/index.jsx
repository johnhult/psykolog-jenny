import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Loader from 'components/Loader';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';

import { BlogViewStyled } from './style.jsx';

class BlogView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: null,

			// Events
			isLoading: true
		};
	}

	async initView() {
		// In case you need to get view-specific data
		const promises = [
			getDataContentful('2EKjdmixdqVPj8IZKWqSoy'),
			getDataContentful('blogPost', true, null, 'fields.publishDate[lt]')
		];
		const result = await Promise.all(promises);
		const data = { blogPosts: result[1], ...result[0] };

		console.log(data);

		await (() => {
			this.setState({
				data,
				isLoading: false
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		const { data } = this.state;

		if (this.state.isLoading) {
			return <Loader />;
		} else {
			return <BlogViewStyled title="Blogg - Psykolog Jenny"></BlogViewStyled>;
		}
	}
}

BlogView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

BlogView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(BlogView);
