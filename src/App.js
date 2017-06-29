import React from 'react';

// import logo from './logo.svg';
import './App.css';
import './style.css';

import Menu from './containers/Menu';

class App extends React.Component {
	render() {
		const { children, ...newProps } = this.props;
		const ChildItem = React.cloneElement(children, newProps);

		return (
			<div className="app">
				<div className="app-wrapper">
					<div className="app-menu">
						<Menu {...newProps} />
					</div>
					<div className="app-content">
						{ChildItem}
					</div>
				</div>
				<div className="footer">
					Footer coming soon...
				</div>
			</div>
		);
	}
};

export default App;
