import React, { useRef, useEffect } from 'react';
import './tailwind.css';
import './assets/Font/fonts.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage';
import Header from './Components/Header/header';
import SignIn from './Components/Header/Sign in/signin';
import SignUp from './Components/Header/Sign up/signup';
import End from './Components/End/end';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App = () => {
  // Smooth Scroll
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      scrollbar: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  // Main Page
  return (
    <div className='Main' ref={scrollRef}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      <End />
      </BrowserRouter>
    </div>
  );
}

export default App;
