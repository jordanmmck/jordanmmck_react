import React from 'react';
import SubNav from './SubNav';

const Input = () => (
  <div className="input-container">
    <SubNav parentLink="input" childLinks={['people', 'movies', 'books', 'ideas']}></SubNav>
    <h2>INPUT</h2>
  </div>
);

export default Input;
