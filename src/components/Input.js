import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Movies from './input/Movies';
import Books from './input/Books';
import Videos from './input/Videos';
import People from './input/People';

const Input = () => (
  <div className="input">
    <SubNav
      parentLink="in"
      childLinks={['movies', 'books', 'videos', 'people', 'art', 'ideas']}
    ></SubNav>
    <Switch>
      <Redirect exact path="/in" to="/in/movies" />
      <Route path={`/in/movies`} component={Movies} />
      <Route path={`/in/books`} component={Books} />
      <Route path={`/in/videos`} component={Videos} />
      <Route path={`/in/people`} component={People} />
      <Route path={`/in/art`} component={People} />
      <Route path={`/in/ideas`} component={People} />
    </Switch>
  </div>
);

export default Input;
