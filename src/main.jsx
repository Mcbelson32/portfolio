import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.body).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
