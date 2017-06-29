import React from 'react';
import { Link } from 'react-router';
import noImage from '../media/noImage.png';

class Movie extends React.Component {
	render() {
		const { movie, config, imageSize, parent } = this.props;
		
		return (
			<div className={`${parent} movies-item`}>
				<div className="movies-item__info">
					<div className="movies-item__poster">
						<Link to={`/movie/${movie.id}`}>
							<img
								src={
									movie.poster_path ?
									`${config.images.base_url}/${imageSize}/${movie.poster_path}` :
									noImage
								}
								alt=""
							/>
						</Link>
					</div>
					<div className="movies-item__description">
						<div className="movies-item__description-header">
							<h4>
								<Link to={`/movie/${movie.id}`}>
									{movie.title}
								</Link>
							</h4>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Movie;
