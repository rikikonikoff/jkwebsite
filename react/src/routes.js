import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import PublicationsContainer from './containers/PublicationsContainer';
import UsersContainer from './containers/UsersContainer';
import PhotosContainer from './containers/PhotosContainer';
import WheresJacob from './components/WheresJacob';
import AboutJacob from './components/AboutJacob';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={AboutJacob} />
    <Route path="/home" component={AboutJacob} />
    <Route path="/publications" component={PublicationsContainer} />
    <Route path="/photos" component={PhotosContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/users/:id" component={UsersContainer} />
  </Route>
);

export default routes;
