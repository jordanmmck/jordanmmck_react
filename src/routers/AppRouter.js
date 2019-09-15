import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/Input';
import Output from '../components/Output';
import Self from '../components/Self';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Redirect exact path="/" to="output" />
      <Route path="/input" component={Input} />
      <Route path="/output" component={Output} />
      <Route path="/self" component={Self} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
