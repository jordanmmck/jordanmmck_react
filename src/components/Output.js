import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Long from './output/Long';
import Short from './output/Short';
import LongPost from './output/LongPost';

const Output = () => (
  <div className="output-container">
    <SubNav parentLink="output" childLinks={['long', 'short']}></SubNav>
    <Switch>
      <Redirect exact path="/output" to="/output/long" />
      <Route exact path={`/output/long`} component={Long} />
      <Route path={`/output/long/:id`} component={LongPost} />
      <Route path={`/output/short`} component={Short} />
    </Switch>
  </div>
);

export default Output;
