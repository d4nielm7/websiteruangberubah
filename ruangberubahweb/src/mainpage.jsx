import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import VisionMision from './Components/VisionMision/visionmision';
import Program from './Components/Program/program';
import './tailwind.css';
import './assets/Font/fonts.css';

const MainPage = () => {
  return (
    <div className='MainPage'>s
      <Home />
      <About />
      <VisionMision />
      <Program />
    </div>
  );
}

export default MainPage;
