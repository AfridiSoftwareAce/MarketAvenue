// import React from 'react';
// import { Link } from 'react-router-dom';
// import products from '../products'; 


// // const products = [
// //     { id: 1, name: 'Product 1', price: 100, imageUrl: 'https://picsum.photos/200/300?random=1' },
// //     { id: 2, name: 'Product 2', price: 200, imageUrl: 'https://picsum.photos/200/300?random=2' },
// //     // Add more products as needed
// //   ];
  

// const ProductList = () => {
//   return (
//     <div>
//       <h1>Products</h1>
//       {products.map(product => (
//         <div key={product.id}>
//           <img src={product.imageUrl} alt={product.name} />
//           <h2>{product.name}</h2>
//           <p>Price: ${product.price}</p>
//           <Link to={`/product/${product.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products'; 

const ProductList = () => {
  return (
    <div className="container">
      <h1 className="center-align">Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col s12 m6 l4" key={product.id}>
            <div className="card">
              <div className="card-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="card-content">
                <span className="card-title">{product.name}</span>
                <p>Price: ${product.price}</p>
              </div>
              <div className="card-action">
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
