import React from 'react';

const Book = props => {
  const { cover, title, author, content } = props.source;
  return (
    <div className="book-container">
      <div className="image-container">
        <img src={cover} alt={`${title}-cover`} />
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Book;
