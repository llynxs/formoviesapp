import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestGenreItems } from '../actions/requestActions';
import Movie from '../components/Movie';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import { pagesLimit } from '../constants/constantsApi';

/*todo: запилить подгрузку фильмов по данному жанру со страничными*/

class GenreItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allowRender: false,
			parent: 'genres',
			pageOfItems: [],
			indexPage: props.params.page,
		}
	}
	componentDidMount() {
		const { apiKey, bool } = this.props;
		const { id } = this.props.params;

		this.props.getGenreItems(id, apiKey, bool);
		this.setState({
			allowRender: true,
		});
	};

	componentWillUpdate() {
		this.setState({
			allowRender: !this.state.allowRender
		});
	};

	componentDidUpdate() {
		this.setState({
			allowRender: !this.state.allowRender
		});
	};

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	};

	onChangePage(pageOfItems) {
		this.setState({
			pageOfItems: pageOfItems
		});
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
					this.state.allowRender ?
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
				<div className="pagination">
					{
						<Pagination
							pagesLimit={pagesLimit}
							itemsPerPage={9}
							currentPage={+this.state.indexPage}
							url={this.state.url}
						/>
					}
				</div>
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
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getGenreItems: (id, key, bool) => dispatch(requestGenreItems(id, key, bool)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreItem);