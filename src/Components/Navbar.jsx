import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/RegistrationForm">RegistrationForm</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
