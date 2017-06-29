import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import MoviesList from '../containers/MoviesList';
import SingleMovie from '../containers/SingleMovie';
import GenreItem from '../containers/GenreItem';
import Person from '../containers/Person';

/*todo: запилить логику для 404*/

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MoviesList} />
		<Route path="/movies/page=:page" component={MoviesList} />
		<Route path="/genres/:id" component={GenreItem} />
		<Route path="/movie/:id" component={SingleMovie} />
		<Route path="/person/:id" component={Person} />
	</Route>
)
