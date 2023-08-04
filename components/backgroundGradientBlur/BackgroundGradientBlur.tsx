import React from "react";
import { BgGradientBlueInterface } from "./interface";

const BackgroundGradientBlur = ({className}: BgGradientBlueInterface) => {
  return (
    <>
      <div className={`rounded-full w-40 h-40 md:w-[500px] md:h-[500px] bg-[#F9FFCD]  blur-[100px] z-0 absolute ${className}`}></div>
    </>
  );
};

export default BackgroundGradientBlur;
