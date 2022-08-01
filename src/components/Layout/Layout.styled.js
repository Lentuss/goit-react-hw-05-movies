import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fbeaff;
`;

export const Header = styled.header`
  display: flex;
  padding: 10px;
  background-color: #845ec2;
  border-bottom: 2px solid gray;
`;

export const NavBar = styled.nav`
  padding: 10px;
`;

export const NaviLink = styled(NavLink)`
  color: #fbeaff;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  &.active {
    color: #00c9a7;
  }
`;
