import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav-container">
    <NavLink to="/input" activeClassName="is-active">
      INPUT
    </NavLink>
    <NavLink to="/output" activeClassName="is-active">
      OUTPUT
    </NavLink>
    <NavLink to="/self" activeClassName="is-active">
      SELF
    </NavLink>
  </div>
);

export default Header;
