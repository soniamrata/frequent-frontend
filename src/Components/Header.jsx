import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import './Header.css'


const Header = () => {
  return (
    <header>

      <h1 className="register">Register Yourself</h1>

      <div className='button'>
        <Link className='icon' to="/">Home</Link>
        <Link className='icon' to="/RegistrationForm">RegistrationForm</Link>
      </div>

    </header>
  );
};

export default Header;
