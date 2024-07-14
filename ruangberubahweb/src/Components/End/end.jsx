import React from 'react';
import small_logo from '../../assets/pic/smalllogo.png';
import instagram from '../../assets/pic/icon/instagram.png';
import discord from '../../assets/pic/icon/discord.png';
import linkedin from '../../assets/pic/icon/linkedin.png';
import youtube from '../../assets/pic/icon/youtube.png';

const End = () => {
    return (
        <div className="flex justify-between items-center bg-black text-white py-4 px-16">
            <div className="flex items-center mt-11 mb-11">
                <img src={small_logo} alt="Logo" className="h-16 w-auto" />
            </div>

            <div className="flex items-center space-x-4">
            <div className="flex-grow flex justify-center">
                <h1 className="text-4xl font-bold font-raleway flex items-center">
                  <span style={{ color: 'white' }}>MARI</span>
                  <span style={{ color: '#7ed957' }}>#BERUBAH!</span>
                </h1>
            </div>
                <div className="border-l-2 border-white h-16 mx-4"></div>
                <a href="https://www.youtube.com" class="social-link">               
                  <img src={instagram} alt="Instagram" className="h-14 w-14" />
                </a>
                <a href="https://www.youtube.com" class="social-link">               
                  <img src={discord} alt="Discord" className="h-14 w-14" />
                </a>
                <a href="https://www.youtube.com" class="social-link">               
                  <img src={linkedin} alt="LinkedIn" className="h-14 w-14" />
                </a>
                <a href="https://www.youtube.com" class="social-link">               
                  <img src={youtube} alt="YouTube" className="h-14 w-14" />
                </a>
            </div>
        </div>
    );
}

export default End;
