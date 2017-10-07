import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from '../App';
import MoviesList from '../containers/MoviesList';
import SingleMovie from '../containers/SingleMovie';
import GenreItem from '../containers/GenreItem';
import Person from '../containers/Person';
import NotFound from '../components/NotFound';
import TVs from '../containers/TVs';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MoviesList} />
		<Route path="/movies/page=:page" component={MoviesList} />
		<Route path="/tv/page=:page" component={TVs} />
		<Route path="/genres/:id" component={GenreItem} />
		<Route path="/movie/:id" component={SingleMovie} />
		<Route path="/person/:id" component={Person} />
		<Route path="/404" component={NotFound} />
		<Redirect from="*" to="/404" />
	</Route>
)
