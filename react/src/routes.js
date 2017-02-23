import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import PublicationsContainer from './containers/PublicationsContainer';
import WheresJacob from './components/WheresJacob';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={PublicationsContainer} />
    <Route path="/home" component={PublicationsContainer} />
    <Route path="/wheresjacob" component={WheresJacob} />
  </Route>
);

export default routes;
