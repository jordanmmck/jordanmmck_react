import React from 'react';
import ReactMarkdown from 'react-markdown';
import sample from '../../../documents/notes/sample.md';
import CodeBlock from './CodeBlock';
import SideNav from './SideNav';

export default class Notes extends React.Component {
  render() {
    return (
      <div className="notes">
        <SideNav />
        <div className="note">
          <ReactMarkdown source={sample} renderers={{ code: CodeBlock }} />
        </div>
      </div>
    );
  }
}
