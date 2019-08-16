import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from 'app';

// APP_VERSION is set in Webpack's definePlugin
const ScrollToTop = ({ children, location: { pathname } }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return children || null;
};

const Scroll = withRouter(ScrollToTop);

const ClientSideApp = () => (
	<BrowserRouter>
		<Scroll>
			<App appVersion={APP_VERSION} />
		</Scroll>
	</BrowserRouter>
);

render(<ClientSideApp />, document.querySelector('#root'));

// For SSR, use:
// ReactDOM.hydrate(<ClientSideApp />, document.querySelector('#root'));
