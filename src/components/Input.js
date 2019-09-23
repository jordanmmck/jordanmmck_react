import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import People from './input/People';
import Movies from './input/Movies';
import Books from './input/Books';
import Ideas from './input/Ideas';

const Input = () => (
  <div className="input-container">
    <SubNav parentLink="input" childLinks={['PEOPLE', 'MOVIES', 'BOOKS', 'IDEAS']}></SubNav>
    <Switch>
      <Redirect exact path="/input" to="/input/people" />
      <Route path={`/input/people`} component={People} />
      <Route path={`/input/movies`} component={Movies} />
      <Route path={`/input/books`} component={Books} />
      <Route path={`/input/ideas`} component={Ideas} />
    </Switch>
  </div>
);

export default Input;
