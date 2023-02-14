import { List } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleButtonClick = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <>
      <div className="grid bg-white sticky top-0 z-[99] grid-cols-2 md:px-[10%]">
        <div className="">
          <img
            className="w-[162px]"
            src="/images/ApexLogo_Name_PNG.png"
            alt=""
          />
        </div>
        <div className=" hidden lg:flex font-medium ml-[10%] items-center gap-14">
          <Link to="hero-img" smooth={true}>
            <button className="font-medium">Home</button>
          </Link>
          <Link to="services" smooth={true}>
            <button className="font-medium">Services</button>
          </Link>
          <Link to="company" smooth={true}>
            <button className="font-medium">Company</button>
          </Link>

          <a
            href="https://app.apexinformatics.io/"
            className="px-5 cursor-pointer py-2 font-semibold rounded bg-theme-green text-white"
          >
            Login
          </a>
        </div>
        <div className="flex lg:hidden justify-end items-center px-[10%]">
          <button onClick={handleButtonClick} className="">
            <List weight="bold" size={32} />
          </button>
        </div>
      </div>
      {showSideMenu && (
        <div className="fixed top-15 right-0 h-full w-64 bg-white flex flex-col items-center z-[100]">
          <Link to="hero-img" smooth={true}>
            <button
              onClick={() => setShowSideMenu(false)}
              className="font-medium py-5 px-5"
            >
              Home
            </button>
          </Link>
          <Link to="services" smooth={true}>
            <button
              onClick={() => setShowSideMenu(false)}
              className="font-medium py-5 px-5"
            >
              Services
            </button>
          </Link>
          <Link to="company" smooth={true}>
            <button
              onClick={() => setShowSideMenu(false)}
              className="font-medium py-5 px-5"
            >
              Company
            </button>
          </Link>
          <a
            href="https://app.apexinformatics.io/"
            onClick={() => setShowSideMenu(false)}
            className="px-5 cursor-pointer py-2 ml-5 mt-5 font-semibold rounded bg-theme-green text-white"
          >
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
