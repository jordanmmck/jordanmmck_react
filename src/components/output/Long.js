import React from 'react';
import { NavLink } from 'react-router-dom';

const Long = () => (
  <div className="long-container">
    <NavLink to="/output/long/post1">POST 1</NavLink>
    <NavLink to="/output/long/post2">POST 2</NavLink>
    <NavLink to="/output/long/post3">POST 3</NavLink>
  </div>
);

export default Long;
