const API_URL = 'http://www.omdbapi.com';
const API_KEY = 'd71fd0c8';

export const getMoviesByName = async(name='Batman') => {
    const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${name}`);
    const data = await response.json();

    return data;
}

export const getMoviesDetailsById = async(moviesId) => {
    const response = await fetch(`${API_URL}/?apitKey=${API_KEY}&i=${moviesId}`);
    const data = await response.json();
   
    return data;
}
