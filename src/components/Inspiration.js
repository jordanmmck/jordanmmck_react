import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import People from './inspiration/People';
import Movies from './inspiration/Movies';
import Books from './inspiration/Books';
import Ideas from './inspiration/Ideas';

const Inspiration = () => (
  <div className="input-container">
    <SubNav parentLink="inspiration" childLinks={['people', 'movies', 'books', 'ideas']}></SubNav>
    <Switch>
      <Redirect exact path="/inspiration" to="/inspiration/people" />
      <Route path={`/inspiration/people`} component={People} />
      <Route path={`/inspiration/movies`} component={Movies} />
      <Route path={`/inspiration/books`} component={Books} />
      <Route path={`/inspiration/ideas`} component={Ideas} />
    </Switch>
  </div>
);

export default Inspiration;
