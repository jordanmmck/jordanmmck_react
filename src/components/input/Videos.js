import React from 'react';
import Video from './Video';
import nietzsche from '../../../documents/videos/nietzsche.json';

const Videos = () => (
  <div className="videos-container">
    <Video source={nietzsche} />
    <Video source={nietzsche} />
  </div>
);

export default Videos;
