import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import PublicationsContainer from './containers/PublicationsContainer';
import UsersContainer from './containers/UsersContainer';
import WheresJacob from './components/WheresJacob';
import AboutJacob from './components/AboutJacob';
import PostsContainer from './containers/PostsContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={AboutJacob} />
    <Route path="/home" component={AboutJacob} />
    <Route path="/publications" component={PublicationsContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/posts" component={PostsContainer} />
  </Route>
);

export default routes;
