import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Test from '../../../documents/test.md';
import CodeBlock from './CodeBlock'

const LongPost = () => (
  <div className="long-post-container">
    <NavLink to="/output/long">BACK</NavLink>
    <ReactMarkdown source={Test} renderers={{code: CodeBlock}}></ReactMarkdown>
  </div>
);

export default LongPost;
