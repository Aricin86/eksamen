import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
// import OfficeDetailed from '../pages/OfficeDetailed';

const Routes = () => (
  <Router>
    <MainLayout>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/kontorer">
        <Offices />
      </Route>
      <Route path="/fagartikler">
        <Articles />
      </Route>
      <Route path="/kontakt-oss">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* <Route path="*">
        <NoMatch />
      </Route> */}
    </MainLayout>
  </Router>
);

export default Routes;
