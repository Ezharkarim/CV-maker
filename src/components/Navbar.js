import React, {useState} from "react";
import { Link } from "react-router-dom";
import Registration from "../popup_models/Registration";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CV Maker
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col items-center font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                CV Templates
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Resume Templates
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <div className="group inline-block relative">
                  <li className="py-2 pl-3 pr-4 items-center hover:text-blue-700 text-gray-900 rounded cursor-pointer inline-flex">
                    <span className=" mr">Dropdown</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </li>
                  <ul className="absolute hidden bg-gray-50 text-gray-700 pt-1 group-hover:block">
                    <li className="">
                      <Link className="rounded-t py-2 px-4 block whitespace-no-wrap hover:text-blue-700">
                        One
                      </Link>
                    </li>
                    <li className="">
                      <Link className=" md:dark:hover:text-blue-500 py-2 px-4 block whitespace-no-wrap hover:text-blue-700">
                        Two
                      </Link>
                    </li>
                    <li className="">
                      <Link className="rounded-b md:dark:hover:text-blue-500 px-4 block whitespace-no-wrap hover:text-blue-700">
                        Three
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                >
                  Register
                </button>
                <button className=" bg-slate-200 hover:bg-slate-300 text-gray bd- py-2 px-4 rounded-full">
                  Sign in
                </button>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <div className="group inline-block relative">
                  <li className="py-2 pl-3 pr-4 items-center hover:text-blue-700 text-gray-900 rounded cursor-pointer inline-flex">
                    <span className=" mr">EN</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </li>
                  <ul className="absolute hidden bg-gray-50 text-gray-700 pt-1 group-hover:block">
                    <li className="">
                      <Link className="rounded-t py-2 px-4 block whitespace-no-wrap hover:text-blue-700">
                        English UK
                      </Link>
                    </li>
                    <li className="">
                      <Link className=" md:dark:hover:text-blue-500 py-2 px-4 block whitespace-no-wrap hover:text-blue-700">
                        Two
                      </Link>
                    </li>
                    <li className="">
                      <Link className="rounded-b md:dark:hover:text-blue-500 px-4 block whitespace-no-wrap hover:text-blue-700">
                        Three
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Registration showModal={showModal} setShowModal={setShowModal}/>
      </div>
    </div>
  );
};

export default Navbar;
