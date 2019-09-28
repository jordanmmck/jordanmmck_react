import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SubNav from './SubNav';
import Me from './about/Me';
import Pictures from './about/Pictures';
import Resume from './about/Resume';

const About = () => (
  <div className="self-container">
    <SubNav parentLink="about" childLinks={['about', 'pictures', 'resume']}></SubNav>
    <Switch>
      <Redirect exact path="/self" to="/self/me" />
      <Route path={`/about/me`} component={Me} />
      <Route path={`/about/pictures`} component={Pictures} />
      <Route path={`/about/resume`} component={Resume} />
    </Switch>
  </div>
);

export default About;
