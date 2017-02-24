import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ApplicationContainer from './containers/ApplicationContainer';
import PublicationsContainer from './containers/PublicationsContainer';
import UsersContainer from './containers/UsersContainer';
import WheresJacob from './components/WheresJacob';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import AdminSignIn from './components/AdminSignIn';

let routes = (
  <Route path="/" component={ApplicationContainer}>
    <IndexRoute component={PublicationsContainer} />
    <Route path="/home" component={PublicationsContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
    <Route path="/users/sign_up" component={UserSignUp} />
    <Route path="/users/sign_in" component={UserSignIn} />
    <Route path="/admins/sign_in" component={AdminSignIn} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/users/:id" component={UsersContainer} />
  </Route>
);

export default routes;
