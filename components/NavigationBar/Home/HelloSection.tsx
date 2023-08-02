import React from "react";
import { Prompt, Gloria_Hallelujah } from "@next/font/google";

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const fontGloriaHallelujah = Gloria_Hallelujah({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gloria-hallelujah",
});

const HelloSection = () => {
  return (
    <section
      className={`${fontPrompt.variable} font-prompt relative md:py-[50px] px-4 max-w-7xl mx-auto`}
    >
      <div className="rounded-full circle absolute top-0 left-0"></div>
      <div className="rounded-full circle absolute top-36 right-0"></div>

      <div className="flex w-full">

        {/*  left box */}
        <div className="z-30 w-[75%] max-w-[830px] min-h-[600px]  relative bg-white border-[3px] border-black rounded-[50px] px-4 py-6 md:p-10 flex flex-col justify-center drop-shadow-md">
          {/* Sub-title */}
          {/* <div className="text-sm mb-12 font-medium">CODEWORK-TECH</div> */}

          <h1 className="mb-20">
            <span className="flex text-lg md:text-5xl font-light mb-5">
              WE CAN MAKE YOUR
            </span>

            <span
              className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-7xl  `}
            >
              idea come
            </span>
            <span
              className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-7xl  text-[#C8D94C] md:ml-4 flex md:inline`}
            >
              TRUE
            </span>
          </h1>

          <p className="mb-8 max-w-[660px]">
            Lorem ipsum dolor sit amet consectetur. Aliquam consectetur sed
            elementum vitae ultrices nisi dis pellentesque lectus. Non eget
            semper quam sit enim venenatis hendrerit mauris quam.
          </p>

          <div className="max-w-7xl">
            <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-[#C8D94C]  rounded-xl border-2 border-gray-900 uppercase">
              Contact us
            </button>
            <a className="text-sm font-light border-b-[1px] border-black ml-4">
              SEE MORE ABOUT US
            </a>
          </div>
        </div>

        {/* right box  */}
        <div className="w-[25%]">
          {/* circle  */}
          <div className="z-40  absolute bottom-0 right-12 rounded-full w-[470px] h-[470px] bg-[#C8D94C] "></div>

          <div className="z-10 absolute top-0 right-56 rounded-full w-[300px] h-[300px] bg-[#A8B738]"></div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
