import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="nav">
    <NavLink to="/i" activeClassName="is-active">
      input
    </NavLink>
    <NavLink to="/o" activeClassName="is-active">
      output
    </NavLink>
    <NavLink to="/self" activeClassName="is-active">
      self
    </NavLink>
  </div>
);

export default Header;
