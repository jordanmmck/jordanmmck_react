import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Notes from './Notes';
import Writing from './Writing';

const Output = () => (
  <div>
    <div className="container">
      <Switch>
        <Redirect exact path="/o" to="/o/writing" />
        <Route exact path="/o/writing/:post?" component={Writing} />
        <Route path="/o/notes/:path?" component={Notes} />
      </Switch>
    </div>
  </div>
);

export default Output;
