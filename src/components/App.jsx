import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Home from "./pages/Home";
import MoviesContainer from "./pages/Movies";
import SeriesContainer from "./pages/Series";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = props => {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            {props.currentUser.token ? (
              <Home />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/movies">
            {props.currentUser.token ? (
              <MoviesContainer />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )}
          </Route>
          <Route path="/series">
            {props.currentUser.token ? (
              <SeriesContainer />
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);
