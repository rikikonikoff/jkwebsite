import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Layout = (props) => {
  return(
    <div>
      <BackButton />
      <br />
      <Link to="/home">Home</Link>
      <a href="/users/sign_in">Log In</a>
      <Link to="/wheresjacob">Where's Jacob?</Link>
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
