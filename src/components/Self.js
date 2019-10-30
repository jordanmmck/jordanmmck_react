import React from 'react';
import SubNav from './SubNav';

const About = () => (
  <div>
    <SubNav parentLink="self" childLinks={['about', 'values', 'random']}></SubNav>
    <div className="self-container">
      <h3>ABOUT</h3>
      about me...
    </div>
  </div>
);

export default About;
