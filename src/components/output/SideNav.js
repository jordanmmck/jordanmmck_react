import React from 'react';
import SideNavParent from './SideNavParent';

export default class SideNav extends React.Component {
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
      <nav className="side-nav-container">
        <div className="top-sticky" ref={el => (this.topSticky = el)}>
          &nbsp;
        </div>

        <div className="side-nav" ref={el => (this.sideNav = el)}>
          <SideNavParent
            parentTitle={'Fate of the West'}
            parentPath={'fate-of-west'}
            children={[
              { childTitle: 'Nietzsche', childPath: 'nietzsche' },
              { childTitle: 'Wagner', childPath: 'wagner' },
            ]}
          ></SideNavParent>
          <SideNavParent
            parentTitle={'Physics'}
            parentPath={'physics'}
            children={[
              { childTitle: 'Feynman', childPath: 'feynman' },
              { childTitle: 'Mass', childPath: 'mass' },
              { childTitle: 'Gravity', childPath: 'gravity' },
            ]}
          ></SideNavParent>
        </div>

        <div className="bottom-sticky" ref={el => (this.bottomSticky = el)}>
          &nbsp;
        </div>
      </nav>
    );
  }
}
