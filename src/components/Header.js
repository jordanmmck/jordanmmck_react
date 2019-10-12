import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <NavLink to="/">
      <h1 className="header__title">JordanMMcK</h1>
    </NavLink>
    <Nav />
  </header>
);

export default Header;
