import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mediaRequest } from '../actions/requestActions';

import Movie from '../components/Movie';
import { Loader } from '../components/Loader';
import Pagination from '../components/Pagination';

class MoviesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allowRender: false,
			pageOfItems: [],
			indexPage: props.params.page || props.page,
			parent: 'movies',
			url: 'movies'
		}
		this.onChangePage = this.onChangePage.bind(this);
	};

	componentWillMount() {
		this.setState({
			indexPage: this.props.params.page || this.state.indexPage,
		});
	};

	componentDidMount() {
		const { bool, apiKey } = this.props;
		const { indexPage } = this.state;

		this.props.getTheData(apiKey, bool, indexPage);
		this.setState({
			allowRender: true,
		});
	};

	componentWillReceiveProps(newProps, newState) {
		this.setState({
			indexPage: newProps.params.page || this.props.page,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.indexPage !== this.state.indexPage) {
			this.props.getTheData(this.props.apiKey, false, this.props.params.page);
			this.setState({
				indexPage: this.state.indexPage,
			});
		}
	};

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	};

	onChangePage(index) {
		this.setState({
			index: index,
		});
	};

	movieDisplay() {
		const { movies, genres, config } = this.props;
		const { indexPage } = this.state;
		const { parent } = this.state;
		const imageSize = config.images.poster_sizes[3];

		return movies.map((movie, i) => {
			let movieGenres = genres.filter((genre, index) => {
				for (let i = 0; i < movie.genre_ids.length; i++) {
					let identifier = movie.genre_ids[i];

					if (identifier === genre.id) {
						return genre.name;
					}
				};
			});

			return (
				<Movie
					movie={movie}
					key={i}
					genres={movieGenres}
					config={config}
					indexPage={indexPage}
					imageSize={imageSize}
					parent={parent}
				/>
			);
		});
	};

	render() {
		return(
			<div className="movies-wrapper">
				<h1 className="movies-header">
					<span>MoviesList</span>
				</h1>
				
				<div className="movies-list">
					{
						this.state.allowRender ?
						this.movieDisplay() :
						<div className="loader">
							<Loader />
						</div>
					}
				</div>
				{
					this.state.allowRender
					&&
					<div className="pagination">
						<Pagination
							pages={this.props.totalPages}
							onChangePage={this.onChangePage}
							middlePage={this.state.indexPage}
							router={this.props.router}
							parent={this.state.parent}
							url={this.state.url}
						/>
					</div>
				}
			</div>
		)
	};
};

MoviesList.propTypes = {
	movies: PropTypes.array,
	genres: PropTypes.array,
	page: PropTypes.number,
	config: PropTypes.object,
	apiKey: PropTypes.string,
};

function mapStateToProps(state) {
	return {
		genres: state.mediaRequestData.genres.genres,
		movies: state.mediaRequestData.movies.results,
		page: state.mediaRequestData.page,
		config: state.mediaRequestData.config,
		bool: state.mediaRequestData.bool,
		apiKey: state.mediaRequestData.apiKey,
		loaded: state.mediaRequestData.loaded,
		totalPages: state.mediaRequestData.movies.total_pages
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getTheData: (key, bool, page) => dispatch(mediaRequest(key, bool, page)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
