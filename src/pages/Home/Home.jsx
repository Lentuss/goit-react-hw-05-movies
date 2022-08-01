import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { getTrends } from '../../services/API';
import MoviesList from 'components/MoviesList';
import { Title, Container } from './Home.styled';

const Home = ({ title }) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getTrends();
        setTrends([...resp.results]);
      } catch (error) {
        Notify.error('Something went wrong');
      }
    };

    getData();
  }, []);

  const prevPath = 'movies/';
  return (
    <Container>
      <Title>{title}</Title>
      <MoviesList movies={trends} prevPath={prevPath} />
    </Container>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
