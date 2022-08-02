import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import {
  CastList,
  CardContainer,
  ActorImg,
  ActorName,
  ActorCharacter,
} from './Cast.styled';

import { getCredits } from 'services/API';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castItems, setCastItems] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getData = async movieId => {
      try {
        const resp = await getCredits(movieId);
        const cast = resp.cast;
        setCastItems([...cast]);
      } catch (error) {
        Notify.error('Something went wrong');
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <CastList>
      {castItems.map(i => (
        <li key={i.id}>
          <CardContainer>
            <ActorImg
              src={
                i.profile_path === null
                  ? 'https://via.placeholder.com/200x300'
                  : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' +
                    i.profile_path
              }
              alt={i.name}
              width="200"
            />
            <ActorName>{i.name}</ActorName>
            <ActorCharacter>Character: {i.character}</ActorCharacter>
          </CardContainer>
        </li>
      ))}
    </CastList>
  );
};

Cast.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Cast;
