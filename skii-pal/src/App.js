
import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Navbar from "./components/Navbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";


import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

const Home = lazy(() => import("./components/pages/Home"));
const Search = lazy(() => import("./components/pages/Search"));
const Signup  = lazy(() => import( "./components/Signup"));
const Login  = lazy(()=> import( "./components/Login"));
const Profile = lazy(() => import( "./components/pages/Profile"));

const Discussion=lazy( () => import( './components/pages/Discussion' ) );


const App=( {checkUserSession, currentUser} ) => {
  useEffect( () => {
    checkUserSession();
  }, [ checkUserSession ] );

  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Suspense fallback={<div />}>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/search" component={Search} />
            <Route path='/discussion' component={Discussion} />
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

