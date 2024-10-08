import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import VisionMision from './Components/VisionMision/visionmision';
import Program from './Components/Program/program';
import Contact from './Components/Contact/contact';
import './tailwind.css';
import './assets/Font/fonts.css';

const MainPage = () => {
  return (
    <div className='MainPage'>
      <Home />
      <About />
      <VisionMision />
      <Program />
      <Contact/>
    </div>
  );
}

export default MainPage;
