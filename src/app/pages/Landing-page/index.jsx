import React from "react";
import Footer from "../../landingPageComps/Footer";
import HeroImg from "../../landingPageComps/HeroImg";
import Navbar from "../../landingPageComps/Navbar";
import OurServices from "../../landingPageComps/OurServices";
import TheCompany from "../../landingPageComps/TheCompany";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <OurServices />
      <TheCompany />
      <Footer />
    </>
  );
};

export default LandingPage;
