import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="mr-1">
          <i className=" fab fa-github"> </i>
        </h1>
        <span className="font-semibold text-xl tracking-tight">
          GitHub Users
        </span>
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full md:w-auto flex-grow lg:flex lg:items-center">
        <div className="text-md my-3 md:my-0 lg:flex-grow font-medium text-white">
          <Link
            to="/"
            className="block md:inline-block my-1 md:my-0 lg:mt-0 hover:text-green-300 mx-1 "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block my-1 md:my-0 lg:mt-0 hover:text-green-300 mx-1"
          >
            About
          </Link>
        </div>
      </div>
      <div className=' hidden md:inline-block '>
        <Search></Search>
      </div>
    </nav>
  );
};

export default Navbar;
