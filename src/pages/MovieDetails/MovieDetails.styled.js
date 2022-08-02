import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Back = styled.div`
  background-color: #b39cd0;
  padding: 10px;
`;

export const BackBtn = styled(Link)`
  display: block;
  text-align: center;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  border-color: transparent;
  background-color: #fbeaff;
`;

export const Details = styled.div`
  display: flex;
`;

export const Img = styled.img`
  display: block;
`;

export const Attributes = styled.div`
  padding: 20px;
  font-size: 18px;
`;

export const Title = styled.h3`
  color: #00c9a7;
  font-size: 30px;
`;

export const AttrName = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const VoteAverage = styled.p`
  font-style: italic;
`;

export const About = styled.p`
  color: #4b4453;
`;

export const Genres = styled.p`
  font-style: italic;
`;
