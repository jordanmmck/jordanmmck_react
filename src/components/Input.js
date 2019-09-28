import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Movies from './input/Movies';
import Books from './input/Books';
import Videos from './input/Videos';
import Etc from './input/Etc';

const Input = () => (
  <div className="input-container">
    <SubNav parentLink="in" childLinks={['movies', 'books', 'videos', 'etc']}></SubNav>
    <Switch>
      <Redirect exact path="/in" to="/in/movies" />
      <Route path={`/in/movies`} component={Movies} />
      <Route path={`/in/books`} component={Books} />
      <Route path={`/in/videos`} component={Videos} />
      <Route path={`/in/etc`} component={Etc} />
    </Switch>
  </div>
);

export default Input;
