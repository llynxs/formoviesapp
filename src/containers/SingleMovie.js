import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { currentMovieRequest } from '../actions/requestActions';
import MovieItem from '../components/MovieItem';
import Loader from '../components/Loader';

class SingleMovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			parent: 'single'
		};
	};

	componentWillMount() {
		this.setState({
			id: this.props.params.id,
		});
	};

	componentDidMount() {
		const { id } = this.state;
		const { apiKey } = this.props;

		this.props.getCurrentMovie(id, apiKey);
	};

	componentWillReceiveProps(newProps) {
		this.setState({
			id: newProps.params.id,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.id !== prevState.id) {
			this.props.getCurrentMovie(this.props.params.id, this.props.apiKey);
		}
	};

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	};

	movieDisplay() {
		const { current, config, video, similar, credits } = this.props.movie;
		const { parent } = this.state;

		return (
			<MovieItem
				movie={current}
				config={config}
				video={video}
				similar={similar}
				parent={parent}
				credits={credits}
			/>
		)
	};

	render() {
		return(
			<div className="single">
				{
					this.props.loaded ?
					this.movieDisplay() :
					<div className="loader">
						<Loader />
					</div>
				}
			</div>
		);
	};
};

SingleMovie.propTypes = {
	movies: PropTypes.array,
};

function mapStateToProps(state) {
	return {
		movie: state.currentMovieRequest.movie,
		loaded: state.currentMovieRequest.loaded,
		apiKey: state.mediaRequestData.apiKey,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getCurrentMovie: (id, key) => dispatch(currentMovieRequest(id, key)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
