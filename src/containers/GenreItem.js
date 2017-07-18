import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestGenreItems } from '../actions/requestActions';
import Movie from '../components/Movie';
import Loader from '../components/Loader';

/*todo: запилить подгрузку фильмов по данному жанру со страничными*/

class GenreItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parent: 'genres',
			indexPage: props.params.id,
		}
	}

	componentWillMount() {
		this.setState({
			indexPage: this.props.params.id || this.state.indexPage,
		});
	}

	componentDidMount() {
		const { apiKey, bool } = this.props;
		const { id } = this.props.params;

		this.props.getGenreItems(id, apiKey, bool);
	};

	componentWillReceiveProps(newProps, newState) {
		this.setState({
			indexPage: newProps.params.id || this.props.id,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { apiKey, bool } = this.props;
		const { id } = this.props.params;

		if (prevState.indexPage !== this.state.indexPage) {
			this.props.getGenreItems(id, apiKey, bool);
			this.setState({
				indexPage: this.state.indexPage,
			});
		}
	};

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	};

	displayGenreItems() {
		const { movies, config } = this.props;
		const { parent } = this.state;
		const imageSize = config.images.poster_sizes[3];

		return movies.results.map((movie, i) => {
			return (
				<Movie
					key={i}
					movie={movie}
					config={config}
					imageSize={imageSize}
					parent={parent}
				/>
			);
		});
	};

	displayGenreName() {
		const { genres } = this.props;
		const { id } = this.props.params;

		let genreIndex = genres.findIndex(index => index.id === +id);
		return genres[genreIndex].name;
	}

	render() {
		return (
			<div className="genres-item-list">
				{
					this.props.loaded ?
					<div className="genres-item-wrapper">
						<div className="genres-item-header">
							<h1><span>{this.displayGenreName()}</span></h1>
						</div>
						<div className="genres-item-items">
							{this.displayGenreItems()}
						</div>
					</div> :
					<div className="loader">
						<Loader />
					</div>
				}
			</div>
		)
	};
};

function mapStateToProps(state) {
	return {
		movies: state.genreItems.movies,
		config: state.genreItems.config,
		apiKey: state.mediaRequestData.apiKey,
		genres: state.genreItems.genres,
		bool: state.mediaRequestData.bool,
		loaded: state.genreItems.loaded,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGenreItems: (id, key, bool) => dispatch(requestGenreItems(id, key, bool)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreItem);
