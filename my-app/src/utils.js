const API_URL = 'http://www.omdbapi.com';
const API_KEY = 'd71fd0c8';

export const getMoviesByName = async(name='Batman') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${name}`);
  const data = await response.json();
  console.log(data);

  return data;
}

export const getMovieDetailsById = async (movieId='tt3032476') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&i=${movieId}`);
  const data = await response.json();
  
  return data;
}
