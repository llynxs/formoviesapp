import React from 'react';
import { Link } from 'react-router';

import { stable } from '../constants/Methods';

import noImage from '../media/noImage.png';

class PersonMovies extends React.Component {
	render() {
		const { movies, config } = this.props;
		const imageSize = config.images.poster_sizes[0];

		return (
			<ul className="person-item-list">
				{
					stable(movies.cast, (a, b) => {
						let releaseDateOne = !!a.release_date ? Date.parse(a.release_date) : 0;
						let releaseDateTwo = !!b.release_date ? Date.parse(b.release_date) : 0;

						if (releaseDateOne < releaseDateTwo) return -1;
						if (releaseDateOne > releaseDateTwo) return 1;
						return 0;
					})
					.reverse()
					.map((elem, i) => {
						let releaseDate = !!elem.release_date ?	elem.release_date.substring(0, elem.release_date.indexOf('-')) : 'N/A';

						return (
							<li className="person-item__content-movies-item" key={i}>
								<div className="person-item__content-movies-item__date">
									{
										elem.release_date ? releaseDate : 'N/A'
									}
								</div>
								<div className="person-item__content-movies-item__image">
									<Link to={`/movie/${elem.id}`}>
										<img
											src={
												elem.poster_path ?
												`${config.images.base_url}/${imageSize}/${elem.poster_path}` :
												noImage
											}
											alt=""
											width="92"
											height="138"
										/>
									</Link>
								</div>
								<div className="person-item__content-movies-item__info">
									<Link to={`/movie/${elem.id}`}>{elem.title}</Link>
									<span>as</span>
									<div>
										{
											elem.character ? elem.character : 'N/A'
										}
									</div>
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

export default PersonMovies;
