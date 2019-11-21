import React from 'react';

const Movie = props => {
  const { cover, title, director, content } = props.source;
  return (
    <div className="movie">
      <div className="movie__cover">
        <img src={cover} alt={title} />
      </div>
      <div className="movie__header">
        <h2>
          <span className="movie__title">{title}</span>
          {director && <span className="movie__director">{` — ${director}`}</span>}
        </h2>
      </div>
      <div>
        <p className="movie__content">{content}</p>
      </div>
    </div>
  );
};

export default Movie;
