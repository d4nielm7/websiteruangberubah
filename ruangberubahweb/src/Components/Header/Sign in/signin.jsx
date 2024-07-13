import React from 'react';
import './signin.css';

const Signin = () => {
  return (
    <main className="form-container font-inter">
      <form className="form-signup">
        <h1 className="form-title">Sign up.</h1>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Enter your First Name" />
          <label className="form-label">First Name</label>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Enter your Last Name" />
          <label className="form-label">Last Name</label>
        </div>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Enter your email" />
          <label className="form-label">Email</label>
        </div>

        <div className="form-group">
          <input type="password" className="form-control" placeholder="Enter your Password" />
          <label className="form-label">Password</label>
        </div>

        <div className="form-group">
          <input type="password" className="form-control" placeholder="Confirm Password" />
          <label className="form-label">Confirm Password</label>
        </div>

        <button className="btn btn-primary" type="submit">Create Account</button>
      </form>
    </main>
  );
};

export default Signin;
