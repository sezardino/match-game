import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./containers/App";

import "./assets/styles/main.scss";

import "./firebase/init";
import firebase from "firebase/app";
let app = false;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = true;
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </React.StrictMode>,
            document.getElementById("root")
        );
    }
});
