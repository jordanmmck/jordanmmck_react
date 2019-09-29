import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import sample from '../../../documents/long/sample.md';
import CodeBlock from './CodeBlock';

const LongPost = () => (
  <div className="post-container">
    {/* <NavLink to="/output/long">BACK</NavLink> */}
    <ReactMarkdown source={sample} renderers={{ code: CodeBlock }}></ReactMarkdown>
  </div>
);

export default LongPost;
