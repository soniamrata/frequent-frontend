import React from 'react';
import './Header.css'


const Header = () => {
  return (
    <header>
      
      <h1 className="register">Register Yourself</h1>

      <div className='button'>
        <a className='icon' href="/">Home</a>
        <a className='icon' href="/RegistrationForm">Registration</a>
      </div>

    </header>
  );
};

export default Header;
