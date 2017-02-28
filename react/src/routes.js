import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from './components/Navbar';
import PublicationsContainer from './containers/PublicationsContainer';
import UsersContainer from './containers/UsersContainer';
import WheresJacob from './components/WheresJacob';

let routes = (
  <Route path="/" component={Navbar}>
    <IndexRoute component={PublicationsContainer} />
    <Route path="/home" component={PublicationsContainer} />
    <Route path="/publications" component={PublicationsContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/users/:id" component={UsersContainer} />
  </Route>
);

export default routes;
