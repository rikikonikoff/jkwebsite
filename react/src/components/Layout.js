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
      <a href="/users/sign_in"> Friends and Family Login </a>
      <Link to="/wheres_jacobs"> Where's Jacob? </Link>
      <button method='get' action='/JacobKonikoffResume.pdf'>
        Download Jacob's Resume
      </button>
      <br />
      <h1 className="page-title"> Jacob M. Konikoff </h1>
      { props.children }
    </div>
  );
};

export default Layout;
