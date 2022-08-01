import React, { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
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
        console.log(resp);
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
  const navigate = useNavigate();
  return (
    <Container>
      <Back>
        <BackBtn type="button" onClick={() => navigate(-1)}>
          Go back
        </BackBtn>
      </Back>
      {movie && (
        <Details>
          <Img
            src={
              movie.poster_path !== null
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
