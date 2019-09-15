import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import People from './People';
import Movies from './Movies';
import Books from './Books';
import Ideas from './Ideas';

const Input = () => (
  <div className="input-container">
    <SubNav parentLink="input" childLinks={['people', 'movies', 'books', 'ideas']}></SubNav>
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
