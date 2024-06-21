import React from 'react';
import './tailwind.css';
import './assets/Font/fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage';
import Contact from './Components/Header/Contact/contact';
import Header from './Components/Header/header';
import End from './Components/End/end';
const App = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <End />
      </BrowserRouter>
    </div>
  );
}

export default App;
