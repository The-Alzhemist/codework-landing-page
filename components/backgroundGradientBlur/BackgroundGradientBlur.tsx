import React from "react";
import { BgGradientBlueInterface } from "./interface";


const BackgroundGradientBlur = ({ className }: BgGradientBlueInterface) => {
  return (
    <>
      {/* none bug */}
      <div className={`hidden lg:flex rounded-full w-[150px] h-[150px] md:w-[500px] md:h-[500px]
    sm:bg-primary-200 blur-[100px] sm:blur-[100px] -z-10 absolute ${className}`}></div>
    </>
  );
};

export default BackgroundGradientBlur;
