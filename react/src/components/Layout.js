import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Layout = (props) => {
  return(
    <div>
      <BackButton />
      <span>
        When I grow up, I will be a dope header.
      </span>
      <br />
      <Link to="/home"> HOME </Link>
      <Link to="/users/sign_in"> Friends and Family Login </Link>
      <Link to="/wheres_jacobs"> Where's Jacob? </Link>
      <Link to="/admins/sign_in"> Jacob's Special Login </Link>
      <br />
      <h1 className="page-title"> Jacob M. Konikoff </h1>
      { props.children }
    </div>
  );
};

export default Layout;
