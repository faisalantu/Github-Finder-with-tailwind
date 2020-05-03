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

      <div className="block w-auto flex-grow justify-end md:justify-start flex lg:items-center">
        <div className="text-md my-3 md:my-0 pr-5 md:pr-0 font-medium text-white">
          <Link
            to="/"
            className="inline-block my-1 md:my-0 lg:mt-0 hover:text-green-300 mx-1 "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="inline-block my-1 md:my-0 lg:mt-0 hover:text-green-300 mx-1"
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
