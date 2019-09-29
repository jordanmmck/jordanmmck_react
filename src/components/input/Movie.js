import React from 'react';

const Movie = props => {
  const { cover, title, director, content } = props.source;
  return (
    <div className="movie-container">
      <img src={cover} alt={`${title} cover`} />
      <div>
        <h1>{title}</h1>
        <h2>{director}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Movie;
