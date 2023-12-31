// Cart.js
import React from 'react';

const Cart = ({ cartItems, removeItemFromCart }) => {
 const  handleclicker=()=>{
  
    alert("Your product add successfully ")
  }
  return (
    <div>
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
           
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={item.images[2]}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
     
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.title}</h1>
        <div className="flex mb-4">
            
         
        </div>
        <p className="leading-relaxed">{item.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          <div className="flex ml-6 items-center">
            
<button onClick={() => removeItemFromCart(index)}>Remove</button>
            <div className="relative">
              
              
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">{item.price}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "onClick={() => removeItemFromCart(index)}>Remove</button>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleclicker}> Add</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;