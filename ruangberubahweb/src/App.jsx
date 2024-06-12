import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import './tailwind.css';
import './assets/Font/fonts.css';

const App = () => {
  return (
    <div className='Main'>
      <Header />
      <Home />
      <About/>
    </div>
  );
}

export default App;
