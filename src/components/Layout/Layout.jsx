import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Container, Header, NavBar, NaviLink, Back } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <NavBar>
          <NaviLink to="/">Номе</NaviLink>
          <NaviLink to="/movies">Movies</NaviLink>
        </NavBar>
      </Header>
      <Back>
        <Link to="./">Go back</Link>
      </Back>
      <Outlet />
    </Container>
  );
};

export default Layout;
