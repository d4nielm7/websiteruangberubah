import React from 'react';
import bwPodcast from '../../assets/pic/group2blackwhite.png';

const Home = () => {
  return (
    <div 
      className="Home bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url(${bwPodcast})` }}
    >
    </div>
  );
};

export default Home;
