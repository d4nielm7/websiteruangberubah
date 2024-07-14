import React from 'react';
import logoblack from '../../../assets/pic/smalllogoreverse.png';
import background from '../../../assets/pic/logo4.png';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-inter relative">
      <div className="w-full max-w-5xl p-10 bg-white shadow-md mt-24 mb-28 rounded-[25px] relative z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="relative z-20 p-10 mt-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
              <h1 className="text-5xl font-bold font-raleway">Sign up.</h1>
            </div>
            <button className="text-black text-2xl">&times;</button> {/* Close button */}
          </div>
          <form className="space-y-6 mt-4 mb-4">
            <div className="space-y-1">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="first-name" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300 focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Enter your First Name" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" id="last-name" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300  focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Enter your Last Name" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300  focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Enter your email" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300 focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Enter your password" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" id="confirm-password" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300 focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
