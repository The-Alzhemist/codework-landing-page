import { Prompt } from "@next/font/google";
import React from "react";
import BackgroundGradientBlur from "../backgroundGradientBlur/BackgroundGradientBlur";
import Image from "next/image";

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const OurClient = () => {
  return (

    <section
    className={`${fontPrompt.variable} font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px]`}
  >
    <BackgroundGradientBlur className="top-0 left-0" />
    {/* 1 */}
    <h2 className="flex justify-center text-5xl mb-20">
      <span className="font-normal bg-line mb-7">OUR PARTNERS</span>
    </h2>

    <div className="flex justify-center gap-10">
        <div className="w-[200px] h-[200px] bg-white rounded-full border-2 border-[#A8B738] flex justify-center items-center">
        <Image
          src="/semour.png"
          width={170}
          height={59}
          className="max-w-[490px] h-auto"
          alt="simple but ambitious section cover"
        />
        </div>

        <div className="w-[200px] h-[200px] bg-white rounded-full border-2 border-[#A8B738] flex justify-center items-center">
          <a>
          <Image
          src="/scgc.png"
          width={170}
          height={59}
          className="max-w-[490px] h-auto"
          alt="simple but ambitious section cover"
        />
          </a>
      
        </div>
    </div>
  

  

  
  </section>
  );
};

export default OurClient;
