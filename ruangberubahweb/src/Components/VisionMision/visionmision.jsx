import React from 'react';
import backgroundImage from '../../assets/pic/pic01.png'; 

const VisionMission = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-screen flex items-center justify-center text-white relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-8">
        {/* Vision Section */}
        <div className="flex flex-col max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold font-raleway">OUR VISION</h1>
          <h2 className="text-2xl font-semibold text-[#7ed957] font-inter">
            Developing Indonesian’s perspective on MSMEs, finance, and personal skills
          </h2>
          <p className="text-lg leading-relaxed font-inter">
            Cultivate a robust and inclusive entrepreneurial ecosystem in Indonesia, where young entrepreneurs and MSMEs are empowered through community support, collaboration, and innovation, catalyzing sustainable economic growth and positive societal change.
          </p>
        </div>
        {/* Mission Section */}
        <div className="flex flex-col max-w-lg space-y-6 text-center md:text-left relative">
          <h1 className="text-5xl font-bold font-raleway">UBAH. MISSION</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-[#ffd700] font-inter">PERSONAL DEVELOPMENT</h2>
              <p className="text-lg leading-relaxed font-inter">
                Specializing in finance, entrepreneurship, and personal skills, RuangBerubah x Coffee & Talk offers tailored programs to enhance expertise in these areas. Our focus is on empowering individuals to excel in finance, contribute to MSMEs growth, and cultivate personal skills essential for success.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#ffd700] font-inter">MSMEs DEVELOPMENT</h2>
              <p className="text-lg leading-relaxed font-inter">
                Our primary objective is to nurture an inclusive and thriving market for MSMEs in Indonesia. We aim to facilitate their business growth by fostering collaboration with UBAHcitizens and enabling them to showcase and sell their products on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
