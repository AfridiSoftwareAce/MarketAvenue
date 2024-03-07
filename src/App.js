import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import NavigationBar from './components/NavigationBar'; 
import ProductSummary from './pages/ProductSummary';
import Footer from './components/footer'
import { AuthProvider } from './context/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; 
import ForgetPassword from './pages/ForgetPassword'; 

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
      <NavigationBar /> 
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/summary" element={<ProductSummary />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
