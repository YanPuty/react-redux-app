// Libs
import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import Dashbaord from "../module/Dashbaord";

// Components

class Container extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Redirect
                        exact
                        to="/dashboard"
                    />
                    <Route
                        path="/dashboard"
                        component={Dashbaord}
                    />
                </Switch>
            </Fragment>
        );
    }
}

Container.propTypes = {
    history: PropTypes.any,
    match: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));