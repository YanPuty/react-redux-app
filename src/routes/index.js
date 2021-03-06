// Libs
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import HomePage from "../module/HomePage";
import LoginForm from "../components/Layout/LoginForm";
import Dashbaord from "../module/Dashbaord";
import NotFoundPage from "../components/NotFoundPage";
import Layout from "../components/Layout/contents";

// Routes
import container from "../container";
import PrivateRoute from "../container/private-route";

class Router extends Component {

  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/dashboard" component={Dashbaord} />
            <PrivateRoute path="/login" component={container} authenticationComponent={LoginForm} />
            <Route path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </Fragment>
    );
  }
}

export default Router;