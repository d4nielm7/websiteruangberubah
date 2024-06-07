import React, { useState } from 'react';
import './header.css';
import small_logo from '../../assets/smalllogo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='head'>
      <div className='nav-left'>
        <button className='hamburger' onClick={toggleNav}>
          <i className='material-icons'>☰</i>
        </button>
        <img src={small_logo} alt="Logo" className='logo' />
        {isNavOpen && (

          <div className='side-nav'>
            <button className='close-btn' onClick={toggleNav}>
              <i className='material-icons'>X</i>
            </button>

            <ul>
              <li><a href="#About">About us</a></li>
              <li><a href="service">Service</a></li>
              <li><a href="#myproject">Contact</a></li>
            </ul>

          </div>

        )}
      </div>

      <div className='search-container'>
        <input type="text" className='search-bar' placeholder='Search...' />
        <button className='signup-button'>Sign Up</button>
      </div>

    </div>
  );
};

export default Header;
