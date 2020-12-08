import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import NoMatch from '../pages/NoMatch';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import CreateArticle from '../pages/CreateArticle';
import OfficeDetailed from '../pages/OfficeDetailed';
import RegisterUser from '../pages/RegisterUser';
import ArticleDetailed from '../pages/ArticleDetailed';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/kontorer">
          <Offices />
        </Route>
        {/* // ! Skal være /:id */}
        <Route path="/detaljert">
          <OfficeDetailed />
        </Route>
        <Route path="/fagartikler">
          <Articles />
        </Route>
        <Route path="/fagartikler/:id">
          <ArticleDetailed />
        </Route>
        <Route path="/kontakt-oss">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ny-artikkel">
          <CreateArticle />
        </Route>
        <Route path="/registrer">
          <RegisterUser />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
