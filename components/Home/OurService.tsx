import React from "react";
import Image from "next/image";
import { Prompt } from "@next/font/google";
import BackgroundGradientBlur from "../backgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "../AppLayout/components/typography/paragraph/Paragraph";
import Hyperlinks from "../AppLayout/components/link/Hyperlinks";


const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const OurService = () => {
  return (
    <section
    className={`${fontPrompt.variable} font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px]`}
  >
    <BackgroundGradientBlur className="bottom-40 right-0" />
    {/* 1 */}
    <h2 className="flex justify-center text-5xl">
      <span className="font-normal bg-line mb-7">OUR PRODUCT</span>
    </h2>
    <div className="flex justify-between items-center mb-10 z-20">
      <h3 className="text-left mb-5  md:text-5xl">
        <div className="mb-10"><span className="font-normal bg-line mb-7">KHOTBOT</span></div>
        <Paragraph className="max-w-[670px]">
        The ultimate assistant for bitcoin traders, making profitable trades in both UP & DOWN markets without the need to constantly monitor market prices.
        </Paragraph>

        <Hyperlinks link="/aboutus" >
              See more about us
        </Hyperlinks>
      </h3>

      <div>
        <Image
          src="/simple-but-ambitious-cover.png"
          width={490}
          height={413}
          className="max-w-[490px] h-auto"
          alt="simple but ambitious section cover"
        />
      </div>
    </div>

  

  
  </section>
  );
};

export default OurService;
