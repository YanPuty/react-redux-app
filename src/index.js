import React from "React";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./view/App";
import "./styles/index.scss"

//Stores
import configureStore from "./stores/configureStore";
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);