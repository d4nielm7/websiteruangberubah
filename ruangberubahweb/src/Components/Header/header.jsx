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
              <i className='material-icons'>☰</i>
            </button>

            <ul>
              <li><a href="#About">About us</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Contact">Contact</a></li>
              <li><a href="#Partners">Partners</a></li>
              <li><a href="#Members">Members</a></li>
              <li><a href="#Shops">Shops</a></li>
            </ul>

          </div>

        )}
      </div>

      <div className='search-container'>
        <div className='search-icon-container'>
          <i className='material-icons search-icon'>⌕</i>
          <input
            type="text"
            className='search-bar'
            placeholder='Type to search'
          />
        </div>
        <button className='signup-button'>Sign Up</button>
      </div>

    </div>
  );
};

export default Header;
