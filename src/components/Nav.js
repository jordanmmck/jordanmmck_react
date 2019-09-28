import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav-container">
    <NavLink to="/inspiration" activeClassName="is-active">
      inspiration
    </NavLink>
    <NavLink to="/writing" activeClassName="is-active">
      writing
    </NavLink>
    <NavLink to="/about" activeClassName="is-active">
      about
    </NavLink>
  </div>
);

export default Header;
