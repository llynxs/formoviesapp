import { takeLatest } from 'redux-saga/effects';
import {
	loadData,
	loadGenres,
	loadConfig,
	loadCurrentMovie,
	loadMoreMovies,
	loadGenreItems,
	loadPerson
} from './media';

import * as types from '../constants/actionTypes';

export function* watchMedia() {
	yield takeLatest(types.FETCH_DATA_SUCCESS, loadData);
	yield takeLatest(types.GETTING_GENRES_SUCCESS, loadGenres);
	yield takeLatest(types.GETTING_CONFIG_SUCCESS, loadConfig);
	yield takeLatest(types.GETTING_CURRENT_MOVIE_SUCCESS, loadCurrentMovie);
	yield takeLatest(types.GETTING_MOVIES_SUCCESS, loadMoreMovies);
	yield takeLatest(types.GETTING_GENRE_ITEMS_SUCCESS, loadGenreItems);
	yield takeLatest(types.GETTING_PERSON_SUCCESS, loadPerson);
}
