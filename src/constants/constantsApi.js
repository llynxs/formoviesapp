export const pagesLimit = 1000;
const baseUrl = 'https://api.themoviedb.org';
const apiKey = 'e9083890faac0bda43b4a340b495ab50';
const bool = false;
export const apiRequest = `${baseUrl}/3/movie/550?api_key=${apiKey}`;

export const discoverCall = `${baseUrl}/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=${bool}&include_video=${bool}&page=1`;

export const popularCall = '/discover/movie?sort_by=popularity.desc';

export const genresCall = `${baseUrl}/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

export const sort = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.asc&include_adult=${bool}&include_video=${bool}&page=1`;

export const posterUrl = 'https://image.tmdb.org/t/p/w500';

export const configure = `${baseUrl}/3/configuration?api_key=${apiKey}`;