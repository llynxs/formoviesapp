import fetch from 'isomorphic-fetch';

//comments
/*запилить фетч по компаниям!*/

function status(resp) {
	if (resp.ok) {
		return resp;
	} else {
		throw new Error(resp.statusText);
	}
}

function json(resp) {
	return resp.json();
}

export function moviesDiscoverFetch(key, bool, page) {
		return fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${bool}&include_video=${bool}&page=${page}`,
		)
		.then(status)
		.then(json)
		.then(movies => movies)
		.catch(err => console.log(err))
};

export function tvDiscoverFetch(key, bool, page) {
	return fetch(
		`https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=${bool}`
	)
	.then(status)
	.then(json)
	.then(tv => tv)
	.catch(err => console.log(err))
}

export function genreItemsFetch(id, key, bool) {
	return fetch(
			`https://api.themoviedb.org/3/genre/${id}/movies?api_key=${key}&language=en-US&include_adult=${bool}&sort_by=created_at.ascs`,
		)
	.then(status)
	.then(json)
	.then(genreItem => genreItem)
	.catch(err => console.log(err))
};

export function moviesGenresFetch(key) {
	return fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				},
			}
		)
	.then(status)
	.then(json)
	.then(genres => genres)
	.catch(err => console.log(err))
};

export function movieCreditsRequest(id, key) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
	)
	.then(status)
	.then(json)
	.then(credits => credits)
	.catch(err => console.log(err))
};

export function configureFetch(key) {
	return fetch(
			`https://api.themoviedb.org/3/configuration?api_key=${key}`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				},
			}
		)
	.then(status)
	.then(json)
	.then(config => config)
	.catch(err => console.log(err))
};

export function currentPersonFetch(id, key) {
	return fetch(
		`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`
	)
	.then(status)
	.then(json)
	.then(person => person)
	.catch(err => console.log(err))
}

export function currentPersonMoviesFetch(id, key) {
	// combined_credits
	return fetch(
		`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`
	)
	.then(status)
	.then(json)
	.then(personMovies => personMovies)
	.catch(err => console.log(err))
}

export function currentPersonTVFetch(id, key) {
	return fetch(
		`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${key}&language=en-US`
	)
	.then(status)
	.then(json)
	.then(personTV => personTV)
	.catch(err => console.log(err))
}

export function similarMoviesFetch(id, key, page) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`
	)
	.then(status)
	.then(json)
	.then(similar => similar)
	.catch(err => console.log(err))
}

export function currentMovieVideo(id, key) {
	return fetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
	)
	.then(status)
	.then(json)
	.then(video => video)
	.catch(err => console.log(err))
}	

export function currentMovieFetch(id, key) {
	return fetch (
		`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
	)
	.then(status)
	.then(json)
	.then(current => current)
	.catch(err => console.log(err))
};
