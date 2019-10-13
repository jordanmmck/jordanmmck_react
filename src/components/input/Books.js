import React from 'react';
import Book from './Book';
import geb from '../../../documents/books/geb.json';
import siddhartha from '../../../documents/books/siddhartha.json';
import diaspora from '../../../documents/books/diaspora.json';
import superintelligence from '../../../documents/books/superintelligence.json';
import zarathustra from '../../../documents/books/zarathustra.json';

const Books = () => (
  <div className="container">
    <Book source={zarathustra} />
    <Book source={geb} />
    <Book source={siddhartha} />
    <Book source={superintelligence} />
    <Book source={diaspora} />
  </div>
);

export default Books;
