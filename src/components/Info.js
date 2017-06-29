import React from 'react';
import { Link } from 'react-router';

class Info extends React.Component {
	render() {
		const { movie, config } = this.props;

		const movieGenres = movie.genres.map((genre, i) => {
			return (
				<div key={i} className="single-item__genres-link">
					<Link to={`/genres/${genre.id}`}>{genre.name}</Link>
				</div>
			);
		});

		return (
			<div className="single-item__info">
				<div className="single-item__poster">
				{
					movie.poster_path ?
					<img src={`${config.images.base_url}/w500/${movie.poster_path}`} alt="" />
					:	null
				}
				</div>
				<div className="single-item__description">
					<div className="single-item__description-header">
						<h2 className="single-item__description-header-text">
							{movie.title}
						</h2>
					</div>
					<div className="single-item__description-tagline">
						<span className="single-item__description-tagline-text">
							{movie.tagline}
						</span>
					</div>
					<div className="single-item__description-overview">
						<span className="single-item__description-overview-text">
							{movie.overview}
						</span>
					</div>

					<div className="single-item__description-details">
						<div className="single-item__description-details__cost">
							<div className="single-item__description-details__cost-budget">
								<div className="single-item__description-details__cost-budget__header">
									Budget
								</div>
								<div className="single-item__description-details__cost-value">
									{
										movie.budget > 0 ? `$ ${movie.budget}` : 'N/A'
									}
								</div>
							</div>
							<div className="single-item__description-details__cost-revenue">
								<div className="single-item__description-details__cost-revenue__header">
									Revenue
								</div>
								<div className="single-item__description-details__cost-value">
									{
										movie.revenue > 0 ? `$ ${movie.revenue}` : 'N/A'
									}
								</div>
							</div>
							<div className="single-item__description-details__cost-profit">
								<div className="single-item__description-details__cost-profit__header">
									Profit
								</div>
								<div className={
									`single-item__description-details__cost-value
									${movie.revenue < movie.budget && 'negative'}`
								}>
									{movie.revenue - movie.budget}
								</div>
							</div>
						</div>
						<div className="single-item__description-details__date">
							<div className="single-item__description-details__date-header">Release</div>
							<div className="single-item__description-details__date-value">{movie.release_date}</div>
						</div>
						<div className="single-item__description-details__runtime">
							<div className="single-item__description-details__runtime-header">Runtime</div>
							<div className="single-item__description-details__runtime-value">
								{movie.runtime} min.
							</div>
						</div>
					</div>
					<div className="single-item__genres">
						<div className="single-item__genres-header">Genres:</div>
						{movieGenres}
					</div>
				</div>
				<div className="single-item__popularity">
					<span className="single-item__popularity-value">
						{Math.round(movie.popularity * 100) / 100}
					</span>
				</div>
			</div>
		)
	}
}

export default Info;