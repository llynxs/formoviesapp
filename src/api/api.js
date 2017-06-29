import fetch from 'isomorphic-fetch';

//comments
/*запилить фетч по компаниям!*/

export async function moviesDiscoverFetch(key, bool, page) {
		return await fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${bool}&include_video=${bool}&page=${page}`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				},
			}
		)
		.then(resp => resp.json())
		.then(movies => movies)
};

export async function genreItemsFetch(id, key, bool) {
	return await fetch(
			`https://api.themoviedb.org/3/genre/${id}/movies?api_key=${key}&language=en-US&include_adult=${bool}&sort_by=created_at.ascs`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				},
			}
		)
	.then(resp => resp.json())
	.then(genreItem => genreItem)
};

export async function moviesGenresFetch(key) {
	return await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				},
			}
		)
	.then(resp => resp.json())
	.then(genres => genres)
};

export async function movieCreditsRequest(id, key) {
	return await fetch(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
	)
	.then(resp => resp.json())
	.then(credits => credits)
};

export async function configureFetch(key) {
	return await fetch(
			`https://api.themoviedb.org/3/configuration?api_key=${key}`,
			{
				method: 'GET',
				headers: {
					'Content-type': 'application/json'
				},
			}
		)
	.then(resp => resp.json())
	.then(config => config)
};

export async function currentPersonFetch(id, key) {
	return await fetch(
		`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`
	)
	.then(resp => resp.json())
	.then(person => person)
}

export async function currentPersonMoviesFetch(id, key) {
	return await fetch(
		`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${key}&language=en-US`
	)
	.then(resp => resp.json())
	.then(personMovies => personMovies)
}

export async function currentPersonTVFetch(id, key) {
	return await fetch(
		`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${key}&language=en-US`
	)
	.then(resp => resp.json())
	.then(personTV => personTV)
}

export async function similarMoviesFetch(id, key, page) {
	return await fetch(
		`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`
	)
	.then(resp => resp.json())
	.then(similar => similar)
}

export async function currentMovieVideo(id, key) {
	return await fetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
	)
	.then(resp => resp.json())
	.then(video => video)
}	

export async function currentMovieFetch(id, key) {
	return await fetch (
		`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
	)
	.then(resp => resp.json())
	.then(current => current)
};
