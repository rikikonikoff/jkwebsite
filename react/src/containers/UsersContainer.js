import React from 'react';
import { Link } from 'react-router';
import UsersIndex from '../components/UsersIndex';

const UsersContainer = (props) => {
  return(
    <div>
      {props.session && props.session.admin &&
        <UsersIndex />}
    </div>
  );
};

export default UsersContainer;
