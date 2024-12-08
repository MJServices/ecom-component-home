import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { PiSkypeLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="text-white bg-custom  body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white bg-custom  tracking-widest text-sm mb-3">
          Menu
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">New arrivals</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Best sellers</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Recently viewed</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Popular this week</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">All product</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold  text-white tracking-widest text-sm mb-3">
          Categories
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Crockery</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Furniture</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Homeware</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Plant pots</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Chairs</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Crockery</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
          Our company
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">About us</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Vacancies</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Contact us</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Privacy</a>
          </li>
          <li>
            <a className="text-white bg-custom  hover:text-gray-800">Returns policy</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">
          Join our mailing list 
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-60 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            
            <input
              type="email"
              id="footer-field"
              placeholder="your@email.com"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50  border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-0 mx-4 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black   bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 ">
            Sign up
          </button>
        </div>
        
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      
      <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
        Copyright 2022 Avion LTD
        
      </p>
      <span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a className="text-gray-500 text-2xl"> {/* Adjust the size as needed */}
        <FaLinkedin />
    </a>
    <a className="text-gray-500 text-2xl">
        <RiFacebookBoxFill />
    </a>
    <a className="text-gray-500 text-2xl">
        <FaInstagram />
    </a>
    <a className="text-gray-500 text-2xl">
        <PiSkypeLogoFill />
    </a>
    <a className="text-gray-500 text-2xl">
        <FaTwitter />
    </a>
    <a className="text-gray-500 text-2xl">
        <FaPinterest />
    </a>
</span>
          </div>
  </div>
</footer>

  );
};

export default Footer;
