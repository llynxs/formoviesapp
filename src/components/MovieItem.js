import React from 'react';
// import { Link } from 'react-router';
// import classNames from 'classnames';

// import Slider from './Slider';
import Movie from './Movie';
import Cast from './Cast';
import Info from './Info';
import Similar from './Similar';
import Media from './Media';
import Sidebar from './Sidebar';

class MovieItem extends React.Component {
	displaySimilarMovies() {
		const { similar, config, parent } = this.props;
		const imageSize = config.images.poster_sizes[1];

		return similar.results.map((movie, i) => {
			return (
				<Movie
					movie={movie}
					key={i}
					config={config}
					imageSize={imageSize}
					parent={parent}
				/>
			)
		});
	};

	displayCast() {
		const { config, credits } = this.props;

		return credits.cast.map((elem, i) => {
			return (
				<Cast cast={elem} config={config} key={i} />
			)
		});
	}

	render() {
		const { movie, config, video, similar, parent, credits } = this.props;
		const ytVideo = video.results[0];

		let parentStyle = {
			background: `url(${config.images.base_url}/original/${movie.backdrop_path}) 50% 50% no-repeat`,
			backgroundSize: 'cover'
		};

		return (
			<div className="single-item" style={parentStyle}>
				<div className="single-item__wrapper">
					<div className="single-item__inner">
						<div className="single-item__inner-top">
							<Info movie={movie} config={config} />
						</div>
						<div className="single-item__inner-bottom">
							<div className="single-item__inner-bottom-wrapper">
								<Cast credits={credits} config={config} />
								<Media media={ytVideo} />
								<Similar similar={similar} movie={movie} config={config} parent={parent} {...this.props} />
							</div>
							<aside className="sidebar">
								<Sidebar movie={movie} config={config}/>
							</aside>
						</div>
					</div>
				</div>
				
			</div>
		);
	};
}

export default MovieItem;
