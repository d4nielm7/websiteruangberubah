import React from 'react';
import pic00 from '../../assets/pic/pic00.png';

const Program = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white min-h-screen">
      <div className="flex items-center justify-center w-full md:w-1/3 mt-32">
        <img src={pic00} alt="Program Image" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-2/3 p-8">
        <h1 className="text-4xl font-bold font-raleway text-center mb-8 " style={{ color: '#7ed957' }}>
          OUR FIRST PROGRAM
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full p-4 bg-white text-black hover:bg-gray-200 transition-colors duration-200 text-center cursor-pointer">
            <h2 className="text-2xl font-bold">UBAHweb!</h2>
            <p className="text-lg leading-relaxed font-inter">One-stop solution for business partners...</p>
          </div>
          <div className="w-full p-4 bg-[#7ed957] text-black hover:bg-green-400 transition-colors duration-200 text-center cursor-pointer">
            <h2 className="text-2xl font-bold">agenUBAH!</h2>
            <p className="text-lg leading-relaxed font-inter">Peer-to-peer mentoring with individuals...</p>
          </div>
          <div className="w-full p-4 bg-white text-black hover:bg-gray-200 transition-colors duration-200 text-center cursor-pointer">
            <h2 className="text-2xl font-bold">UBAHclass!</h2>
            <p className="text-lg leading-relaxed font-inter">A customized online course offering...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
