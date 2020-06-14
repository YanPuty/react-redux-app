import React from "react";
import Authentication from "../module/Authentication/Index";

// Authentication Layout
import AuthenticationLayout from "../components/Layout/Authentication"

export class App extends React.Component {

    render() {
    
        return (
            <AuthenticationLayout>
                <Authentication form="loginForm"/>
            </AuthenticationLayout>
        );
    }

}