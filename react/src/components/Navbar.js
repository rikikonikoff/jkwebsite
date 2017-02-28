import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Navbar = (props) => {
  return(
    <div>
      { props.children }
    </div>
  );
};

export default Navbar;
