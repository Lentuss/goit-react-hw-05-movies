import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import { getSearched } from 'services/API';
import { Container } from './Movies.styled';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
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
        {movies.length !== 0 ? (
          <MoviesList movies={movies} prevPath={prevPath} />
        ) : (
          query !== '' && <p>Nothing found. Try again</p>
        )}
      </Container>
    </>
  );
};

export default Movies;
