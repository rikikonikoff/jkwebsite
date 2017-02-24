import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from './components/Navbar';
import PublicationsContainer from './containers/PublicationsContainer';
import UsersContainer from './containers/UsersContainer';
import WheresJacob from './components/WheresJacob';
import AdminSignIn from './components/AdminSignIn';

let routes = (
  <Route path="/" component={Navbar}>
    <IndexRoute component={PublicationsContainer} />
    <Route path="/home" component={PublicationsContainer} />
    <Route path="/publications" component={PublicationsContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
    <Route path="/users/sign_up" component={UsersContainer} />
    <Route path="/users/sign_in" component={UsersContainer} />
    <Route path="/users/sign_out" component={UsersContainer} />
    <Route path="/admins/sign_in" component={AdminSignIn} />
    <Route path="/admins/sign_out" component={AdminSignIn} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/users/:id" component={UsersContainer} />
  </Route>
);

export default routes;
