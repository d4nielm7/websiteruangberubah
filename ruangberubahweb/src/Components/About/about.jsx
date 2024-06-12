import React from 'react';
import coffeeandtalk from '../../assets/pic/group1.jpeg'; 

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-black text-white h-screen space-y-8 md:space-y-0 md:space-x-8 -mt-24"> {/*adjust mt for resolution*/}
      {/* Left */}
      <div className="flex flex-col max-w-lg md:mr-8 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-raleway">
          Hi, <span style={{ color: '#7ed957' }}>UBAH</span>citizens!
        </h1>
        <p className="text-lg leading-relaxed font-inter">
          After a successful event and the impacts created by Coffee & Talk, we decided to transform into a bigger community. Formerly Coffee & Talk, we are proud to introduce RuangBerubah. This community-based business focuses on developing an interconnection between MSMEs, young soon-to-be professionals, and consumers to create an inclusive financial system in Indonesia. We aim to create an inclusive community that could be a bridge between MSMEs, young citizens, and consumers to connect, work, and sell their products/services to the public.
        </p>
        <button className="px-6 py-3 bg-[#7ed957] text-black font-semibold rounded font-inter">
          MARI BERUBAH!
        </button>
      </div>
      {/* Right */}
      <div className="md:w-1/2 lg:w-1/2">
        <img src={coffeeandtalk} alt="About" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default About;
