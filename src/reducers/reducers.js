import * as types from '../constants/actionTypes';
import {initialState} from './initialState';

export function mediaRequestData(state = initialState, action) {
	switch(action.type) {
		case types.GETTING_DATA:
			return {
				...state,
				genres: action.loaded.genres,
				movies: action.loaded.movies,
				config: action.loaded.config,
				log: action.loaded,
				loaded: true,
				type: action.type,
			}
		case types.GETTING_DATA_SUCCESS:
			return {
				...state,
				loaded: false,
				type: action.type,
			}
		case types.GETTING_DATA_FAILED:
			return {
				...state,
				stack: action.error,
				loaded: false,
				type: action.type,
			}
		default: return state;
	}
}

export function tvRequestData(state = initialState.tvs, action) {
	switch(action.type) {
		case types.GETTING_TV:
			return {
				...state,
				loaded: true,
				config: action.loaded.config,
				tvs: action.loaded.tvs.results,
				page: action.loaded.tvs.page,
			}
		case types.GETTING_TV_SUCCESS:
			return {
				...state,
				loaded: false,
				type: action.type,
			}
		case types.GETTING_TV_FAILED:
			return {
				...state,
				error: action.error,
				loaded: false,
				type: action.type,
			}
		default: return state;
	}
}

export function moviesData(state = initialState.movies, action) {
	switch(action.type) {
		case types.GETTING_MOVIES:
			return {
				...state,
				movies: action,
				type: action.type,
			}
		case types.GETTING_MOVIES_SUCCESS:
			return {
				...state,
				type: action.type,
			}
		default: return state;
	}
}
export function genreItems(state = initialState.genreItems, action) {
	switch(action.type) {
		case types.GETTING_GENRE_ITEMS:
			return {
				...state,
				movies: action.loaded.genreItems,
				config: action.loaded.config,
				genres:action.loaded.genres.genres,
				page: action.loaded.page,
				ololo: action,
				loaded: true,
				type: action.type,
			}
		case types.GETTING_GENRE_ITEMS_SUCCESS:
			return {
				...state,
				loaded: false,
				type: action.type,
			}
		default: return state;
	}
}

export function genresData(state = initialState.genres, action) {
	switch(action.type) {
		case types.GETTING_GENRES:
			return {
				...state,
				genres: action.loaded.genres,
				loaded: true,
				type: action.type,
			}
		case types.GETTING_GENRES_SUCCESS:
			return {
				...state,
				loaded: false,
				type: action.type,
			}	
		default: return state;
	}
}

export function configRequest(state = initialState.config, action) {
	switch(action.type) {
		case types.GETTING_CONFIG:
			return {
				...state,
				config: action.loaded,
				type: action.type,
			}
		case types.GETTING_CONFIG_SUCCESS:
			return {
				...state,
				type: action.type,
			}	
		default: return state;
	}
}

export function currentMovieRequest(state = initialState.movie, action) {
	switch(action.type) {
		case types.GETTING_CURRENT_MOVIE:
			return {
				...state,
				movie: action.loaded,
				loaded: true,
				type: action.type,
			}
		case types.GETTING_CURRENT_MOVIE_SUCCESS:
			return {
				...state,
				loaded: false,
				type: action.type,
			}
		default: return state;
	}
}

export function personData(state = initialState.person, action) {
	switch(action.type) {
		case types.GETTING_PERSON:
			return {
				...state,
				personData: action.loaded,
				loaded: true,
				type: action.type,
			}
		case types.GETTING_PERSON_SUCCESS:
			return {
				...state,
				loaded: false,
				type: action.type,
			}
		default: return state;
	}
}
