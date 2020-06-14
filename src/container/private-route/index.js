import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

// Constant
import { LOGIN_TYPE } from "../../Constants/authentication";

const PrivateRoute = ({ 
  component: Component, 
  authenticationComponent: AuthenticationComponent, 
  ...rest 
}) => (
  <Route
    render={props => (
      localStorage.getItem(LOGIN_TYPE)
        ? <Component {...props} />
        : <AuthenticationComponent {...props} />
    )} 
    {...rest} 
  />
);

PrivateRoute.propTypes = {
  rest: PropTypes.any,
  component: PropTypes.any,
  authenticationComponent: PropTypes.any,
};

export default PrivateRoute;