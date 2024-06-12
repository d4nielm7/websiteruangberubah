import React from 'react';
import bwPodcast from '../../assets/pic/group2blackwhite.png';

const Home = () => {
  return (
    <div 
      className="Home bg-cover bg-center h-screen flex items-center justify-center" 
      style={{ backgroundImage: `url(${bwPodcast})` }}
    >
      <div className="text-center text-white mb-48">
        <h1 className="text-8xl font-bold font-raleway">WELCOME ABROAD</h1>
        <div className="flex justify-center items-center">
          <p className="text-4xl font-bold font-raleway" style={{ color: '#7ed957' }}>
            UBAH
          </p>
          <p className="text-4xl font-bold font-raleway" style={{ color: 'white' }}>
            citizens!
          </p>
        </div>
        <div className="mt-2">
          <hr className="border-t-2 mx-auto" style={{ borderColor: '#7ed957', width: '25%' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
