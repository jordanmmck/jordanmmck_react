import React from 'react';

const Movie = props => {
  const { cover, title, director, content } = props.source;
  return (
    <div className="movie-container">
      <div className="image-container">
        <img src={cover} alt={`${title} cover`} />
      </div>
      <div className="title-container">
        <div className="title">{title}</div>
        <div className="subtitle">{`— ${director}`}</div>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Movie;
