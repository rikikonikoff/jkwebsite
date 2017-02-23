import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import PublicationsContainer from './containers/PublicationsContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={PublicationsContainer} />
    <Route path="/home" component={PublicationsContainer} />
  </Route>
);

export default routes;
