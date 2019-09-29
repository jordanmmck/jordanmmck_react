import React from 'react';
import Book from './Book';
import geb from '../../../documents/books/geb.json';

const Books = () => (
  <div className="books-container">
    <Book source={geb} />
    <Book source={geb} />
  </div>
);

export default Books;
