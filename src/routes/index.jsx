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
				<Route render={() => <Redirect to="/" />} />
			</Switch>
			// <Switch location={this.props.location}>
			// 	<Route
			// 		exact
			// 		path="/"
			// 		render={() => (
			// 			<TransitionGroup component={null}>
			// 				<CSSTransition key={this.props.location.key} timeout={0} unmountOnExit>
			// 					<HomeView />
			// 				</CSSTransition>
			// 			</TransitionGroup>
			// 		)}
			// 	/>
			// 	<Route
			// 		exact
			// 		path="/blog"
			// 		render={() => (
			// 			<TransitionGroup component={null}>
			// 				<CSSTransition key={this.props.location.key} timeout={10000} unmountOnExit>
			// 					<BlogView />
			// 				</CSSTransition>
			// 			</TransitionGroup>
			// 		)}
			// 	/>
			// 	<Route
			// 		exact
			// 		path="/blog/:id"
			// 		render={({ match }) => {
			// 			console.log('THIS IS MYT MATCH', match);
			// 			return (
			// 				<TransitionGroup component={null}>
			// 					<CSSTransition
			// 						key={this.props.location.key}
			// 						classNames="AnimatePostIn"
			// 						timeout={10000}
			// 						mountOnEnter={true}
			// 						unmountOnExit={true}
			// 						in={match != null}
			// 						appear={true}
			// 					>
			// 						<BlogPostView className="BlogWrapper" />
			// 					</CSSTransition>
			// 				</TransitionGroup>
			// 			);
			// 		}}
			// 	/>
			// 	<Route render={() => <Redirect to="/" />} />
			// </Switch>
		);
	}
}

Routes.propTypes = {
	location: PropTypes.object
};
// If you want to set a user and pass it down, use the below pattern
// <Route exact path="/" render={() => <SomeView user={this.state.user} />} />

export default withRouter(Routes);
