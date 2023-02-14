import React from "react";
import CheckCircleLines from "./smallComps/CheckCircleLines";

const TheCompany = () => {
  return (
    <>
      <div id="company" className="grid lg:grid-cols-2 py-[4rem] px-[10%]">
        <div>
          <h2 className="text-[32px] font-semibold">The Apex Platform</h2>
          <div className="text-sm my-5">
            <CheckCircleLines
              text={
                "Works for all members of the supply chain - perfect for asset owners to organise data from asset design, build, maintenance,and decommissioning. Works seamlessly for all suppliers,including designers, contractors, manufacturers etc."
              }
            />
            <CheckCircleLines
              text={"The single source of information for assets."}
            />
            <CheckCircleLines
              text={
                "GIS based with powerful search makes its painless to find the information you need."
              }
            />
            <CheckCircleLines
              text={
                "Integrates with other platforms to push/pull data from other tools. Serves as the single source of truth for critical information (e.g. Asset, Project, Task data)."
              }
            />
            <CheckCircleLines isShowBorder text={"Compliant with ISO19650"} />
          </div>

          <div>
            <a
              href="https://app.apexinformatics.io/"
              className="px-5 cursor-pointer py-2 font-semibold text-[18px] rounded bg-theme-green text-white"
            >
              Login
            </a>
          </div>
        </div>

        <div className="ml-[5%] mt-10">
          <img src="/images/landing/mac2.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default TheCompany;
