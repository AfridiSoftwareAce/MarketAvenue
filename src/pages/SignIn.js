// src/pages/SignIn.js
import React, { useState } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="input-field">
          <input 
            id="email" 
            type="email" 
            className="validate" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input 
            id="password" 
            type="password" 
            className="validate" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn">Sign In</button>
        <div className="row">
        <div className="col s12 right-align">
          <Link to="/forget-password">Forgot your password?</Link>
        </div>
      </div>
      </form>
      <p>Dont have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
