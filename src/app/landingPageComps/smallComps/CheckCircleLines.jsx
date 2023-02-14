import classNames from "classnames";
import { CheckCircle } from "phosphor-react";
import React from "react";

const CheckCircleLines = ({ text, isShowBorder }) => {
  return (
    <>
      <div
        className={classNames(
          "flex gap-4 pb-4 mb-6",
          !isShowBorder && "border-b"
        )}
      >
        <div className="">
          {/* <img
            className="w-[3rem]"
            src="/images/landing/check-circle.svg"
            alt=""
          /> */}
          <CheckCircle size={20} className="text-theme-green" weight="bold" />
        </div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default CheckCircleLines;
