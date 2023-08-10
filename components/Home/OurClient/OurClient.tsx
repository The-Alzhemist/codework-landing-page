import { Prompt } from "@next/font/google";
import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Image from "next/image";

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const OurClient = () => {
  return (
    <section
      className={`${fontPrompt.variable} font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px] mb-[150px]`}
    >
      <BackgroundGradientBlur className="top-0 left-0" />
      {/* 1 */}
      <h2 className="flex justify-center text-3xl md:text-5xl mb-20 relative">
        <div className="mb-7">
          <span className="font-normal mr-3 relative">OUR</span>
          <span className="font-normal bg-line relative uppercase">
            Partners
            <Image
              src="/home/our-partner/our-partner-sticker-1.png"
              width={0}
              height={0}
              layout="responsive"
              className="-z-10 hidden sm:flex max-w-[54px] h-auto absolute right-[-30px] top-[-30px]"
              alt="simple but ambitious section cover"
            />
            <Image
              src="/home/our-partner/our-partner-sticker-2.png"
              width={0}
              height={0}
              layout="responsive"
              className="-z-10 hidden sm:flex max-w-[260px] h-auto absolute right-[10px] bottom-[-20px]"
              alt="simple but ambitious section cover"
            />
          </span>
        </div>
      </h2>

      <div className="flex justify-center gap-10">
        <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white rounded-full border-2 border-[#A8B738] flex justify-center items-center">
          <Image
            src="/semour.png"
            width={170}
            height={59}
            layout="responsive"
            className=" h-auto p-3"
            alt="simple but ambitious section cover"
          />
        </div>

        <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white rounded-full border-2 border-[#A8B738] flex justify-center items-center">
          <a>
            <Image
              src="/scgc.png"
              width={170}
              height={59}
              className=" h-auto p-3"
              alt="simple but ambitious section cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
