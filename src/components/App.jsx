import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import HomeContainer from "./pages/HomeContainer";
import MoviesContainer from "./pages/MoviesContainer";
import SeriesContainer from "./pages/SeriesContainer";
import Login from "./pages/Login";
import store from "../store";

export default function app() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <MyNavbar />
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/login">
              <Login />
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
