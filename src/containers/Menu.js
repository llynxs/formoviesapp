import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import Drawer from 'material-ui/Drawer';
// import { Menu as MenuHolder } from 'material-ui/Menu';

import List, { ListItem } from 'material-ui/List';

import { mediaRequest, requestGenresData } from '../actions/requestActions';

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

	componentDidMount() {
		const { apiKey } = this.props;
		this.props.getGenresData(apiKey);
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
		// const style = {
		// 	display: 'inline-block',
		// 	margin: '0',
		// };

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
						width={200}
						open={this.state.open.left}
						onRequestClose={this.handleLeftClose}
						onClick={this.handleLeftClose}
					>
						<GenresList genres={this.props.genresList}/>
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
		genresList: state.genresData.genres,
		loaded: state.genresData.loaded,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getTheData: (key, bool, page) => dispatch(mediaRequest(key, bool, page)),
		getGenresData: (key) => dispatch(requestGenresData(key)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
