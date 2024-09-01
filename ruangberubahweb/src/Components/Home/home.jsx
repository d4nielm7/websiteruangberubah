import React, { useLayoutEffect, useRef } from 'react';
import bwPodcast from '../../assets/pic/group2blackwhite.png';
import './home.css';
import gsap from "gsap"

export const homeTimeline = gsap.timeline()
  
const Home = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from("#bgImage", {
        scale:2,
        duration: 1.5
      }).to("#mask", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5
      }, 0).from("#welcomeAbroad", {
        opacity: 0,
        y: "+=30"
      }).from(["#ubah", "#citizens"], {
        opacity: 0,
        y: "+=30"
      }).from("#underline", {
        width: 0,
      })
      
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ backgroundColor: 'black', height: '100vh'}}
      ref={comp}
    >
      <div id="mask">
        <div 
          className="Home bg-cover bg-center h-screen flex flex-col items-center justify-center"
          id = "bgImage" 
          style={{ backgroundImage: `url(${bwPodcast})` }}
        >
          <div className="text-center text-white mb-48 z-10">
            <h1 className="text-6xl md:text-8xl font-bold font-raleway" id="welcomeAbroad">WELCOME ABROAD</h1>
            <div className="flex justify-center items-center">
              <p className="text-3xl md:text-4xl font-bold font-raleway" id="ubah" style={{ color: '#7ed957' }}>
                UBAH
              </p>
              <p className="text-3xl md:text-4xl font-bold font-raleway" id="citizens" style={{ color: 'white' }}>
                citizens!
              </p>
            </div>
            <div className="mt-2">
              <hr className="border-t-2 mx-auto" id="underline" style={{ borderColor: '#7ed957', width: '25%' }} />
            </div>
          </div>
          <div className="bottom-slice"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
