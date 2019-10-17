import React from 'react';
import Book from './Book';
import geb from '../../../documents/books/geb.json';
import siddhartha from '../../../documents/books/siddhartha.json';
import diaspora from '../../../documents/books/diaspora.json';
import superintelligence from '../../../documents/books/superintelligence.json';
import zarathustra from '../../../documents/books/zarathustra.json';
import mrFeynman from '../../../documents/books/mrFeynman.json';
import laws from '../../../documents/books/laws.json';
import crime from '../../../documents/books/crime.json';
import doors from '../../../documents/books/doors.json';
import untethered from '../../../documents/books/untethered.json';
import powerOfNow from '../../../documents/books/powerOfNow.json';

const Books = () => (
  <div className="container">
    <Book source={zarathustra} />
    <Book source={geb} />
    <Book source={siddhartha} />
    <Book source={superintelligence} />
    <Book source={diaspora} />
    <Book source={mrFeynman} />
    <Book source={laws} />
    <Book source={doors} />
    <Book source={crime} />
    <Book source={untethered} />
    <Book source={powerOfNow} />
  </div>
);

export default Books;
