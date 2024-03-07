// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate(); 

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSignOut = () => {
    signOut();
    navigate('/signin'); 
  };

  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <Link to="/" className="brand-logo">AfridiStore</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/summary">Summary</Link></li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingBag} />
              {totalQuantity > 0 && <span className="badge">{totalQuantity}</span>}
            </Link>
          </li>
          {!isAuthenticated ? (
            <li><Link to="/signin">Sign In</Link></li>
          ) : (
            <li><button onClick={handleSignOut} className="btn red">Sign Out</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
