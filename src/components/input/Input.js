import React from 'react';
import Movies from './Movies';
import Books from './Books';
import Videos from './Videos';
import People from './People';
import Arts from './Arts';
import { Route, Switch, Redirect } from 'react-router-dom';

const Input = () => (
  <div className="input">
    <Switch>
      <Redirect exact path="/i" to="/i/movies" />
      <Route path="/i/art" component={Arts} />
      <Route path="/i/people" component={People} />
      <Route path="/i/movies" component={Movies} />
      <Route path="/i/books" component={Books} />
      <Route path="/i/etc" component={Videos} />
    </Switch>
  </div>
);

export default Input;
