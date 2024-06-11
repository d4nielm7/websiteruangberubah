import React from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import './tailwind.css';

const App = () => {
  return (
    <div className='Main'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
