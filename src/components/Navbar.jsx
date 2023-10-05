import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [loggedin, setLoggedin] = useState(true);

  return (
    <>
      <header className="text-dark-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-xl">shobhit-shopper</span>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {loggedin ? (
              <>
                <Link to={'/'} className="mr-5 hover:text-gray-900">
                  Home page
                </Link>
                <Link to={'/about'} className="mr-5 hover:text-gray-900">
                  About Page
                </Link>
                <Link to={'/login'} className="mr-5 hover:text-gray-900">
                  Login Page
                </Link>
              </>
            ) : (
              <>
                <Link to={'/signup'} className="mr-5 hover:text-gray-900">
                  Signup Page
                </Link>
              </>
            )}
          </nav>

          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* Your logo or image code */}
          </a>

          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={() => navigate('/cart')}
          >
            Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          
        </div>
      </header>
    </>
  );
};

export default Navbar;
