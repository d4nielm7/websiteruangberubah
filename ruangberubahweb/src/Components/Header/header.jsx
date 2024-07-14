import React, { useState } from 'react';
import './header.css';
import small_logo from '../../assets/pic/smalllogo.png';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuAnimation = useSpring({
    transform: isNavOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isNavOpen ? 1 : 0,
  });

  const handleSignInClick = () => {
    navigate('/signin');  
  };
  
  const handleLogoClick = () => {
    navigate('/'); 
    window.location.reload(true);
    window.scrollTo(0, 0); 
  };

  return (
    <div className='head font-league-spartan'>
      <div className='nav-left'>
        <button className='hamburger' onClick={toggleNav}>
          <i className='material-icons'>☰</i>
        </button>
        <img src={small_logo} alt="Logo" className='logo' onClick={handleLogoClick}/>
        <animated.div style={menuAnimation} className="side-nav">
          {isNavOpen && (
            <div className='side-nav'>
              <button className='close-btn' onClick={toggleNav}>
                <i className='material-icons'>☰</i>
              </button>
              <ul>
                <li><a href="#About-us">About us</a></li>
                <li><a href="#Services">Services</a></li>
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
      <button className='right-button rounded-[25px] font-raleway' onClick={handleSignInClick}>Sign In</button>
    </div>
  );
};

export default Header;
