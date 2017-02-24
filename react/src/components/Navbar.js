import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Navbar = (props) => {
  return(
    <div>
      <ul className="navbar">
        <li><BackButton /></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/users/sign_in">Log In</Link></li>
        <li><Link to="/users/sign_out">Log Out</Link></li>
        <li><Link to="/wheresjacob">Where is Jacob?</Link></li>
        <li><button method='get' action='/JacobKonikoffResume.pdf'>
          Download Resume
        </button></li>
      </ul>
      { props.children }
    </div>
  );
};

export default Navbar;
