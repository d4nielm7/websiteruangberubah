import React from 'react';
import './tailwind.css';
import './assets/Font/fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage';
import Contact from './Components/Header/Contact/contact';
import Header from './Components/Header/header';
import SignIn from './Components/Header/Sign in/signin';
import SignUp from './Components/Header/Sign up/signup';
import End from './Components/End/end';
const App = () => {
  return (
    <div className='Main'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      <End />
      </BrowserRouter>
    </div>
  );
}

export default App;
