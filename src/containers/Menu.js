import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import {Menu as Menuer} from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { mediaRequest } from '../actions/requestActions';

import GenresList from '../components/GenresList';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleIndexChange = this.handleIndexChange.bind(this);
	}

	handleToggle() {
		this.setState({
			open: !this.state.open
		});
	}

	handleClose() {
		this.setState({
			open: false
		});
	}

	handleIndexChange() {
		const { bool, apiKey, page } = this.props;

		this.props.getTheData(apiKey, bool, page);
	}

	render() {
		const style = {
			display: 'inline-block',
			margin: '0',
		};

		const itemStyle = {
			padding: '0',
			textAlign: 'left'
		}

		return (
			<div className="menu">
				<div className="menu-wrapper">
				<Paper style={style} zDepth={0}>
					<Menuer className="menu-list">
						<MenuItem style={itemStyle} className="menu-list__item">
							<IndexLink to={`/`} onClick={this.handleIndexChange} className="menu-list__item-link">Home</IndexLink>
						</MenuItem>
						<MenuItem style={itemStyle} className="menu-list__item">
							<Link onTouchTap={this.handleToggle} className="menu-list__item-link">
								Genres
							</Link>
						</MenuItem>
						<MenuItem style={itemStyle} className="menu-list__item">
							<Link className="menu-list__item-link">Sorting</Link>
						</MenuItem>
						<MenuItem style={itemStyle} className="menu-list__item">
							<Link className="menu-list__item-link">Collections</Link>
						</MenuItem>
					</Menuer>
					</Paper>
				</div>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<GenresList />
				</Drawer>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		bool: state.mediaRequestData.bool,
		apiKey: state.mediaRequestData.apiKey,
		page: state.mediaRequestData.page,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getTheData: (key, bool, page) => dispatch(mediaRequest(key, bool, page)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
