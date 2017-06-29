import React from 'react';

import Movie from './Movie';

class Similar extends React.Component {
	render() {
		const { similar, config, parent } = this.props;
		const imageSize = config.images.poster_sizes[1];

		return (
			<div className="single-item__similar-movies">
				<h2 className="single-item__similar-header">Similar</h2>
				<div className="single-item__similar-movies__content">
					{
						similar.results.map((movie, i) => {
						return (
							<Movie
								movie={movie}
								key={i}
								config={config}
								imageSize={imageSize}
								parent={parent}
							/>
						)
					})
					}
				</div>
			</div>
		)
	}
}

export default Similar;
