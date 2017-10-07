import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';

import injectTapEventPlugin from 'react-tap-event-plugin';


import './index.css';
import configureStore from './store/configureStore';
import routes from './routes/routes';

const store = configureStore;
const history = syncHistoryWithStore(browserHistory, store);
const theme = createMuiTheme();

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);

registerServiceWorker();
