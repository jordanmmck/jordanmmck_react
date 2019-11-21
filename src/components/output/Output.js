import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from '../SubNav';
import Post from './Post';
import Notes from './Notes';
import Writing from './Writing';

const Output = () => (
  <div>
    <SubNav parentLink="o" childLinks={['notes', 'writing']}></SubNav>
    <div className="output">
      <Switch>
        <Redirect exact path="/o" to="/o/writing" />
        <Route exact path={`/o/writing`} component={Writing} />
        <Route path={`/o/writing/:id`} component={Post} />
        <Route exact path={`/o/talking`} component={Notes} />
        <Route path={`/o/notes`} component={Notes} />
        <Route path={`/o/notes/:path`} component={Notes} />
      </Switch>
    </div>
  </div>
);

export default Output;
