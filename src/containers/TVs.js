import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Pagination from '../components/Pagination';
import NotFound from '../components/NotFound';

import { requestTVShows } from '../actions/requestActions';
import { pagesLimit } from '../constants/constantsApi';
import noImage from '../media/noImage.png';
import Loader from '../components/Loader';

class TVs extends  React.Component {
	constructor(props) {
		super(props);
		this.state = {
			indexPage: props.params.page || props.page,
			parent: 'tv',
			url: 'tv'
		}
	};

	componentWillMount() {
		this.setState({
			indexPage: this.props.params.page || this.state.indexPage,
		});
	};

	componentDidMount() {
		const { bool, apiKey, page } = this.props;

		this.props.getTVData(apiKey, bool, page);
	};

	componentWillReceiveProps(newProps, newState) {
		this.setState({
			indexPage: newProps.params.page || this.props.page,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.indexPage !== this.state.indexPage) {
			this.props.getTVData(this.props.apiKey, false, this.props.params.page);
			this.setState({
				indexPage: this.state.indexPage,
			});
		}
	};

	shouldComponentUpdate(nextProps) {
		return nextProps !== this.props;
	};

	displayTVs() {
		const { tvs, config } = this.props;
		const imageSize = config.images.poster_sizes[1];


		/*TODO: create single show component!*/


		return tvs.map((show, i) => {
			return (
				<li key={i} className="tv-list-item movies-item">
					<div className="movies-item__info">
						<div className="movies-item__poster">
							<Link to={`/show/${show.id}`}>
								<img
									src={
										show.poster_path ?
										`${config.images.base_url}/${imageSize}/${show.poster_path}` :
										noImage
									}
									alt=""
								/>
							</Link>
						</div>
						<h4>
							<Link to={`/show/${show.id}`}>
								{show.name}
							</Link>
						</h4>
					</div>
				</li>
			)
		});
	}

	render() {
		const { loaded } = this.props;

		/*TODO: replace classNames for this component*/

		return (
			<div className="tv-wrapper">
				<h1 className="movies-header">
					<span>TV Shows</span>
				</h1>
				{
					this.state.indexPage <= pagesLimit ?
					<div className="movies-wrapper">
						<div className="movies-list">
							{
								loaded ? this.displayTVs() : <Loader />
							}
						</div>
						<div className="pagination">
							{
								<Pagination
									pagesLimit={pagesLimit}
									itemsPerPage={13}
									currentPage={+this.state.indexPage}
									url={this.state.url}
								/>
							}
						</div>
					</div> :
					<NotFound />
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		tvs: state.tvRequestData.tvs,
		config: state.tvRequestData.config,
		loaded: state.tvRequestData.loaded,
		page: state.mediaRequestData.page,
		bool: state.mediaRequestData.bool,
		apiKey: state.mediaRequestData.apiKey,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getTVData: (key, bool, page) => dispatch(requestTVShows(key, bool, page)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TVs);
