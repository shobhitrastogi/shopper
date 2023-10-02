import React, { useEffect, useState } from 'react';
import {Link,  useNavigate } from 'react-router-dom';

const ProductList = ({ addItemToCart }) => {
  const [data, setData] = useState([]);
  const api = 'https://dummyjson.com/products';

  // Initialize the history object
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to add an item to the cart and navigate to the cart page
  const addItemToCartAndNavigate = (product) => {
    addItemToCart(product);
    // Navigate to the cart page
    navigate('/cart');
  };

  return (
  
   

    <section className="text-gray-600 body-font">
      <div className="container px-3 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((product) => (
            <div className="lg:w-1/4 md:w-2/2 p-4 w-full " key={product.id}>
              <Link to={`/product/${product.id}`} className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={`Product ${product.id}`}
                  className="object-cover object-center w-full h-full block"
                  src={product.images[0]} // Use the first image as the src
                />
              </Link>
              <div className="mt-4">
                
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1">${product.price.toFixed(2)}</p>
                <div className="flex items-center flex-wrap">
                  <button
                    className="text-dark-500 inline-flex items-center md:mb-2 lg:mb-0"
                    onClick={() => addItemToCartAndNavigate(product)} // Add to cart and navigate
                    >
                    Buy Now
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <Link to={`/product/${product.id}`} className="text-dark-500 inline-flex items-center md:mb-2 lg:mb-0">
  View Detail 
  <svg
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="M12 5l7 7-7 7"></path>
  </svg>
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
          
  );
};

export default ProductList;
