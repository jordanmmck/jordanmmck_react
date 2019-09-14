import React from 'react';
import SubNav from './SubNav';

const Output = () => (
  <div className="output-container">
    <SubNav parentLink="output" childLinks={['long', 'short']}></SubNav>
    <h2>OUTPUT</h2>
  </div>
);

export default Output;
