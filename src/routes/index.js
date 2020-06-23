// Libs
import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Components
import HomePage from "../module/HomePage";
import LoginForm from "../components/Layout/LoginForm";
import Dashbaord from "../module/Dashbaord";
import NotFoundPage from "../components/NotFoundPage";

// Routes
import container from "../container";
import PrivateRoute from "../container/private-route";

class Router extends Component {

  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashbaord} />
        <PrivateRoute path="/login" component={container} authenticationComponent={LoginForm} />
        <Route path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

Router.propTypes = {
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Router));