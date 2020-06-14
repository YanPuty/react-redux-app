import React from "react";
import { Link } from "react-router-dom";


// Component

class HomePage extends React.Component {

    render() {
        return (
            <div className="container">
                <h5 style={{ textAlign: "center" }}>this is home pages</h5>
                <Link to="/dashboard">Dashboard</Link><br/>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default (HomePage);