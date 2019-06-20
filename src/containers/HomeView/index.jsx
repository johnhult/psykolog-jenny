import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';

import Loader from 'components/Loader';
import Header from 'compositions/Header';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';

import { HomeViewStyled } from './style.jsx';

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
		this.confettiSettings = {
			target: 'confetti-holder',
			max: '120',
			size: '3',
			animate: true,
			props: ['circle', 'square', 'triangle', 'line'],
			colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
			clock: '40',
			rotate: true
		};
	}

	async initView() {
		// In case you need to get view-specific data
		const data = await getDataContentful('2EKjdmixdqVPj8IZKWqSoy');

		await (() => {
			this.setState({
				data,
				isLoading: false
			});
		})();

		let confetti = new ConfettiGenerator(this.confettiSettings);
		confetti.render();
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		return (
			<HomeViewStyled title="❤️ Välkommen">
				{this.state.isLoading && <Loader />}
				{!this.state.isLoading && <Header img={this.state.data.headerImage} />}
				<canvas id="confetti-holder"></canvas>
			</HomeViewStyled>
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
