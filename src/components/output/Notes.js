import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import SideNav from './SideNav';

import nietzsche from '../../../documents/notes/philosophy/nietzsche.md';
import eth from '../../../documents/notes/society/eth.md';

export default class Notes extends React.Component {
  state = {
    data: '',
    error: '',
  };

  componentDidMount() {
    const parent = this.props.match.params.parent;
    const child = this.props.match.params.child;
    this.updateNote(parent, child);
  }

  componentDidUpdate(prevProps) {
    const prevParent = prevProps.match.params.parent;
    const prevChild = prevProps.match.params.child;
    const parent = this.props.match.params.parent;
    const child = this.props.match.params.child;

    if (prevParent !== parent || prevChild !== child) {
      this.updateNote(parent, child);
    }
  }

  updateNote = (parent, child) => {
    fetch(`http://localhost:3000/docs/notes/${parent}/${child}.md`)
      .then(res => {
        const reader = res.body.getReader();
        console.info(reader);
        // this.setState({ result }, () => {
        //   console.info(this.state);
        // });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div className="notes">
        <SideNav />
        <div className="note">
          <ReactMarkdown source={eth} renderers={{ code: CodeBlock }} />
        </div>
      </div>
    );
  }
}
