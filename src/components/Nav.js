import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav-container">
    <NavLink to="/in" activeClassName="is-active">
      input
    </NavLink>
    <NavLink to="/out" activeClassName="is-active">
      output
    </NavLink>
    <NavLink to="/self" activeClassName="is-active">
      self
    </NavLink>
  </div>
);

export default Header;
