import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <main className="form-container">
      <form className="form-signup">
        <h1 className="form-title">Contact</h1>
        <h2 className="form-subtitle">Any Questions?</h2>

        <div className="form-group">
          <input className="form-control" placeholder="First Name" />
          <label className="form-label">Name</label>
        </div>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="name@example.com" />
          <label className="form-label">Email address</label>
        </div>
        
        <div className="form-group">
          <input className="form-control" placeholder="Number" />
          <label className="form-label">Number</label>
        </div>

        <div className="form-group">
          <input className="form-control" placeholder="Message" />
          <label className="form-label">Message</label>
        </div>



        <button className="btn btn-primary" type="submit">Sign Up</button>
      </form>
    </main>
  );
};

export default Contact;
