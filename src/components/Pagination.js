/*Copyright (c) lotp - regesteraccount@hotmail.com*/
/*authors pages: https://github.com/lo-tp, http://blog.lotp.xyz*/

import React from 'react';
import Pagination from 'material-ui-pagination';
import { browserHistory } from 'react-router'

import { pagesLimit } from '../constants/constantsApi';

class Pagin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allowRender: false,
			total: pagesLimit,
			display: 10,
			number: +props.middlePage,
		}
		this.setTotal = this.setTotal.bind(this);
		this.setDisplay = this.setDisplay.bind(this);
	}

	setTotal(event, total) {
		total = total.trim();
		if (total.match(/^\d*$/)) {
			if (total !== '') {
				total = parseInt(total, 10);
			} else {
				total = 0;
			}
			this.setState({ total });
		}
	}

	setDisplay(event, display) {
		display = display.trim();
		if (display.match(/^\d*$/)) {
			if (display !== '') {
				display = parseInt(display, 10);
			} else {
				display = 0;
			}
			this.setState({ display });
		}
	}

	render() {
		return (
			<Pagination
				total={ this.state.total }
				current={ this.state.number }
				display={ this.state.display }
				onChange={number => {
					let path = `/${this.props.url}/page=${number}`;
					this.setState({ number });
					browserHistory.push(path);
				}}
			/>
		)
	}
}

export default Pagin;
