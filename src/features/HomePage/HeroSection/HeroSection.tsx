import React from "react";
import { Gloria_Hallelujah } from "@next/font/google";
import withHeroSection from "./withHeroSection";


import Image from "next/image";

import { HeroSectionProps } from "./interface";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "@/components/typography/paragraph/Paragraph";

const fontGloriaHallelujah = Gloria_Hallelujah({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-gloria-hallelujah",
});

const HeroSection = (props: HeroSectionProps) => {
  const { heroSectionText } = props;
  return (
    <section
      className={`relative md:py-[50px] max-w-[1440px] mx-auto lg:px-[50px] pt-5 sm:pt-0 mb-9`}
    >
      <BackgroundGradientBlur className="top-[-200px] left-[-200px] " />
      <BackgroundGradientBlur className="top-[-200px] right-0" />
      <BackgroundGradientBlur className="bottom-[-200px] left-[-200px] " />
      <BackgroundGradientBlur className="bottom-[-200px] right-0 " />

      <div className="flex w-full">
        <div className="z-10 w-[100%] lg:w-[80%]  min-h-[600px]  relative bg-white border-[3px] border-black rounded-[50px] py-6 md:p-10 flex flex-col justify-center drop-shadow-md p-5 sm:p-0">
          <h1 className="mb-14 md:mb-20 relative">
            <span className="flex font-light mb-5 relative">
              <div className="text-lg md:text-5xl">
                {heroSectionText.heading1}
              </div>
              <Image
                src="/home/hero/hero-section-sticker-1.png"
                width={0}
                height={0}
                layout="responsive"
                className="top-[-60px] left-[150px] md:flex max-w-[100px] max-h-[100px] absolute md:top-[-70px] md:left-[470px]"
                alt="simple but ambitious section cover"
              />
            </span>

            <span
              className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah  text-5xl md:text-7xl `}
            >
              {heroSectionText.heading2}
            </span>
            <span
              className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-5xl md:text-7xl  text-primary md:ml-4 flex md:inline relative mt-5 md:mt-0 `}
            >
              {heroSectionText.heading3}
              <Image
                src="/home/hero/hero-section-sticker-3.png"
                width={0}
                height={0}
                layout="responsive"
                className="max-w-[150px] sm:max-w-[200px] max-h-[100px] absolute bottom-[-40px] sm:bottom-auto md:left-[35px] "
                alt="simple but ambitious section cover"
              />
            </span>
          </h1>

          <Paragraph
            className={`mb-8 lg:max-w-[550px]  xl:max-w-[670px]  text-base`}
          >
            {heroSectionText.description}
          </Paragraph>

          <div className="max-w-7xl">
            {/* <PrimaryButton pathName="/aboutus" className="mr-5">
              {heroSectionText.buttonName}
            </PrimaryButton> */}
            {/* <Hyperlinks link="/aboutus">{heroSectionText.linkName}</Hyperlinks> */}
            <button id="hero-section-btn">GTM Click</button>
          </div>
        </div>

        {/* right box  */}
        <div className="hidden lg:block lg:w-[20%]">
          <Image
            src="/home/hero/hero-section-sticker-2.png"
            width={0}
            height={0}
            layout="responsive"
            className="z-10 hidden md:flex max-w-[140px] m absolute top-20 right-[16%] "
            alt="simple but ambitious section cover"
          />

          {/* circle  */}
          <div className="z-0 absolute top-0 right-[15%] rounded-full w-[300px] h-[300px] bg-primary-800"></div>

          <picture className="hidden sm:flex md:max-w-[400px] lg:max-w-[480px] h-auto p-3 z-20 absolute bottom-[-20px] right-[2%]">
            <source
              srcSet="/home/hero/hero-section-cover-1x.webp"
              type="image/webp"
              media="(max-width: 639px)"
            />
            <source
              srcSet="/home/hero/hero-section-cover-3x.webp"
              type="image/webp"
              media="(min-width: 640px)"
            />
            <img
              src="/home/hero/hero-section-cover-3x.png"
              alt="codework-hero-section-cover image"
              title="codework-hero-section-cover image"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withHeroSection(HeroSection);
export default WrappedComponent;
