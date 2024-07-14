import React from 'react';
import background from '../../assets/pic/logo4.png';

const Program = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-10">
      <h1 className="text-6xl font-raleway mb-10 text-white">
        Our Programs<span className="text-[#7ed957] ">.</span>
      </h1>
      <div className="flex justify-center space-x-8">
        <div className="relative bg-white text-black p-4 rounded-lg shadow-md w-96 h-[600px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 rounded-lg"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className="relative z-10 flex flex-col items-center h-full">
            <h2 className="text-3xl font-bold mb-4 mt-4">UBAHweb!</h2>
            <p className="text-lg leading-relaxed font-inter mb-4">One-stop solution for business partners...</p>
            <div className="flex-grow"></div>
            <button className="p-4 w-full rounded bg-black text-white text-lg cursor-pointer font-inter">Learn More</button>
          </div>
        </div>
        <div className="relative bg-[#7ed957] text-black p-4 rounded-lg shadow-md w-96 h-[600px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 rounded-lg"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className="relative z-10 flex flex-col items-center h-full">
            <h2 className="text-3xl font-bold mb-4 mt-4">agenUBAH!</h2>
            <p className="text-lg leading-relaxed font-inter mb-4">Peer-to-peer mentoring with individuals...</p>
            <div className="flex-grow"></div>
            <button className="p-4 w-full rounded bg-black text-white text-lg cursor-pointer font-inter">Learn More</button>
          </div>
        </div>
        <div className="relative bg-white text-black p-4 rounded-lg shadow-md w-96 h-[600px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 rounded-lg"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className="relative z-10 flex flex-col items-center h-full">
            <h2 className="text-3xl font-bold mb-4 mt-4">UBAHclass!</h2>
            <p className="text-lg leading-relaxed font-inter mb-4">A customized online course offering...</p>
            <div className="flex-grow"></div>
            <button className="p-4 w-full rounded bg-black text-white text-lg cursor-pointer font-inter">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
