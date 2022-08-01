import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 96px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;

  list-style: none;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 420px;

  padding: 10px;

  border-radius: 5px;
  box-shadow: 2px 2px 5px 5px rgba(113, 129, 161, 0.51);
`;

export const ActorImg = styled.img`
  display: block;
`;

export const ActorName = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const ActorCharacter = styled.p`
  color: forestgreen;
  margin-top: auto;
  font-size: 14px;
`;
