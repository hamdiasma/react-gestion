import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Home from "./pages/Home";
import MoviesContainer from "./pages/Movies";
import SeriesContainer from "./pages/Series";
import Login from "./pages/Login";
import store from "../store";
import Register from "./pages/Register";

export default function app() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MyNavbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/movies">
              <MoviesContainer />
            </Route>
            <Route path="/series">
              <SeriesContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
