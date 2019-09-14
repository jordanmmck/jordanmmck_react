import React from 'react';
import SubNav from './SubNav';

const Self = () => (
  <div className="self-container">
    <SubNav parentLink="self" childLinks={['about', 'pictures', 'resume']}></SubNav>
    <h2>SELF</h2>
  </div>
);

export default Self;
