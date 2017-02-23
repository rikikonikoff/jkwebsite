import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import PublicationsContainer from './containers/PublicationsContainer';
import WheresJacob from './components/WheresJacob';
import UserSignIn from './components/UserSignIn';
import AdminSignIn from './components/AdminSignIn';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={PublicationsContainer} />
    <Route path="/home" component={PublicationsContainer} />
    <Route path="/wheres_jacobs" component={WheresJacob} />
    <Route path="/users/sign_in" component={UserSignIn} />
    <Route path="/admins/sign_in" component={AdminSignIn} />
  </Route>
);

export default routes;
