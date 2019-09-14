import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>JordanMMcK</h1>
    <NavLink to="/input" activeClassName="is-active" exact>
      INPUT
    </NavLink>
    <NavLink to="/output" activeClassName="is-active">
      OUTPUT
    </NavLink>
  </header>
);

export default Header;
