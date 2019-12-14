import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Notes from './Notes';
import Writing from './Writing';

const Output = () => (
  <div>
    <div className="container">
      <Switch>
        <Redirect exact path="/o" to="/o/writing/eth" />
        <Route exact path="/o/writing/:post?" component={Writing} />
        <Redirect exact path="/o/notes" to="/o/notes/society/eth" />
        <Route path="/o/notes/:parent?/:child?" component={Notes} />
      </Switch>
    </div>
  </div>
);

export default Output;
