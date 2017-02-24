import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Navbar = (props) => {
  return(
    <div>
      <ul className="navbar">
        <li><BackButton /></li>
        <li><Link to="/home">Home</Link></li>
        <li><a href="/users/sign_in">Log In</a></li>
        <li><Link to="/wheresjacob">Where is Jacob?</Link></li>
        <li><button method='get' action='/JacobKonikoffResume.pdf'>
          Download Resume
        </button></li>
      </ul>
    </div>
  );
};

export default Navbar;
