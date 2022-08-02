import React from 'react';
import PropTypes from 'prop-types';
import { MoviesItems, MovieLink } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies, prevPath }) => {
  const location = useLocation();
  console.log(location);
  return (
    <MoviesItems>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={prevPath + movie.id} state={{ from: location }}>
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
