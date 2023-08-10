import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import { Prompt } from "@next/font/google";
import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import Image from "next/image";
import { Button } from "../../AppLayout/components/button/Button";
// import { Button } from "../../AppLayout/components/button/button";

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const AboutUs = () => {
  return (
    <>
      <section
        className={`${fontPrompt.variable} font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px]`}
      >
        <BackgroundGradientBlur className="bottom-40 right-0" />
        <BackgroundGradientBlur className="bottom-0 left-0" />
        {/* 1 */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 z-20">
          <h2 className="text-left mb-5 text-3xl md:text-5xl uppercase lg:w-2/4">
            <div className="w-1 h-40 bg-[#687318] rounded-sm mb-4"></div>
            <div className="font-normal">Simple</div>
            <div>
              <span className="font-light text-4xl">But</span>
              <span className="font-normal bg-line ml-3">AMBITIOUS</span>
              <Image
              src="/home/aboutus/aboutus-section-sticker-1.png"
              width={0}
              height={0}
              layout="responsive" 
              className="max-w-[58px] h-auto absolute left-[370px]"
              alt="simple but ambitious section cover"
            />
            </div>
          </h2>

          <div className="lg:w-2/4 flex justify-end">
            <Image
              src="/simple-but-ambitious-cover.png"
              width={0}
              height={0}
              layout="responsive" 
              className="max-w-[490px] h-auto"
              alt="simple but ambitious section cover"
            />
          </div>
        </div>

        {/* 2 */}
        <div className="text-right text-xl flex flex-col items-end z-20 pr-[70px] relative mb-14">
          <div className="z-10 w-40 h-1 bg-[#687318] rounded-sm mb-7"></div>
          <Image
              src="/home/global/star.png"
              width={0}
              height={0}
              layout="responsive" 
              className="max-w-[200px] h-auto absolute right-0 top-10"
              alt="simple but ambitious section cover"
            />
          <Paragraph className="z-10 max-w-[600px] text-right">
            We are a group of people who take pride in consistently delivering
            awesome products that will exceed your expectations.
          </Paragraph>
         
        </div>

        {/* 3 */}
        <div className="text-right text-xl flex flex-col items-start z-20 mb-32 pl-[70px] relative">
      
        <div className="z-0 absolute top-[-70px] left-0 rounded-full w-[140px] h-[140px] bg-[#C8D94C]"></div>
       
          <div className="z-10 w-40 h-1 bg-[#687318] rounded-sm mb-7"></div>
          <Paragraph className=" z-10 max-w-[600px] text-left">
            Everyday, we take chances to learn, grow and overcome new challenges
            to be able to deliver top-notch software that’s better than you can
            imagine!
          </Paragraph>
       
        </div>

        <div className="flex justify-center mb-[150px]">
          <Button>READ MORE ABOUT US</Button>
        </div>

        {/* 4 */}
        {/* <div className="text-right text-xl flex flex-col items-center z-20 min-h-[500px] justify-center">
          <p className="max-w-[600px] text-center mb-8">
            It is our commitment to deliver nothing less than a seriously
          </p>
          <div className="font-normal text-4xl bg-line ml-3">
            mind-blowing product
          </div>
        </div> */}
      </section>
    </>
  );
};

export default AboutUs;
