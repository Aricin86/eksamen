import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { useAuthContext } from '../context/AuthProvider';

import MainLayout from '../layouts/MainLayout';

import NoMatch from '../pages/NoMatch';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import CreateArticle from '../pages/CreateArticle';
import EditArticle from '../pages/EditArticle';
import OfficeDetailed from '../pages/OfficeDetailed';
import RegisterUser from '../pages/RegisterUser';
import ArticleDetailed from '../pages/ArticleDetailed';

// const AuthenticatedRoutes = ({ children, ...rest }) => {
//   const { isLoggedIn, isLoading } = useAuthContext();
//   return (
//     <Route
//       {...rest}
//       render={() =>
//         isLoggedIn && !isLoading ? (
//           <div>{children}</div>
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

const AdminRoutes = ({ children, ...rest }) => {
  const { isLoggedIn, isAdmin, isLoading } = useAuthContext();
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={() => isLoggedIn && isAdmin && !isLoading && children}
    />
  );
};

AdminRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

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
        <Route path="/kontor/:id">
          <OfficeDetailed />
        </Route>
        <Route path="/fagartikler">
          <Articles />
        </Route>
        <Route path="/fagartikkel/:id">
          <ArticleDetailed />
        </Route>
        <Route path="/kontakt-oss">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registrer">
          <RegisterUser />
        </Route>
        <AdminRoutes path="/ny-artikkel">
          <CreateArticle />
        </AdminRoutes>
        <AdminRoutes path="/rediger/:id">
          <EditArticle />
        </AdminRoutes>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
