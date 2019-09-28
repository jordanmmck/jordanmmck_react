import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Inspiration from '../components/Inspiration';
import Writing from '../components/Writing';
import About from '../components/About';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Redirect exact path="/" to="writing" />
      <Route path="/inspiration" component={Inspiration} />
      <Route path="/writing" component={Writing} />
      <Route path="/about" component={About} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
