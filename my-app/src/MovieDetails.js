import {useState, useEffect} from "react";
import {getMoviesDetailsById} from './utils';

const MovieDetails = ({movieId}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesDetailsById(movieId).then(response => {
      setMovie(response);
    })
  }, [movieId]);

  return (
    <>
    {
      !!movie ? (
        <div>
          {movie.Poster} ,{movie.Title}, {movie.Rated}
        </div>
      ) : 'Loading details'
    }
  </>
    
  );
}

export default MovieDetails;