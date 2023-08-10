import React from "react";
import { BgGradientBlueInterface } from "./interface";
import Image from "next/image";

const BackgroundGradientBlur = ({className}: BgGradientBlueInterface) => {
  return (
    <>
      {/* <div className={`rounded-full w-[150px] h-[150px] md:w-[500px] md:h-[500px]
      bg-primary sm:bg-primary-200 blur-[10px] sm:blur-[100px]  -z-10 absolute ${className}`}></div> */}

   
            <Image
              src="/global/star.png"
              width={0}
              height={0}
              layout="responsive"
              className={`${className} -z-10 w-[150px] h-[150px] absolute blur-[100px]`}
              alt="simple but ambitious section cover"
            />
      

    </>
  );
};

export default BackgroundGradientBlur;
