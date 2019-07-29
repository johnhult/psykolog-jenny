import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';

import Loader from 'components/Loader';
import Header from 'compositions/Header';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';
import H2 from 'components/H2';
import Paragraph from 'components/Paragraph';
import ButtonLink from 'components/ButtonLink';
import Mega from 'components/Mega/index.jsx';

import { HomeViewStyled, Waves, BlogInfo, MegaSection, MegaBox } from './style.jsx';

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
			size: '1',
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
		console.log(data);

		await (() => {
			this.setState({
				data,
				isLoading: false
			});
		})();

		let confetti = new ConfettiGenerator(this.confettiSettings);
		// confetti.render();
	}

	async componentDidMount() {
		await this.initView();
	}

	render() {
		const { data } = this.state;
		const mega = data
			? [
					{ header: data.mega1Header, text: data.mega1Text, img: 'glasses' },
					{ header: data.mega2Header, text: data.mega2Text, img: 'lightning' },
					{ header: data.mega3Header, text: data.mega3Text, img: 'flame' }
			  ]
			: [];
		if (this.state.isLoading) {
			return <Loader />;
		} else {
			return (
				<HomeViewStyled title="❤️ Välkommen">
					<Header img={data.headerImage} text={data.introText} />
					<Waves src="/assets/gfx/waves.svg"></Waves>
					<BlogInfo>
						<H2>{data.break1Header}</H2>
						<Paragraph>{data.break1Text}</Paragraph>
						<ButtonLink className="Left" to={data.break1ButtonUrl}>
							{data.break1ButtonText}
						</ButtonLink>
					</BlogInfo>
					<MegaSection>
						{mega.map((item, index) => {
							return (
								<MegaBox key={`Mega-${index}`}>
									<Mega className="Mega" offwhite>
										{item.header}
									</Mega>
									<Paragraph>{item.text}</Paragraph>
									<img src={`/assets/gfx/${item.img}.svg`}></img>
								</MegaBox>
							);
						})}
					</MegaSection>
					<canvas id="confetti-holder"></canvas>
				</HomeViewStyled>
			);
		}
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
