import * as types from '../constants/actionTypes';

/*action generators*/
export const requestMoviesData = (key, bool, page) => ({
	type: types.GETTING_MOVIES_SUCCESS,
	key,
	bool,
	page,
});

export const personRequest = (id, key) => ({
	type: types.GETTING_PERSON_SUCCESS,
	id,
	key,
})

export const mediaRequest = (key, bool, page) => ({
	type: types.GETTING_DATA_SUCCESS,
	key,
	bool,
	page,
});

export const requestGenresData = (key) => ({
	type: types.GETTING_GENRES_SUCCESS,
	key,
});

export const requestGenreItems = (id, key, bool) => ({
	type: types.GETTING_GENRE_ITEMS_SUCCESS,
	id,
	key,
	bool,
})

export const configRequest = (key) => ({
	type: types.GETTING_CONFIG_SUCCESS,
	key,
});

export const currentMovieRequest = (id , key) => ({
	type: types.GETTING_CURRENT_MOVIE_SUCCESS,
	id,
	key,
});
