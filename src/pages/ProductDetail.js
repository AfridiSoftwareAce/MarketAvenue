import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import products from '../products'; 

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    navigate('/cart');
  };

  return (
    <div className="container">
      <div className="card horizontal">
        <div className="card-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h2 className="header">{product.name}</h2>
            <p><b>Price:</b> ${product.price}</p>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <Link to="/" className="btn-flat">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
