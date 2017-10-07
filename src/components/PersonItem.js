import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import classNames from 'classnames';

import PersonMovies from './PersonMovies';
import PersonCast from './PersonCast';
import noImage from '../media/noImage.png';

/*разбить на компоненты*/

const TabContainer = props =>
	<div style={{ padding: 0 }}>
		{props.children}
	</div>;

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('FullWidthTabs', theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
	},
}));

class PersonItem extends React.Component {
	constructor() {
		super();
		this.state = {
			type: 'movies',
			index: 0,
			hidden: 'false',
		}
	}

	handleChange = (event, index) => {
		this.setState({ index });
	};

	handleChangeIndex = index => {
		this.setState({ index });
	};

	render() {
		const { person, config, movies, personTV } = this.props.personData;
		const imageSize = config.images.poster_sizes[3];

		console.log(movies);
		console.log(personTV);

		// console.log(this.props, 'render');

		/*fix tab list*/
		const tabList = classNames({
			'tabser': true,
		})

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
							<AppBar position="static" color="default" id="tabWrapper">
								{ movies || personTV ?
									<Tabs
										index={this.state.index}
										onChange={this.handleChange}
										indicatorColor="primary"
										textColor="primary"
									>
										<Tab label="Movies" />
										<Tab label="TVs" />
									</Tabs> :
									''
								}
							</AppBar>
							<div className="person-item__content-movies-list">
								<SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} id="swiper">
									<TabContainer className={tabList}>
										<div>
											<PersonCast
												config={config}
												cast={personTV}
											/>
										</div>
									</TabContainer>
									<TabContainer>
										<div className="tabber">
											
											<PersonMovies
												movies={movies}
												config={config}
											/>
										</div>
									</TabContainer>
								</SwipeableViews>
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

export default withStyles(styleSheet)(PersonItem);
