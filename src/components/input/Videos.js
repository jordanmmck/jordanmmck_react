import React from 'react';
import Video from './items/Video';
import mapsOfMeaning from '../../../documents/videos/mapsOfMeaning.json';
import nietzsche from '../../../documents/videos/nietzsche.json';

const Videos = () => (
  <div className="container">
    <Video source={nietzsche} />
    <Video source={mapsOfMeaning} />
  </div>
);

export default Videos;
