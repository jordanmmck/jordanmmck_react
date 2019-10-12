import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Long from './output/Long';
import Short from './output/Short';
import LongPost from './output/LongPost';

const Output = () => (
  <div>
    <SubNav parentLink="out" childLinks={['short', 'long']}></SubNav>
    <div className="output">
      <Switch>
        <Redirect exact path="/out" to="/out/long" />
        <Route exact path={`/out/long`} component={Long} />
        <Route path={`/out/long/:id`} component={LongPost} />
        <Route path={`/out/short`} component={Short} />
      </Switch>
    </div>
  </div>
);

export default Output;
