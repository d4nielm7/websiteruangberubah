import React from 'react';
import { Link } from 'react-router-dom';
import logoblack from '../../../assets/pic/smalllogoreverse.png';
import google from '../../../assets/pic/icon/google.png';
import background from '../../../assets/pic/logo4.png';

const Signin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-inter relative">
      <div className="w-full max-w-5xl p-10 bg-white shadow-md mt-24 mb-28 rounded-[25px] relative z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="relative z-20 p-10 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
              <h1 className="text-5xl font-bold font-raleway">Sign In.</h1>
            </div>
            <Link to="/" className="text-black text-2xl">&times;</Link> {/* Close button */}
          </div>
          <div className="flex flex-col items-center mt-4">
            <p className="text-gray-500">Hi, Welcome back <span role="img" aria-label="wave">👋</span></p>
          </div>
          <button className="w-full px-4 py-2 flex items-center justify-center text-white bg-[#7ed957] rounded hover:bg-green-500">
            <span className="mr-2">Login with Google</span>
            <img src={google} alt="Google Logo" className="h-5 w-5" />
          </button>
          <p className="text-center text-gray-500">or Login with Email</p>
          <form className="space-y-6 mt-4 mb-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300 focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Enter your email" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded border-gray-300 bg-gray-300  focus:outline-none focus:ring focus:ring-[#7ed957]" placeholder="Enter your password" required />
              <span className="text-sm text-blue-500 cursor-pointer"> {/* This span can be styled to show/hide password */}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="h-4 w-4 text-green-500 focus:ring-[#7ed957] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember Me</label>
              </div>
              <a href="/forgot-password" className="text-sm text-[#7ed957] hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
              Login
            </button>
          </form>
          <p className="text-center text-gray-500">Not registered yet? <Link to="/signup" className="text-[#7ed957] hover:underline">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
