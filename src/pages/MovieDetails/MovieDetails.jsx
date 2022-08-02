import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix';

import { getDetails } from 'services/API';
import { Additionally } from 'components/Additionally/Additionally';

import {
  Container,
  Details,
  Back,
  BackBtn,
  Img,
  Attributes,
  Title,
  AttrName,
  VoteAverage,
  About,
  Genres,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const backPath = location.state.from;

  useEffect(() => {
    const getData = async movieId => {
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
      <Back>
        <BackBtn to={backPath}>Go back</BackBtn>
      </Back>
      {movie.length !== 0 && (
        <Details>
          <Img
            src={
              movie.poster_path
                ? 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/' +
                  movie.poster_path
                : 'https://via.placeholder.com/300x450'
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
            <VoteAverage>
              User score: {Number.parseInt(movie.vote_average * 10)}%
            </VoteAverage>
            <AttrName>Overview</AttrName>
            <About>{movie.overview}</About>
            <AttrName>Genres</AttrName>
            <Genres>{genresContent}</Genres>
          </Attributes>
        </Details>
      )}
      <Additionally backPath={backPath} />
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
