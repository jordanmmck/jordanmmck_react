import React from 'react';
import { NavLink } from 'react-router-dom';

const Long = () => (
  <div className="long-container">
    <NavLink to="/writing/long/post1">POST 1</NavLink>
    <NavLink to="/writing/long/post2">POST 2</NavLink>
    <NavLink to="/writing/long/post3">POST 3</NavLink>
  </div>
);

export default Long;
