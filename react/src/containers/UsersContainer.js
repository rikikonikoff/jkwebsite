import React from 'react';
import { Link } from 'react-router';
import UsersIndex from '../components/UsersIndex';

const UsersContainer = (props) => {
  return(
    <div>
      {props.session && props.session.admin &&
        <div>
          <h2>Users</h2>
          <br/>
          <UsersIndex />
        </div>}
    </div>
  );
};

export default UsersContainer;
