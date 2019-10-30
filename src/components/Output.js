import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Long from './output/Long';
import Short from './output/Short';
import Notes from './output/Notes';
import LongPost from './output/LongPost';

const Output = () => (
  <div>
    <SubNav parentLink="out" childLinks={['notes', 'writing', 'talking', 'code']}></SubNav>
    <div className="output">
      <Switch>
        <Redirect exact path="/out" to="/out/writing" />
        <Route exact path={`/out/writing`} component={Long} />
        <Route path={`/out/writing/:id`} component={LongPost} />
        <Route exact path={`/out/talking`} component={Notes} />
        <Route path={`/out/notes`} component={Notes} />
      </Switch>
    </div>
  </div>
);

export default Output;
