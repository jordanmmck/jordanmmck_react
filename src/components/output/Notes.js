import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import sample from '../../../documents/notes/sample.md';
import CodeBlock from './CodeBlock';
import { NavLink } from 'react-router-dom';

export default class Notes extends React.Component {
  componentDidMount() {
    this.handleAdjustSideNav();
    document.querySelector('body').addEventListener('scroll', this.handleAdjustSideNav);
    window.addEventListener('resize', this.handleAdjustSideNav);
  }

  componentWillUnmount() {
    document.querySelector('body').removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleAdjustSideNav);
  }

  handleAdjustSideNav = () => {
    let topOffset = this.topSticky.offsetTop;
    let bottomOffset = this.bottomSticky.offsetTop + this.bottomSticky.offsetHeight;
    this.sideNav.style.marginTop = `${topOffset}px`;
    this.sideNav.style.height = `${bottomOffset - topOffset}px`;
  };

  render() {
    return (
      <div className="notes">
        <nav className="side-nav-container">
          <div className="top-sticky" ref={el => (this.topSticky = el)}>
            &nbsp;
          </div>

          <div className="side-nav" ref={el => (this.sideNav = el)}>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
            <NavLink to="/o/notes/memes">Memes</NavLink>
          </div>

          <div className="bottom-sticky" ref={el => (this.bottomSticky = el)}>
            &nbsp;
          </div>
        </nav>
        <div className="note">
          <ReactMarkdown source={sample} renderers={{ code: CodeBlock }}></ReactMarkdown>
        </div>
      </div>
    );
  }
}
