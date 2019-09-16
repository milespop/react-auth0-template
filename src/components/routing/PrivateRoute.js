import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Loader } from '../loader/Loader';

const PrivateRoute = ({ user, isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ?
      (user ? <Component {...props} /> : <Loader {...props} />)
      :
      <Redirect to={'/'} />
  )} />
);

export default PrivateRoute;