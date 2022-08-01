import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 10px;
  min-height: 100vh;
`;

export const MoviesList = styled.ul`
  list-style: square;
`;

export const MovieLink = styled(Link)`
  color: #4b4453;
`;
