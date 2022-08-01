import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, NavBar, NaviLink } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <NavBar>
          <NaviLink to="/">Номе</NaviLink>
          <NaviLink to="/movies">Movies</NaviLink>
        </NavBar>
      </Header>

      <Outlet />
    </Container>
  );
};

export default Layout;
