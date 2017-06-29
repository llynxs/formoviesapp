import React from 'react';
import { Link } from 'react-router';
import noImage from '../media/noImage.png';

const Cast = ({ credits, config }) => (
	<div className="single-item__cast">
		<h2 className="single-item__cast-header">Cast</h2>
		<div className="single-item__cast-wrapper">
			{
				credits.cast.slice(0, 5).map((cast, i) => (
					<div className="single-item__cast-item" key={i}>
						<div className="single-item__cast-item__image">
							<Link to={`/person/${cast.id}`}>
								<img
									src={
										cast.profile_path ?
										`${config.images.base_url}/w185/${cast.profile_path}` :
										noImage
									}
									alt=""
								/>
							</Link>
						</div>
						<div className="single-item__cast-item__actor">
							<div className="single-item__cast-item__actor-name">
								<Link to={`/person/${cast.id}`}>{cast.name}</Link>
							</div>
							<div className="single-item__cast-item__actor-character">
								<div>{cast.character}</div>
							</div>
						</div>
					</div>
				))
			}
		</div>
	</div>
);

export default Cast;
