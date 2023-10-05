import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <>
      <nav className=" bg-[#51E2C2] w-full h-14 flex items-center justify-between px-4">
        <Link className="flex" to="/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className=" text-2xl font-semibold whitespace-nowrap text-white">
            CV Maker
          </span>
        </Link>
        <ul className="lg:flex hidden text-white">
          <li className="mx-[10px] font-semibold cursor-pointer">
            <Link to="/cvtemplates">CV Templates</Link>
          </li>
          <li className="mx-[10px] font-semibold cursor-pointer">
            Resume Templates
          </li>
          <li className="mx-[10px] font-semibold cursor-pointer">
            Career Blog
          </li>
          <li className="mx-[10px] font-semibold cursor-pointer">EN</li>
        </ul>
        <div className="flex">
          <div className="md:block hidden ml-2">
            <button className="border-slate-50 border-2 p-[4px] px-4 rounded-3xl text-white font-semibold mx-[10px] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300">
              Register
            </button>
            <button className="border-slate-50 border-2 p-[4px] px-4 rounded-3xl text-white font-semibold mx-[5px] transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110 duration-300">
              Sign in
            </button>
          </div>
          <div className="block lg:hidden hover:rounded-xl">
            <svg
              className="w-8 h-8 "
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
