import React from 'react';

const Art = props => {
  const { artist, image, title } = props;
  return (
    <div className="art">
      <div className="art__cover">
        <img src={image} alt={`${artist} artwork`} />
      </div>
      <div className="art__body">
        <h2>
          <span className="art__artist">{artist}</span>
          <span className="art__title">{` — ${title}`}</span>
        </h2>
      </div>
    </div>
  );
};

export default Art;
