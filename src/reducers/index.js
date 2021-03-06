import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import {
	moviesData,
	genresData,
	mediaRequestData,
	currentMovieRequest,
	configRequest,
	genreItems,
	personData,
	tvRequestData,
} from './reducers';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
	mediaRequestData,
	configRequest,
	currentMovieRequest,
	genreItems,
	moviesData,
	genresData,
	personData,
	tvRequestData,
	routing: routerReducer
});

export default rootReducer;