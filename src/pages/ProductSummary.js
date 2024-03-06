import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const ProductSummary = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="container">
      <h1>Summary</h1>
      {cart.length > 0 ? (
        <>
          <ul className="collection">
            {cart.map((item, index) => (
              <li className="collection-item" key={index}>
                <div className="row">
                  <div className="col s8">
                    <h5 className="title">{item.name}</h5>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="col s4">
                    <p className="right-align">Total: ${(item.price * item.quantity)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="right-align"><strong>Grand Total: ${totalPrice}</strong></p>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to="/cart" className="btn waves-effect waves-light">
        Back to Cart
      </Link>
    </div>
  );
};

export default ProductSummary;
