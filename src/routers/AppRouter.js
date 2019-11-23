import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Input from '../components/input/Input';
import Output from '../components/output/Output';
import Self from '../components/self/Self';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';
import Nav from '../components/Nav';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
      <Redirect exact path="/" to="o" />
      <Route path="/i" component={Input} />
      <Route path="/o" component={Output} />
      <Route path="/s" component={Self} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
