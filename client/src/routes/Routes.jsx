import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <MainLayout>
      <Route exact path="/">
        <Home />
      </Route>
    </MainLayout>
  </Router>
);

export default Routes;
