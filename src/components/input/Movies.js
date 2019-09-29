import React from 'react';
import Movie from './Movie';
import spaceOdyssey from '../../../documents/movies/spaceOdyssey.json';

const Movies = () => (
  <div className="movies-container">
    <Movie source={spaceOdyssey} />
    <Movie source={spaceOdyssey} />
  </div>
);

export default Movies;
