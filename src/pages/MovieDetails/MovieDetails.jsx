import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import { Outlet, useParams } from 'react-router-dom';
import { getDetails } from '../../services/API';
import { Additionally } from 'components/Additionally/Additionally';
import {
  Container,
  Details,
  Img,
  Attributes,
  Title,
  AttrName,
  About,
  Genres,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getDetails(movieId);
        setMovie(resp);
      } catch (error) {
        Notify.error('Something went wrong');
      }
    };
    getData(movieId);
  }, [movieId]);

  const getGenres = () => {
    if (movie.length !== 0) {
      const genres = movie.genres.map(genre => genre.name);
      return genres.join(', ');
    }
  };
  const genresContent = getGenres();

  return (
    <Container>
      {movie && (
        <Details>
          <Img
            src={
              'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
              movie.poster_path
            }
            alt={movie.title}
          />
          <Attributes>
            <Title>
              {movie.title}
              {movie.release_date && (
                <span>{' (' + movie.release_date.slice(0, 4) + ')'}</span>
              )}
            </Title>
            <AttrName>Overview</AttrName>
            <About>{movie.overview}</About>
            <AttrName>Genres</AttrName>
            <Genres>{genresContent}</Genres>
          </Attributes>
        </Details>
      )}
      <Additionally />
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
