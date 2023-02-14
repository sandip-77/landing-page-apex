import React from "react";

const ServiceCard = ({ img, label, textArr }) => {
  return (
    <>
      <div className="rounded-md shadow bg-white p-8">
        <div className="flex gap-4 items-center">
          <img src={img} alt="" />
          <p className="font-semibold text-[20px]">{label}</p>
        </div>
        <div className="mt-5 text-sm">
          {textArr.map((t, index) => {
            return (
              <div key={index} className="flex gap-2 pb-2 items-start">
                <div className=" mt-1.5">
                  <div className="h-2 w-2 bg-theme-green rounded-full"></div>
                </div>
                <p>{t}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
