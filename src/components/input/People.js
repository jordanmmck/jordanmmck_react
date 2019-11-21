import React from 'react';
import Nietzsche from './items/Nietzsche';
import Kubrick from './items/Kubrick';
import Feynman from './items/Feynman';

const People = () => (
  <div className="container">
    <Nietzsche />
    <Kubrick />
    <Feynman />
  </div>
);

export default People;
