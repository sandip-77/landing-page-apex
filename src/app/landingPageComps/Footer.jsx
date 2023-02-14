import {
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="bg-[#323132] text-[#D3D6D8] grid md:grid-cols-3 gap-6 px-[10%] py-[5rem]">
        <div>
          <img src="/images/landing/A-logo.svg" alt="" />
          <p className="mt-3 ">
            Apex Informatics are experts asset driven built +
            <br />
            natural environment data.
          </p>
        </div>

        <div className="md:mx-auto">
          <p className="text-white font-bold">Useful links</p>
          <div className="mt-5 grid gap-1">
            <Link to="hero-img" smooth={true}>
              <button className="font-medium">Home</button>
            </Link>
            <Link to="services" smooth={true}>
              <button className="font-medium">Services</button>
            </Link>
            <Link to="company" smooth={true}>
              <button className="font-medium">Company</button>
            </Link>
            {/* <p>Home</p>
            <p>Services</p>
            <p>Company</p> */}
          </div>
        </div>

        <div className="flex gap-5 items-start md:mx-auto">
          <div className="bg-[#D5E2E4] bg-opacity-10 p-2 rounded-full">
            <GoogleLogo size={24} weight="bold" />
          </div>
          <div className="bg-[#D5E2E4] bg-opacity-10 p-2 rounded-full">
            <TwitterLogo size={24} weight="bold" />
          </div>
          <div className="bg-[#D5E2E4] bg-opacity-10 p-2 rounded-full">
            <InstagramLogo size={24} weight="bold" />
          </div>
          <div className="bg-[#D5E2E4] bg-opacity-10 p-2 rounded-full">
            <LinkedinLogo size={24} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
