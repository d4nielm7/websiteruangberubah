import React from 'react';
import './tailwind.css';
import './assets/Font/fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage';
import Signin from './Components/Header/Signin/signin';
import Signup from './Components/Header/Signin/signup';

const App = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
