import React from 'react';
import { Router } from 'react-router';

const Root = ({browserHistory, routes, current_user, current_admin}) => {
  return(
    <Router
    history={browserHistory}
    routes={routes}
    current_user={current_user}
    current_admin={current_admin}
    />
  );
};

export default Root;
