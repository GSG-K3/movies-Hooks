import React, { useState } from 'react';
import axios from 'axios';

import './SearchBar.css';

export default function SearchBar() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (event) => setInput(event.target.value);

  const submitChange = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=6243f561bcd008ec397a81449573a5f4&query=${input}`
      )
      .then((res) => {
        setMovies(res.data.results.slice(0, 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Movie Name"
          className="seach-box"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="search"
          onClick={submitChange}
        />
      </form>
      <div className="movies">
        {movies.map((movie, i) => (
          <ul className="movie-container">
            <div className="first">
              <div className="pic">
                <img
                  alt="poster"
                  className="poster"
                  src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                />
              </div>
              <div className="info">
                <h3 className="heading">{movie.title}</h3>
                <p className="rating">{movie.release_date}</p>

                <p className="rating"> Rating: {movie.vote_average}</p>
              </div>
            </div>
            <p className="rating"> {movie.overview}</p>
          </ul>
        ))}
      </div>
    </div>
  );
}
