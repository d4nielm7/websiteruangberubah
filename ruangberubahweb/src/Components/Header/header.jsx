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
    config: { duration: 200 },
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
          <div className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl bg-black p-1.5">
            <div className="space-y-1">
                <span className="block h-0.5 w-6 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:translate-y-1 group-hover:rotate-45"></span>
                <span className="block h-0.5 w-5 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:w-6 group-hover:-translate-y-1 group-hover:-rotate-45"></span>
            </div>
          </div>
        </button>
        <img src={small_logo} alt="Logo" className='logo' onClick={handleLogoClick}/>
        <animated.div style={menuAnimation} className="side-nav">
          {isNavOpen && (
            <div className='side-nav'>
              <button className='close-btn' onClick={toggleNav}>
                  <div className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl bg-black p-1.5">
                    <div className="space-y-1">
                      <span className="block h-0.5 w-6 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:translate-y-1 group-hover:rotate-45"></span>
                      <span className="block h-0.5 w-5 origin-center rounded-full bg-white transition-transform ease-in-out group-hover:w-6 group-hover:-translate-y-1 group-hover:-rotate-45"></span>
                    </div>
                  </div>
              </button>
              <ul>
                <li><a href="/">Main</a></li>
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
      <button className="right-button rounded-[25px] font-raleway overflow-hidden relative group" onClick={handleSignInClick}>
        <span className="absolute inset-0 bg-[#7ed957] transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
        <span className="relative z-10 text-black group-hover:text-black transition-colors duration-300 ease-in-out">Sign In</span>
      </button>
    </div>
  );
};

export default Header;
