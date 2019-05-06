import React from 'react';
import StyledNav from './NavStyles';
import { Link } from 'react-router-dom';
import { routes } from '../../config';

const Nav = () => (
  <StyledNav>
    <Link className="brand" to={routes.ROOT}>
      Q&App
    </Link>
  </StyledNav>
);

export default Nav;
