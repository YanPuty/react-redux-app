import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Action
import { getAllBusiness } from "../../action";

class HomePage extends React.Component {

    componentDidMount() {
        const { getAll } = this.props;
        getAll();
    }

    render() {
        return (
            <div className="container">
                <h5 style={{ textAlign: "center" }}>this is home pages</h5>
                <Link to="/dashboard" className="text-primary">Dashboard</Link><br/>
                <Link to="/login" className="text-primary">Login</Link>
            </div>
        );
    }
}

HomePage.propTypes = {
    getAll: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAllBusiness())
  };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomePage)
  );