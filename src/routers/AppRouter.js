import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/input/:sub" component={HomePage} />
      <Route path="/self" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
