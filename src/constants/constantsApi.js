export const pagesLimit = 1000;
const baseUrl = 'https://api.themoviedb.org';
const apiKey = 'e9083890faac0bda43b4a340b495ab50';
const bool = false;

export const sort = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=release_date.asc&include_adult=${bool}&include_video=${bool}&page=1`;
