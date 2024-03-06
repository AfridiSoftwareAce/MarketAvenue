import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Calculate total quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
 
  return (
    <nav>
      <div className="av-wrapper grey darken-3">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
