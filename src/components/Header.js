import React from 'react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <NavLink to="/">
      <h1>JordanMMcK</h1>
    </NavLink>
    <Nav />
  </header>
);

export default Header;
