import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Loader from 'components/Loader';

import View from 'containers/View';
import Header from 'compositions/Header';

class HomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: [],

			// Events
			isLoading: true
		};
	}

	async initView() {
		// In case you need to get view-specific data
		// const data = await getData(endpoint, options);

		await (() => {
			this.setState({
				// data,
				isLoading: false
			});
		})();
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		return (
			<View title="❤️ Välkommen">
				{this.state.isLoading && <Loader />}
				{!this.state.isLoading && <Header />}
			</View>
		);
	}
}

HomeView.propTypes = {
	appState: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

HomeView.defaultTypes = {
	appState: {},
	data: {}
};

export default withRouter(HomeView);
