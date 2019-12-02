import React from 'react';
import { NavLink } from 'react-router-dom';

export default class SideNavParent extends React.Component {
  state = {
    expanded: true,
  };

  toggleExpand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    return (
      <div className="side-nav-parent">
        <div className="side-nav-parent__title" onClick={this.toggleExpand}>
          {this.props.parentTitle}
        </div>
        {this.state.expanded && (
          <div className="side-nav-parent__children">
            {this.props.children.map(child => (
              <div key={child.childTitle} className="side-nav-parent__child">
                <NavLink to={`/o/notes/${this.props.parentPath}/${child.childPath}`}>
                  {child.childTitle}
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
