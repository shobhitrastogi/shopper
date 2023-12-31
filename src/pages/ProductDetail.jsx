import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ProductDetail = ({ addItemToCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // Initialize the history object
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  // Function to add an item to the cart and navigate to the cart page
  const addItemToCartAndNavigate = (product) => {
    addItemToCart(product);
    // Navigate to the cart page
    navigate('/cart');
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {product ? (
            <>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.images[2]}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">${product.price.toFixed(2)}</span>
                  <button
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => addItemToCartAndNavigate(product)}
                  >
                    Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>Loading product details...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;