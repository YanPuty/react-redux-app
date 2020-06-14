import React from "react";

// Authentication Layout
import AuthenticationLayout from "../Authentication"
import Authentication from "../../../module/Authentication";

export default class LoginForm extends React.Component {

    render() {
        return (
            <AuthenticationLayout>
                <Authentication form="loginForm"/>
            </AuthenticationLayout>
        );
    }

}