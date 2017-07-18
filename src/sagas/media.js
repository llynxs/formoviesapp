import { put, call } from 'redux-saga/effects';
import {
	moviesDiscoverFetch,
	moviesGenresFetch,
	configureFetch,
	currentMovieFetch,
	genreItemsFetch,
	movieCreditsRequest,
	currentMovieVideo,
	similarMoviesFetch,
	currentPersonFetch,
	currentPersonMoviesFetch,
	currentPersonTVFetch,
} from '../api/api';
import * as types from '../constants/actionTypes';

export function* loadData(action) {
	try {		
		const genres = yield call(moviesGenresFetch, action.key);
		const movies = yield call(
			moviesDiscoverFetch,
			action.key,
			action.bool,
			action.page
		);
		const config = yield call(configureFetch, action.key);

		yield put({ type: types.GETTING_DATA, loaded: {movies, genres, config, action} });

	} catch(error) {
		yield put({ type: types.GETTING_DATA_FAILED, error });
	}
};

export function* loadMoreMovies(action) {
	try {
		const moreMovies = yield call(
			moviesDiscoverFetch,
			action.key,
			action.bool,
			action.page
		);

		yield put({ type: types.GETTING_MOVIES, loaded: moreMovies });

	} catch(error) {
		yield put({ type: types.GETTING_MOVIES_FAILED, error });
	}
};

export function* loadGenres(action) {
	try {
		const genres = yield call(moviesGenresFetch, action.key);
		yield put({ type: types.GETTING_GENRES, loaded: genres });

	} catch(error) {
		yield put({ type: types.GETTING_GENRES_FAILED, error });
	}
};

export function* loadGenreItems(action) {
	try {
		const genreItems = yield call(genreItemsFetch, action.id, action.key, action.bool);
		const config = yield call(configureFetch, action.key);
		const genres = yield call(moviesGenresFetch, action.key);

		yield put({ type: types.GETTING_GENRE_ITEMS, loaded: { genreItems, config, genres } });

	} catch(error) {
		yield put({ type: types.GETTING_GENRE_ITEMS_FAILED, error });
	}
}

export function* loadConfig(action) {
	try {
		const config = yield call(configureFetch, action.key);
		yield put({ type: types.GETTING_CONFIG, loaded: config });

	} catch(error) {
		yield put({ type: types.GETTING_CONFIG_FAILED, error });
	}
};

export function* loadPerson(action) {
	try {
		const person = yield call(currentPersonFetch, action.id, action.key);
		const movies = yield call(currentPersonMoviesFetch, action.id, action.key);
		const config = yield call(configureFetch, action.key);
		const personTV = yield call(currentPersonTVFetch, action.id, action.key);

		yield put({ type: types.GETTING_PERSON, loaded: { person, movies, config, personTV } });

	} catch(error) {
		yield put({ type: types.GETTING_PERSON_FAILED, error });
	}
}

export function* loadCurrentMovie(action) {
	try {
		const current = yield call(currentMovieFetch, action.id, action.key);
		const config = yield call(configureFetch, action.key);
		const credits = yield call(movieCreditsRequest, action.id, action.key);
		const video = yield call(currentMovieVideo, action.id, action.key)
		const similar = yield call(similarMoviesFetch, action.id, action.key, action.page);

		yield put({ type: types.GETTING_CURRENT_MOVIE, loaded: { current, config, credits, video, similar } });

	} catch(error) {
		yield put({ type: types.GETTING_CURRENT_MOVIE_FAILED })
	}
};
