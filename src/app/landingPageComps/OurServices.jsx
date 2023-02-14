import React from "react";
import ServiceCard from "./smallComps/ServiceCard";

const OurServices = () => {
  return (
    <div id="services" className="w-full bg-theme-light-green py-10">
      <p className="text-[32px] text-center font-semibold">Our Services</p>
      <p className="text-center">
        Our expertise span the entire data lifecycle: capturing, organising, and
        leveraging.
      </p>

      <div className="mt-8  grid lg:grid-cols-3 gap-5 px-[10%]">
        <ServiceCard
          label={"Organising data"}
          img={"/images/landing/org-data.svg"}
          textArr={[
            "Our APEX platform brings together data from all sources into a single, cutting edge tool that handles data for the entire asset lifecycle.",
            "Location is used at the primary variable with the asset beng the focus and individual projects/tasks cascading from it - incredible project, document, and data control.",
          ]}
        />
        <ServiceCard
          label={"Leveraging data"}
          img={"/images/landing/levData.svg"}
          textArr={[
            "Our in house data science and engineering team can help your organisation solve data challenges, either leveraging our Apex platform, or within your own technologystack.",
          ]}
        />
        <ServiceCard
          label={"Capturing data"}
          img={"/images/landing/capData.svg"}
          textArr={[
            "Reality capture (topgraphical surveys, utility surveys, 3D scans)",
            "Record digitisation - bring historic, paper-based records back to life",
            "Live integrations with other applications (site systems, IoT etc)",
          ]}
        />
      </div>
    </div>
  );
};

export default OurServices;
