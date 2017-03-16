import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './containers/Layout';
import PublicationsContainer from './containers/PublicationsContainer';
import UsersContainer from './containers/UsersContainer';
import WheresJacob from './components/WheresJacob';
import HomeContainer from './containers/HomeContainer';
import PostsContainer from './containers/PostsContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomeContainer} />
    <Route path="/homes" component={HomeContainer} />
    <Route path="/publications" component={PublicationsContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
    <Route path="/users" component={UsersContainer} />
    <Route path="/posts" component={PostsContainer} />
  </Route>
);

export default routes;
