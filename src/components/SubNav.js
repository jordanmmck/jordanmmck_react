import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNav = props => (
  <div className="sub-nav-container">
    {props.childLinks.map(childLink => {
      return <NavLink to={`${props.parentLink}/${childLink}`}>{childLink}</NavLink>;
    })}
  </div>
);

export default SubNav;
