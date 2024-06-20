import React, { useState } from 'react';
import './header.css';
import small_logo from '../../assets/pic/smalllogo.png';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuAnimation = useSpring({
    transform: isNavOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isNavOpen ? 1 : 0,
  });

  const handleSignInClick = () => {
    navigate('/signup');  // Use navigate to go to the /signin page
  };

  return (
    <div className='head font-league-spartan'>
      <div className='nav-left'>
        <button className='hamburger' onClick={toggleNav}>
          <i className='material-icons'>☰</i>
        </button>
        <img src={small_logo} alt="Logo" className='logo' />
        <animated.div style={menuAnimation} className="side-nav">
          {isNavOpen && (
            <div className='side-nav'>
              <button className='close-btn' onClick={toggleNav}>
                <i className='material-icons'>☰</i>
              </button>
              <ul>
                <li><a href="#About-us">About us</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Partners">Partners</a></li>
                <li><a href="#Members">Members</a></li>
                <li><a href="#Careers">Careers</a></li>
                <li><a href="#Blogs">Blogs</a></li>
                <li><a href="#Shops">Shops</a></li>
              </ul>
            </div>
          )}
        </animated.div>
      </div>
      <button className='signup-button' onClick={handleSignInClick}>Sign Up</button>
    </div>
  );
};

export default Header;
