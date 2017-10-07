import React from 'react';
// import { Link } from 'react-router';

class Sidebar extends React.Component {
	render() {
		const { movie } = this.props;

		return (
			<div className="sidebar-container">
				<div className="sidebar-title">
					<h4>Original Title</h4>
					<div>{movie.original_title}</div>
				</div>
				<div className="sidebar-status">
					<h4>Status</h4>
					<div>{movie.status}</div>
				</div>
				<div className="sidebar-language">
					<h4>Languages</h4>
					<div>
						{
							movie.spoken_languages.map(lang => lang.name)
						}
					</div>
				</div>
				<div className="sidebar-company">
					<h4>Companies</h4>
					<div>
						{
							movie.production_companies.map(comp => comp.name)
						}
					</div>
				</div>
				<div className="sidebar-country">
					<h4>Countries</h4>
					<div>
						{
							movie.production_countries.map(country => country.name)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Sidebar;