import React from 'react';
import ReactMarkdown from 'react-markdown';
import sample from '../../../documents/long/sample.md';
import CodeBlock from './CodeBlock';
import { NavLink } from 'react-router-dom';

const Notes = () => (
  <div className="notes">
    <div className="side-nav">
      <NavLink to="/o/notes/society">Society</NavLink>
      <NavLink to="/o/notes/memes">Memes</NavLink>
      <NavLink to="/o/notes/science">Science</NavLink>
      <NavLink to="/o/notes/university">University</NavLink>
    </div>
    <div className="note">
      <ReactMarkdown source={sample} renderers={{ code: CodeBlock }}></ReactMarkdown>
    </div>
  </div>
);

export default Notes;
