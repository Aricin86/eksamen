import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthProvider';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Offices from '../pages/Offices';
import Articles from '../pages/Articles';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import CreateArticle from '../pages/CreateArticle';
import OfficeDetailed from '../pages/OfficeDetailed';
// import OfficeDetailed from '../pages/OfficeDetailed';
// import NoMatch from '../components/NoMatch';

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
      {...rest}
      render={() => isLoggedIn && isAdmin && !isLoading && children}
    />
  );
};

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
      <Route path="/etkontor">
        <OfficeDetailed />
      </Route>
      <AdminRoutes path="/ny-artikkel">
        <CreateArticle />
      </AdminRoutes>
      {/* <Route path="*">
        <NoMatch />
      </Route> */}
    </MainLayout>
  </Router>
);

export default Routes;
