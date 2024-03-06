import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const goToSummary = () => {
    navigate('/summary');
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul className="collection with-header">
            {cart.map((product, index) => (
              <li className="collection-item" key={index}>
                <div className="row">
                  <div className="col s8">
                    <h5 className="title">{product.name}</h5>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                  <div className="col s4">
                    <button className="btn-small waves-effect waves-light" onClick={() => incrementQuantity(product.id)}>+</button>
                    <button className="btn-small waves-effect waves-light" onClick={() => decrementQuantity(product.id)}>-</button>
                    <button className="btn-small waves-effect waves-light red" onClick={() => removeFromCart(product.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn waves-effect waves-light" onClick={goToSummary}>
            View Summary
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
