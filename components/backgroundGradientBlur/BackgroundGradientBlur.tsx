import React from "react";
import { BgGradientBlueInterface } from "./interface";
import Image from "next/image";

const BackgroundGradientBlur = ({className}: BgGradientBlueInterface) => {
  return (
    <>
      <div className={`hidden md:flex rounded-full w-[150px] h-[150px] md:w-[500px] md:h-[500px]
      bg-primary sm:bg-primary-200 blur-[100px] sm:blur-[100px] -z-10 absolute ${className}`}></div>
    </>
  );
};

export default BackgroundGradientBlur;
