import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import Application from "./containers/Application";

/* import BrowserRouter from 'react-router-dom' */
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
import "./styles/style.css";
import "./styles/styles.scss";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
