import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import sample from '../../../documents/posts/sample.md';
import CodeBlock from './CodeBlock';

const Post = () => (
  <div>
    <div className="post">
      <ReactMarkdown source={sample} renderers={{ code: CodeBlock }}></ReactMarkdown>
    </div>
  </div>
);

const WritingPreviews = () => (
  <div className="writing__previews">
    <NavLink to="/o/writing/ethereum">Ethereum</NavLink>
    <NavLink to="/o/writing/ethereum">Ethereum</NavLink>
    <NavLink to="/o/writing/ethereum">Ethereum</NavLink>
  </div>
);

const Writing = () => (
  <div className="writing">
    <Switch>
      <Route exact path="/o/writing/:post" component={Post} />
      <Route exact path="/o/writing" component={WritingPreviews} />
    </Switch>
  </div>
);

export default Writing;
