// App.js
import React, { useState } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route} from 'react-router-dom';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Blog from './pages/Blog';
<<<<<<< HEAD
import Login from './components/Login';
import Signup from './components/Signup';
=======
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0


const App = () => {
  // Initialize the cart items as an empty array in the App component's state
  const [cartItems, setCartItems] = useState([]);
<<<<<<< HEAD

  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
    
=======
  
  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
<<<<<<< HEAD
 
=======
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0
  };

  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route
<<<<<<< HEAD
          path="/login"
          element={<Login/>}
        />  <Route
          path="/signup"
          element={<Signup/>}
        />
        <Route
=======
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0
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
        <Route
          path="/about"
          element={<Blog />}
        />
        
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default App;
