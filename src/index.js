import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ProviderRoot = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<ProviderRoot />, document.getElementById("root"));
