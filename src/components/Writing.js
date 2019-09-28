import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Long from './writing/Long';
import Short from './writing/Short';
import LongPost from './writing/LongPost';

const Writing = () => (
  <div>
    <SubNav parentLink="writing" childLinks={['short', 'long']}></SubNav>
    <div className="output-container">
      <Switch>
        <Redirect exact path="/writing" to="/writing/long" />
        <Route exact path={`/writing/long`} component={Long} />
        <Route path={`/writing/long/:id`} component={LongPost} />
        <Route path={`/writing/short`} component={Short} />
      </Switch>
    </div>
  </div>
);

export default Writing;
