import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/input/Input';
import Output from '../components/output/Output';
import Self from '../components/self/Self';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Redirect exact path="/" to="out" />
      <Route path="/i" component={Input} />
      <Route path="/o" component={Output} />
      <Route path="/self" component={Self} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
