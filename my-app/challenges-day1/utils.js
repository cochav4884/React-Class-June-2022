const API_URL = 'http://www.omdbapi.com';
const API_KEY = '';

const getMoviesByName = async(name='Batman') => {
    const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${name}`);
    const data = await response.json();

    console.log('10 first results of movies:', data);
}

getMoviesByName('Better call');

const getMoviesDetailsById = async(moviesId) => {
    const response = await fetch(`${API_URL}/?apitKey=${API_KEY}&i=${moviesId}`);
    const data = await response.json();
    console.log('Movie:', data);
}

getMoviesDetailsById();