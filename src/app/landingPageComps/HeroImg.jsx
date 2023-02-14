import { ArrowRight } from "phosphor-react";
import React from "react";

import StaticMapForLanding from "./smallComps/StaticMapForLanding";
import VideoBG from "./smallComps/VideoBG";

const HeroImg = () => {
  return (
    <>
      <div id="hero-img" className="md:h-[110vh] h-[100vh] relative">
        {/* <StaticMapForLanding /> */}
        <VideoBG />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="absolute text-white md:top-0 top-12 md:h-full w-full flex flex-col justify-center items-center">
          <p className="font-bold md:text-[40px]  pb-2  text-2xl text-center md:text-left">
            Leading the industry’s data revolution
          </p>
          <p className="md:text-[20px]text-sm text-center md:text-start font-medium">
            Built for - Asset owners, Designers, Contractors, and Manufacturers
          </p>
          <div className="flex mt-10 gap-5 justify-between">
            <a
              href="https://app.apexinformatics.io/"
              className="bg-white text-black cursor-pointer font-medium md:px-14 px-6 py-3 rounded-md"
            >
              Login
            </a>
            <button className="border border-white text-white flex items-center gap-3 font-medium px-8 py-3 rounded-md">
              Get a free demo <ArrowRight className="" weight="bold" />
            </button>
          </div>

          <div className="mt-10 hidden  z-[2] md:flex justify-center items-center">
            <img className="w-[80%]" src="/images/landing/mac1.svg" alt="" />
          </div>

          <div className="w-2/3 z-[2] hidden font-semibold text-center md:flex flex-col text-black">
            <p>
              Apex Informatics are experts asset driven built + natural
              environment data. Years of experience combined with cutting edge
              technology we are leading the industry’s data revolution.
            </p>
            <br />

            <p>
              Managing the entire supply chain from asset owners, designers,
              contractors, and manufacturers maximise their efficiency by
              leveraging asset-based data.
            </p>
          </div>
        </div>

        {/* For mobile screen */}
        <div className=" absolute  bottom-0 w-full h-4/5 md:hidden left-1/2 -translate-x-1/2 z-[2] flex justify-center items-center">
          <img className="w-[80%]" src="/images/landing/mac1.svg" alt="" />
        </div>

        <div className="px-[10%] z-[2] text-sm absolute md:hidden  bottom-0 w-full h-[27%] left-1/2 -translate-x-1/2 font-semibold  text-center flex flex-col text-black">
          <p className="text-sm">
            Apex Informatics are experts asset driven built + natural
            environment data. Years of experience combined with cutting edge
            technology we are leading the industry’s data revolution.
          </p>
          <br />

          <p>
            Managing the entire supply chain from asset owners, designers,
            contractors, and manufacturers maximise their efficiency by
            leveraging asset-based data.
          </p>
        </div>
        {/* end For mobile screen */}

        <div className="absolute  bottom-0 w-full h-2/5 bg-white"></div>
      </div>
    </>
  );
};

export default HeroImg;
