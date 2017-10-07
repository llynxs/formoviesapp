import React from 'react';
import { Link } from 'react-router';

import { stable } from '../constants/Methods';

import noImage from '../media/noImage.png';
import PersonMovies from './PersonMovies';

class PersonCast extends React.Component {
	render() {
		const { cast, config } = this.props;
		const imageSize = config.images.poster_sizes[0];

		/*track api calls and link redirection*/

		return (
			<ul>
				{
					stable(cast.cast,	(a, b) => {
							let firstCrit = !!a.first_air_date ? Date.parse(a.first_air_date) : 0;
							let secCrit = !!b.first_air_date ? Date.parse(b.first_air_date) : 0;

							if (firstCrit < secCrit) return -1;
							if (firstCrit > secCrit) return 1;
							return 0;
						}
					)
					.reverse()
					.map((elem, i) => {
						let airDate = !!elem.first_air_date ?
													elem.first_air_date.substring(0, elem.first_air_date.indexOf('-')) :
													'N/A';

						return (
							<li className="person-item__content-movies-item" key={i}>
								<div className="person-item__content-movies-item__date">
									{
										elem.first_air_date ? airDate : 'N/A'
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

export default PersonCast;
