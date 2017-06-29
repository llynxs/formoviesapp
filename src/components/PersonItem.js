import React from 'react';

import PersonMovies from './PersonMovies';
// import PersonTVShows from './PersonTVShows';
import noImage from '../media/noImage.png';

class PersonItem extends React.Component {
	constructor() {
		super();
		this.state = {
			type: 'movies',
		}
	}

	render() {
		const { person, config, movies } = this.props.personData;
		const imageSize = config.images.poster_sizes[3];

		return (
			<div className="person-item">
				<div className="person-item-wrapper">
					<div className="person-item__header">
						<div className="person-item__image">
							<img
								src={
									person.profile_path ?
									`${config.images.base_url}/${imageSize}/${person.profile_path}` :
									noImage
								}
								alt=""
							/>
						</div>
						<div className="person-item__info">
							<h2>Personal Info</h2>
							<div className="person-item__info-list">
								<div className="person-item__info-list__item">
									<div className="person-item__info-list__item-heading">
										Birthplace
									</div>
									<div className="person-item__info-list__item-info">
										{person.place_of_birth}
									</div>
								</div>
								<div className="person-item__info-list__item">
									<div className="person-item__info-list__item-heading">
										Birthday
									</div>
									<div className="person-item__info-list__item-info">
										{person.birthday}
									</div>
								</div>
								<div className="person-item__info-list__item">
									<div className="person-item__info-list__item-heading">
										Official Page
									</div>
									<div className="person-item__info-list__item-info">
										{
											person.homepage ?
											<a href={person.homepage}>{person.homepage}</a> :
											'N/A'
										}
									</div>
								</div>
								{
									person.also_known_as.length ?
									<div className="person-item__info-list__item">
										<div className="person-item__info-list__item-heading">
											Also Known As:
										</div>
										<div className="person-item__info-list__item-info">
											{ person.also_known_as.join(', ') }
										</div>
									</div> :
									null
								}
								<div className="person-item__info-list__item">
									<div className="person-item__info-list__item-heading">

									</div>
									<div className="person-item__info-list__item-info">

									</div>
								</div>
								<div className="person-item__info-list__item">

								</div>
							</div>
						</div>
					</div>
					<div className="person-item__content">
						<div className="person-item__content-heading">
							<h4 className="person-item__content-name">
								{person.name}
							</h4>
							<div className="person-item__content-popularity">
								{Math.round(person.popularity * 100) / 100}%
							</div>
							<div className="person-item__content-bio">
								{person.biography}
							</div>
						</div>
						<div className="person-item__content-movies">
							<h4 className="person-item__content-heading">
								Known for:
							</h4>
							<div className="person-item__content-movies-list">
								<h3>Cast</h3>
								<PersonMovies
									movies={movies}
									config={config}
									imageSize={imageSize}
								/>
							</div>
							{
								movies.crew.length ?
								<div className="person-item__content-movies-crew">
									crew coming soon
								</div>:
								null
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PersonItem;
