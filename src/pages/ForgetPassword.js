import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div className="container">
      <h2>Forget Password</h2>
      <p>Enter your email to reset your password.</p>
      <div className="input-field">
        <input type="email" required />
        <label htmlFor="email">Email</label>
      </div>
      <button className="btn">Submit</button>
      <p>
        Back to <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default ForgetPassword;
