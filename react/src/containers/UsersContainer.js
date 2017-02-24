import React from 'react';
import { Link } from 'react-router';
import UsersIndex from '../components/UsersIndex';
import UserSignUp from '../components/UserSignUp';
import UserSignIn from '../components/UserSignIn';

const UsersContainer = (props) => {
  return(
    <div>
      <UserSignUp />
      <UserSignIn />
      <UsersIndex />
    </div>
  );
};

export default UsersContainer;
