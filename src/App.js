import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import NavigationBar from './components/NavigationBar'; 
import ProductSummary from './pages/ProductSummary';

function App() {
  return (
    <CartProvider>
      <Router>
      <NavigationBar /> 
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<ProductSummary />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
