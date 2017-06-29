import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import { requestGenresData } from '../actions/requestActions';

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
			<div className={genreListClass} onClick={this.hadleOpener}>
				<div className="genres-list-wrapper">
					{
						this.state.allowRender ?
						genres.map((genre, i) => {
							return (
								<div className="genres-list__item" key={i}>
									<Link to={`/genres/${genre.id}`} onClick={this.handleClose} className="genres-list__item-link">{genre.name}</Link>
								</div>
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
