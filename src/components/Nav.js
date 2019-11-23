import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const SubNav = props => (
  <div className="nav__bottom">
    {props.childLinks.map(childLink => {
      return (
        <NavLink
          key={childLink}
          to={`/${props.parentLink}/${childLink}`}
          activeClassName="is-active"
        >
          {childLink}
        </NavLink>
      );
    })}
  </div>
);

const Nav = () => (
  <div className="nav">
    <div className="nav__top">
      <NavLink to="/i" activeClassName="is-active">
        input
      </NavLink>
      <NavLink to="/o" activeClassName="is-active">
        output
      </NavLink>
      <NavLink to="/s" activeClassName="is-active">
        self
      </NavLink>
    </div>
    <Switch>
      <Route
        path="/i"
        component={() => (
          <SubNav parentLink={'i'} childLinks={['art', 'books', 'movies', 'people', 'etc']} />
        )}
      ></Route>
      <Route
        path="/o"
        component={() => <SubNav parentLink={'o'} childLinks={['notes', 'writing']} />}
      ></Route>
      <Route
        path="/s"
        component={() => <SubNav parentLink={'s'} childLinks={['about', 'mission']} />}
      ></Route>
    </Switch>
  </div>
);

export default Nav;
