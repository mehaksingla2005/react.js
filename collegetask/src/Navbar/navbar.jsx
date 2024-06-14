import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-between items-center p-4 relative">
            <div className="flex items-center">
                <p className="font-bebas font-bold text-2xl text-blue-900">
                    LOGO<span className="text-green-500">HERE</span>
                </p>
            </div>

            {/* Hamburger Icon */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6h16a2 2 0 110 4H4a2 2 0 110-4zm0 5h16a2 2 0 100-4H4a2 2 0 100 4zm0 5h16a2 2 0 110 4H4a2 2 0 110-4z"
                        />
                    </svg>
                </button>

                {/* Vertical Menu */}
                {isMenuOpen && (
                    <div className="absolute right-0 top-full bg-white shadow-lg rounded-lg mt-2 lg:hidden w-full">
                       <Link to="/Home" className="font-poppins text-gray-700 text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out active:bg-gray-200">Home</Link>
<Link to="/services" className="font-poppins text-gray-700 text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out active:bg-gray-200">Services</Link>
<Link to="/pricing" className="font-poppins text-gray-700 text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out active:bg-gray-200">Pricing</Link>
<Link to="/submitorder" className="font-poppins text-gray-700 text-lg py-2 px-4 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out active:bg-gray-200">Submit order</Link>
                    </div>
                )}
            </div>

            {/* Menu Links */}
            <div className="hidden lg:flex mt-4 lg:mt-0">
                <div className="flex justify-evenly space-x-8">
                <Link to="/" className="font-poppins font-normal text-xl text-gray-500 hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out cursor-pointer">
  Home
</Link>
<Link to="/services" className="font-poppins font-normal text-xl text-gray-500 hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out cursor-pointer">
  Services
</Link>
<Link to="/pricing" className="font-poppins font-normal text-xl text-gray-500 hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out cursor-pointer">
  Pricing
</Link>
<Link to="/submitorder" className="font-poppins font-normal text-xl text-gray-500 hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out cursor-pointer">
  Submit order
</Link>
                </div>
            </div>

            <div className="mt-4 lg:mt-0 lg:ml-4">
                <button className="border rounded-md bg-green-500 p-2">
                    <p className="font-poppins font-normal text-xl text-white">Try for Free</p>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
