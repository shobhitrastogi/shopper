// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import Login from './components/Login';
import Signup from './components/Signup';


const App = () => {
  // Initialize the cart items as an empty array in the App component's state
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
    
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
 
  };

  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route
          path="/login"
          element={<Login/>}
        />  <Route
          path="/signup"
          element={<Signup/>}
        />
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
