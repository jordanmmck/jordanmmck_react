import React from 'react';

const Book = props => {
  const { cover, title, author, content } = props.source;
  return (
    <div className="book">
      <div className="book__cover">
        <img src={cover} alt={`${title}-cover`} />
      </div>
      <div className="book__body">
        <h2 className="book__title">{title}</h2>
        <h3 className="book__author">{author}</h3>
        <p className="book__text">{content}</p>
      </div>
    </div>
  );
};

export default Book;
