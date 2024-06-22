import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import Button from "../Component/Layout/button";

import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="fixed z-10 w-full">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">CafePulse</h1>
          </div>

          <nav className="flex-row items-center hidden gap-8 text-lg font-medium md:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="relative inline-block cursor-pointer group hover:text-brightColor"
            >
              Reviews
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Button title="Login" onClick={handleLoginClick} />
          </div>

          <div className="flex items-center md:hidden">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="transition-all cursor-pointer hover:text-brightColor"
            onClick={closeMenu}
          >
            Reviews
          </Link>

          <Button title="Login" onClick={handleLoginClick} />
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-8 rounded shadow-md bg-backgroundColor">
            <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-black-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className='border-2 px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition rounded-full'
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleCloseLogin}
                className='border-2 px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition rounded-full'
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
