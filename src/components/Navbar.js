import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mobmenu from "./animation/Mobmenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Mobmenu isOpen={isOpen} setIsOpen={setIsOpen}/>
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
            <Link to="/resumetemplate">Resume Templates</Link>
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden items-center px-3 py-2 rounded text-white hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
