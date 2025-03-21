import React from "react";
import { Search } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="IQAir Logo" className="h-8" />
          </a>

          {/* Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex space-x-6">
            {["Air Quality", "Air Monitors"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-green-500 hover:text-green-700 transition duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Search Bar and Sign-in */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                id="search"
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md px-3 py-1.5 pl-8 focus:ring-2 focus:ring-blue-300"
                aria-label="Search"
              />
              <Search className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
