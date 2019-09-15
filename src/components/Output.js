import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Long from './Long';
import Short from './Short';

const Output = () => (
  <div className="output-container">
    <SubNav parentLink="output" childLinks={['long', 'short']}></SubNav>
    <Switch>
      <Redirect exact path="/output" to="/output/long" />
      <Route path={`/output/long`} component={Long} />
      <Route path={`/output/short`} component={Short} />
    </Switch>
  </div>
);

export default Output;
