import React from 'react';
import Nietzsche from './people/Nietzsche';
import Kubrick from './people/Kubrick';
import Feynman from './people/Feynman';

const People = () => (
  <div className="container">
    <Nietzsche />
    <Kubrick />
    <Feynman />
  </div>
);

export default People;
