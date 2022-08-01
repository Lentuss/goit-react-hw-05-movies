import React from 'react';
import PropTypes from 'prop-types';
import { MoviesItems, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies, prevPath }) => {
  return (
    <MoviesItems>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={prevPath + movie.id}>
            <h3>{movie.title}</h3>
          </MovieLink>
        </li>
      ))}
    </MoviesItems>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
