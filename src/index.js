import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';


import './index.css';
import configureStore from './store/configureStore';
import routes from './routes/routes';

const store = configureStore;
export const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root'));

registerServiceWorker();
