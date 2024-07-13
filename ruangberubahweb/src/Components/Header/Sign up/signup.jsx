import React from 'react';
import './signup.css';

const Signup = () => {
  
  return (
    <main className="form-container font-inter">
      <form className="form-login">
        <h1 className="form-title">Sign In.</h1>
        <h2 className="form-subtitle">Login now</h2>
        <p className="form-welcome">Hi, Welcome back 👋</p>

        <button className="btn btn-google">Login with Google</button>
        <p className="form-or">or Login with Email</p>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Enter your email" />
          <label className="form-label">Email</label>
        </div>

        <div className="form-group">
          <input type="password" className="form-control" placeholder="Enter your password" />
          <label className="form-label">Password</label>
        </div>

        <div className="form-group form-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="form-label-remember">Remember Me</label>
          <a href="#" className="form-forgot">Forgot Password?</a>
        </div>

        <button className="btn btn-primary" type="submit">Login</button>

        <p className="form-signup">
          Not registered yet? <a href="#" className="form-signup-link">Create an account</a>
        </p>
      </form>
    </main>
  );
};

export default Signup;
