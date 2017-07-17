import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { MenuItem } from 'material-ui/Menu';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { requestGenresData } from '../actions/requestActions';


/*
	запилить запрос на список жанров в компонент меню, чтобы не слать запрос на каждый клик,
	а данные уже были иннициализированны
*/

class GenresList extends React.Component {
	constructor() {
		super();
		this.state = {
			id: '',
			allowRender: false,
		}
		this.handleClose = this.handleClose.bind(this);
	}

	componentDidMount() {
		const { apiKey } = this.props;

		this.props.getTheData(apiKey);
		this.setState({
			allowRender: true,
		})
	}

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	}

	handleClose() {
		/*todo: fix that!!!*/
		const body = document.getElementById('body');
		body.remove('fixed');
		return this.props.isOpen = false;
	}

	render() {
		const { genres } = this.props;
		const genreListClass = classNames({
			'genres-list': true,
			visible: this.props.isOpen,
		});

		return (
			<div className={genreListClass}>
				<div className="genres-list-wrapper">
					{
						this.state.allowRender ?
						genres.map((genre, i) => {
							return (
								<ListItem className="genres-list__item" key={i}>
									<Link to={`/genres/${genre.id}`} className="genres-list__item-link">{genre.name}</Link>
								</ListItem>
							);
						})
						: <div>{'...loading'}</div>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		genres: state.genresData.genres,
		apiKey: state.mediaRequestData.apiKey,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getTheData: (key) => dispatch(requestGenresData(key)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
