import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { BrowserRouter as Router } from "react-router-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
