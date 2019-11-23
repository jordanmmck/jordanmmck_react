import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const About = () => <div>about me...</div>;

const Mission = () => <div>my mission...</div>;

const Self = () => (
  <div className="container">
    <Switch>
      <Redirect exact path="/s" to="/s/about" />
      <Route path="/s/about" component={About} />
      <Route path="/s/mission" component={Mission} />
    </Switch>
  </div>
);

export default Self;
