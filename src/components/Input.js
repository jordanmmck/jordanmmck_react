import React from 'react';
import SubNav from './SubNav';
import Movies from './input/Movies';
import Books from './input/Books';
import Videos from './input/Videos';
import People from './input/People';
import { Route, Switch, Redirect } from 'react-router-dom';

const Input = () => (
  <div className="input">
    <SubNav
      parentLink="in"
      childLinks={['movies', 'books', 'philosophy', 'people', 'art']}
    ></SubNav>
    <Switch>
      <Redirect exact path="/in" to="/in/movies" />
      <Route path={`/in/movies`} component={Movies} />
      <Route path={`/in/books`} component={Books} />
      <Route path={`/in/philosophy`} component={Videos} />
      <Route path={`/in/people`} component={People} />
      <Route path={`/in/art`} component={People} />
    </Switch>
  </div>
);

export default Input;
