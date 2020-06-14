import React, { Fragment } from "react";
import { BrowserRouter, Router as MainRouter } from "react-router-dom";

// Component
import Router from "../routes";
import { history } from "../utils/history";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <MainRouter history={history}>
                        <Router />
                    </MainRouter>
                </Fragment>
            </BrowserRouter>
        );
    }

}

export default App;