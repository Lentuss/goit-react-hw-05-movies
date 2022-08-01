import Searchbar from 'components/Searchbar';
import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { getSearched } from 'services/API';
import MoviesList from 'components/MoviesList';
import { Container } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getSearched(query);
        console.log(resp);
        setMovies([...resp.results]);
      } catch (error) {
        Notify.error('Something went wrong');
      }
    };

    if (query !== '') {
      getData();
    }
  }, [query]);

  const getQuery = query => {
    setQuery(query);
  };

  const prevPath = '';

  return (
    <>
      <Searchbar onSubmit={getQuery} />
      <Container>
        {movies.length !== 0 && (
          <MoviesList movies={movies} prevPath={prevPath} />
        )}
      </Container>
    </>
  );
};

export default Movies;
