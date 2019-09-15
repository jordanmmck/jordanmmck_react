import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import About from './About';
import Pictures from './Pictures';
import Resume from './Resume';

const Self = () => (
  <div className="self-container">
    <SubNav parentLink="self" childLinks={['about', 'pictures', 'resume']}></SubNav>
    <Switch>
      <Redirect exact path="/self" to="/self/about" />
      <Route path={`/self/about`} component={About} />
      <Route path={`/self/pictures`} component={Pictures} />
      <Route path={`/self/resume`} component={Resume} />
    </Switch>
  </div>
);

export default Self;
