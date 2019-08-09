import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ConfettiGenerator from 'confetti-js';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import Loader from 'components/Loader';
import Header from 'compositions/Header';
import getDataContentful from 'helpers/contentful/getDataContentful.mjs';
import H2 from 'components/H2';
import Paragraph from 'components/Paragraph';
import ButtonLink from 'components/ButtonLink';
import Mega from 'components/Mega';
import Button from 'components/Button';
import Input from 'components/Input';
import BlogPost from 'components/BlogPost';
import Video from 'components/Video';

import {
	HomeViewStyled,
	Waves,
	BlogInfo,
	MegaSection,
	MegaBox,
	Subscribe,
	SubscribeCenter,
	Posts,
	PostBox,
	VideoBox
} from './style.jsx';

class HomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			appState: props.appState,

			// Data from backend(s)
			data: null,

			// Events
			isLoading: true
		};
		this.confettiSettings = {
			target: 'confetti-holder',
			max: '60',
			size: '1',
			animate: true,
			props: ['circle', 'square', 'triangle', 'line'],
			colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
			clock: '40',
			rotate: true,
			width: 0,
			height: 0
		};

		this.subscribe = React.createRef();
		this.confetti;
		this.resize;
	}

	async initView() {
		// In case you need to get view-specific data
		const promises = [
			getDataContentful('2EKjdmixdqVPj8IZKWqSoy'),
			getDataContentful('blogPost', true, 3, 'fields.publishDate[lt]'),
			getDataContentful('video', true, 3, 'sys.createdAt[lt]')
		];
		const result = await Promise.all(promises);
		const data = { blogPosts: result[1], videos: result[2], ...result[0] };

		console.log(data);

		await (() => {
			this.setState({
				data,
				isLoading: false
			});
		})();
		setTimeout(() => {
			this.confettiSettings.width = this.subscribe.current.clientWidth;
			this.confettiSettings.height = this.subscribe.current.clientHeight * 2;
			this.confetti = new ConfettiGenerator(this.confettiSettings);
			this.confetti.render();
		}, 500);
	}

	async componentDidMount() {
		await this.initView();
		window.addEventListener('resize', this.resize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	resize = () => {
		clearTimeout(this.resize);
		const doneResizing = () => {
			this.confetti.clear();
			this.confettiSettings.width = this.subscribe.current.clientWidth;
			this.confettiSettings.height = this.subscribe.current.clientHeight * 2;
			this.confetti = new ConfettiGenerator(this.confettiSettings);
			this.confetti.render();
		};
		this.resize = setTimeout(doneResizing, 200);
	};

	sendSubscribe = (email, name, subscribe) => {
		if (email.value && name.value && email.value.indexOf('@') > -1) {
			subscribe({ EMAIL: email.value, NAME: name.value });
		}
	};

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
									<Paragraph className="MegaText" noBot>
										{item.text}
									</Paragraph>
									<img src={`/assets/gfx/${item.img}.svg`}></img>
								</MegaBox>
							);
						})}
					</MegaSection>
					<Subscribe ref={this.subscribe}>
						<SubscribeCenter>
							<H2 mBot={20}>{data.break2Header} 💌</H2>
							<Paragraph className="Break2Text">{data.break2Text}</Paragraph>
							<MailchimpSubscribe
								url="https://gmail.us3.list-manage.com/subscribe/post?u=d2f2773ed07d4d31c91edb33d&amp;id=3d1a1f19e5"
								render={({ subscribe, status, message }) => (
									<form
										onSubmit={e => {
											e.preventDefault();
											this.sendSubscribe(e.target.email, e.target.name, subscribe);
										}}
									>
										<Input type="email" name="email" label="Email" required />
										<Input type="text" name="name" label="Förnamn" required />
										<Button
											h={40}
											w={220}
											secondary
											type="submit"
											disabled={status === 'success' || status === 'sending'}
											loading={status === 'sending'}
										>
											{status === 'sending'
												? 'Laddar 💌'
												: status === 'success'
												? 'Tack'
												: 'Prenumerera'}
										</Button>
										{(status === 'error' || status === 'success') && (
											<span className={`${status === 'error' ? 'Error' : 'Success'}`}>
												{status === 'error' && '😱 Något gick fel - '}
												{status === 'success' && 'Tack för att du prenumererar! 🙌'}
												{status === 'error' && (
													<span dangerouslySetInnerHTML={{ __html: message }}></span>
												)}
											</span>
										)}
									</form>
								)}
							></MailchimpSubscribe>
						</SubscribeCenter>
						<canvas
							id="confetti-holder"
							width={this.subscribe.current && this.subscribe.current.width}
							height={this.subscribe.current && this.subscribe.current.height}
						></canvas>
					</Subscribe>

					{data.blogPosts && (
						<Posts>
							<div className="Flex">
								<H2>{data.blogHeader}</H2>
								<ButtonLink to={data.blogButtonUrl}>{data.blogButton}</ButtonLink>
							</div>
							<PostBox>
								{data.blogPosts.map((post, index) => {
									return (
										<BlogPost
											key={`Post-${index}`}
											className="Post"
											img={post.mainImage.file.url}
											title={post.title}
											summary={post.summary}
											url={post.url}
										></BlogPost>
									);
								})}
							</PostBox>
						</Posts>
					)}
					{data.videos && (
						<Posts>
							<div className="Flex">
								<H2>{data.videoHeader}</H2>
								<ButtonLink to={data.videoButtonUrl}>{data.videoButton}</ButtonLink>
							</div>
							<VideoBox>
								{data.videos.map((video, index) => {
									return (
										<Video
											key={`Video-${index}`}
											className="Video"
											video={video.video.file.url}
											title={video.title}
											summary={video.summary}
											url={video.url}
										></Video>
									);
								})}
							</VideoBox>
						</Posts>
					)}
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
