import React from 'react';
import { Link } from 'react-router';
import UsersIndex from '../components/UsersIndex';

const UsersContainer = (props) => {
  return(
    <div>
      {props.current_admin &&
        <UsersIndex />}
    </div>
  );
};

export default UsersContainer;
