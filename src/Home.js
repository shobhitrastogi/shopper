import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import Login from './components/Login';
import Signup from './components/Signup';

const Home = () => {
  // Initialize the cart items as an empty array in the App component's state
  const [cartItems, setCartItems] = useState([]);
  const [loggedin, setLoggedin] = useState(false);
  const navigate = useNavigate();

  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    navigate('/')
  
  };
  if(loggedin){
  navigate('/signup')
  }
  // Conditional route rendering based on the "loggedin" state
  return (
    <Routes>
      {loggedin ? (
        <>
          <Route path="/signup" element={<Signup />} />
          {/* Other routes for authenticated users */}
        </>
      ) : (
        <Route path="/*" element={<UnauthorizedRoutes />} />
      )}
    </Routes>
  );

  // Unauthorized routes for non-logged-in users
  function UnauthorizedRoutes() {
    return (
      <>
        <Navbar />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProductList addItemToCart={addItemToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail addItemToCart={addItemToCart} />}
        />
        <Route path="/about" element={<Blog />} />
        
        <Route path="/*" element={<Signup />} />
        </Routes>
        <Contact />
      </>
    );
  }
};

export default Home;
