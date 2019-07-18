import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
