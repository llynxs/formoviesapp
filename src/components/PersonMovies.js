import React from 'react';
import { Link } from 'react-router';

import noImage from '../media/noImage.png';

class PersonMovies extends React.Component {
	render() {
		const { movies, config } = this.props;
		const imageSize = config.images.poster_sizes[0];
		
		return (
			<ul>
				{
					movies.cast.sort(
						(a, b) => {
							let firstCrit = a.release_date || a.first_air_date;
							let secCrit = b.release_date || b.first_air_date;

							return firstCrit < secCrit ? 1 : -1;
						}
					)
					.map((elem, i) => {
						let releaseDate = 
						(elem.release_date !== null && elem.release_date !== undefined) &&
							elem.release_date.substring(0, elem.release_date.indexOf('-'));

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
									<Link to={`/movie/${elem.id}`}>{elem.title || elem.name}</Link>
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
