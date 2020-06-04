import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './Movies.css';
function Movies() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [target, setTarget] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=6243f561bcd008ec397a81449573a5f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      .then((res) => {
        console.log(res.data.results.slice(0, 4));
        setMovies(res.data.results.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(movies);
  }, []);

  return (
    <div className="main">
      {movies.map((movie, i) => (
        <ul className="movie-container">
          <img
            className="poster"
            src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
          />
          <h2 className="heading">{movie.title}</h2>
          <p className="rating"> Rating: {movie.vote_average}</p>
        </ul>
      ))}
    </div>
  );
}

export default Movies;
