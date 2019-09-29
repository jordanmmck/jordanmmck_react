import React from 'react';
import ReactMarkdown, { renderers } from 'react-markdown';

const Book = props => {
  const { cover, title, author, content } = props.source;
  return (
    <div className="book-container">
      <img src={cover} alt={`${title}-cover`} />
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Book;
