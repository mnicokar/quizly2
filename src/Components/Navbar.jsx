import React from 'react';
import './Navbar.css'



function Navbar() {
  return (
    <nav className='nav'>
      <ul >
        <li>
            <a href="#">Home</a>
          
        </li>
        <li>
            <a href="#">Browse</a>
          
        </li>
        <li>
            <a href="#">Create</a>
        </li>
        <li>
          <a href="#">Sign In / Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
