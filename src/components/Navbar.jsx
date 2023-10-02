import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Navbar = () => {
    const navigate= useNavigate()
  return (<>
  <header className="text-dark-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<<<<<<< HEAD
   
      <span className="ml-3 text-xl">shobhit-shopper</span>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900">Home page</Link>
      <Link to={'/about'} className="mr-5 hover:text-gray-900">About Page</Link>
      <Link to={'/login'} className="mr-5 hover:text-gray-900">Login Page</Link>
      <Link to={'/signup'} className="mr-5 hover:text-gray-900">Signup Page</Link>
=======
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="https://the-bluecompany.org/admin/uploads/image/partner_shopit_logo.jpg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      {/* <img src="https://the-bluecompany.org/admin/uploads/image/partner_shopit_logo.jpg" alt="" /> */}
      <span className="ml-3 text-xl">shobhit-shopper</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900">Home page</Link>
      <Link to={'/about'} className="mr-5 hover:text-gray-900">About Page</Link>
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" 
    onClick={()=>navigate('/cart')}
    >Cart
<<<<<<< HEAD
      {/* <svg fill="none" stroke="currentColor"  strokeLinejoin="round" strokeLinecap="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}
=======
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
>>>>>>> 82d9aa069864a8024a2dd821586319ace964e4e0
    </button>
  </div>
</header>
  </>
  )
}

export default Navbar