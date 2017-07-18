import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import List, { ListItem } from 'material-ui/List';

class GenresList extends React.Component {
	render() {
		const { genres } = this.props;
		const genreListClass = classNames({
			'genres-list': true,
			visible: this.props.isOpen,
		});

		return (
			<div className={genreListClass}>
				<List className="genres-list-wrapper">
					{
						genres.map((genre, i) => {
							return (
								<ListItem className="genres-list__item" key={i}>
									<Link to={`/genres/${genre.id}`} className="genres-list__item-link">{genre.name}</Link>
								</ListItem>
							);
						})
					}
				</List>
			</div>
		)
	}
}

export default GenresList;
