import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Navbar from './components/Navbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';



import "./App.css";

const Home = lazy(() => import('./components/pages/Home'));
const Search = lazy(() => import('./components/pages/Search'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Navbar />
      <Switch>
          <Suspense fallback={<CircularProgress />}>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={Search} />
            { /*<Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} /> */}
            {/* <Route exact path='/' component={HomePage} /> */}
          </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);