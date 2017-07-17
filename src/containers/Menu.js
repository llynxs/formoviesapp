import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import { Menu as MenuHolder } from 'material-ui/Menu';
import {MenuItem} from 'material-ui/Menu';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

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
	};

	handleClose() {
		this.setState({
			open: false
		});
	};

	toggleDrawer = (side, open) => {
		const drawerState = {};
		drawerState[side] = open;
		this.setState({ open: drawerState });
	};

	handleLeftOpen = () => this.toggleDrawer('left', true);
	handleLeftClose = () => this.toggleDrawer('left', false);

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
					<List className="menu-list">
						<ListItem style={itemStyle} className="menu-list__item">
							<IndexLink to={`/`} onClick={this.handleIndexChange} className="menu-list__item-link">Home</IndexLink>
						</ListItem>
						<ListItem style={itemStyle} className="menu-list__item">
							<Link onClick={this.handleLeftOpen} className="menu-list__item-link">
								Genres
							</Link>
						</ListItem>
						<ListItem style={itemStyle} className="menu-list__item">
							<Link className="menu-list__item-link">Sorting</Link>
						</ListItem>
						<ListItem style={itemStyle} className="menu-list__item">
							<Link className="menu-list__item-link">Collections</Link>
						</ListItem>
					</List>
				</div>
				<Drawer
					docked={false}
					width={200}
					// open={this.state.open}
					open={this.state.open.left}
					onRequestClose={this.handleLeftClose}
					onClick={this.handleLeftClose}
				>
					<GenresList />
				</Drawer>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// console.log(state);
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
