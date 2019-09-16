import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Loader from 'components/Loader';

/* Note: Loadable may not work correctly in SSR */
const HomeView = Loadable({
	loader: () => import('containers/HomeView'),
	loading: () => <Loader />
});
const BlogView = Loadable({
	loader: () => import('containers/BlogView'),
	loading: () => <Loader />
});
const BlogPostView = Loadable({
	loader: () => import('containers/BlogPostView'),
	loading: () => <Loader />
});
const VideoView = Loadable({
	loader: () => import('containers/VideoView'),
	loading: () => <Loader />
});

class Routes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {}
		};
		this.ref = React.createRef();
	}

	render() {
		return (
			<Switch location={this.props.location}>
				<Route exact path="/" render={() => <HomeView />} />
				<Route exact path="/blog" render={() => <BlogView />} />
				<Route
					exact
					path="/blog/:id"
					render={() => {
						// console.log('THIS IS MYT MATCH', match);
						return <BlogPostView className="BlogWrapper" />;
					}}
				/>
				<Route exact path="/videos" render={() => <VideoView />} />
				<Route render={() => <Redirect to="/" />} />
			</Switch>
		);
	}
}

Routes.propTypes = {
	location: PropTypes.object
};
// If you want to set a user and pass it down, use the below pattern
// <Route exact path="/" render={() => <SomeView user={this.state.user} />} />

export default withRouter(Routes);
