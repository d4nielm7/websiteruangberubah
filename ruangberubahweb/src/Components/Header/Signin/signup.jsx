import React from 'react';
import './Login.css';

const Signup = () => {
  return (
    <main className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating mb-3">
          <input className="form-control" placeholder="First Name" />
          <label>First Name</label>
        </div>

        <div className="form-floating mb-3">
          <input className="form-control" placeholder="Last Name" />
          <label>Last Name</label>
        </div>

        <div className="form-floating mb-3">
          <input type="email" className="form-control" placeholder="name@example.com" />
          <label>Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <label>Password</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" className="form-control" placeholder="Password Confirm" />
          <label>Password Confirm</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default Signup;
