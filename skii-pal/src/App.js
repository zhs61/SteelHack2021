import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Navbar from "./components/Navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Profile from "./components/pages/Profile";

import PrivateRoute from "./components/PrivateRoute";

const Home = lazy(() => import("./components/pages/Home"));
const Search = lazy(() => import("./components/pages/Search"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Suspense fallback={<div />}>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* <Route path="/profile" component={Profile} /> */}
            {/* <Route path="/search" component={Search} /> */}
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/search" component={Search} />
          </Suspense>
        </Switch>
      </AuthProvider>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
