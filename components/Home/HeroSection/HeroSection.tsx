import React from "react";
import { Prompt, Gloria_Hallelujah } from "@next/font/google";
import withHeroSection from "./withHeroSection";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import Hyperlinks from "../../AppLayout/components/link/Hyperlinks";
import Image from "next/image";
import { PrimaryButton } from "../../AppLayout/components/button/PrimaryButton";

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

const HeroSection = () => {
  return (
    <section
      className={`${fontPrompt.variable} font-prompt relative md:py-[50px] max-w-[1440px] mx-auto lg:px-[50px] pt-5 sm:pt-0`}
    >
      <BackgroundGradientBlur className="top-0 left-0" />
      <BackgroundGradientBlur className="top-0 right-0" />
      <BackgroundGradientBlur className="bottom-0 left-0" />
      <BackgroundGradientBlur className="bottom-0 right-0" />

      <div className="flex w-full">
        <div className="z-10 w-[100%] lg:w-[80%]  min-h-[600px]  relative bg-white border-[3px] border-black rounded-[50px] py-6 md:p-10 flex flex-col justify-center drop-shadow-md">
          <h1 className="mb-20 relative">
            <span className="flex text-lg md:text-5xl font-light mb-5 relative">
              WE CAN MAKE YOUR
              <Image
                src="/home/hero/hero-section-stciker-1.png"
                width={0}
                height={0}
                layout="responsive"
                className="hidden md:flex max-w-[100px] max-h-[100px] absolute md:top-[-70px] md:left-[470px]"
                alt="simple but ambitious section cover"
              />
            </span>

            <span
              className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-7xl  `}
            >
              idea come
            </span>
            <span
              className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-7xl  text-primary md:ml-4 flex md:inline relative`}
            >
              TRUE
              <Image
                src="/home/hero/hero-section-stciker-3.png"
                width={0}
                height={0}
                layout="responsive"
                className="hidden md:flex max-w-[200px] max-h-[100px] absolute md:left-[35px] "
                alt="simple but ambitious section cover"
              />
            </span>
          </h1>

          <Paragraph
            className={`mb-8 lg:max-w-[550px]  xl:max-w-[670px]  text-base`}
          >
            We grant our team the autonomy to work in ways that suit them best,
            and we create a free and open space for sharing ideas. We believe
            that when individuals feel empowered and inspired, the magic of
            creativity flourishes, leading us to greater heights together!
          </Paragraph>

          <div className="max-w-7xl">
            <PrimaryButton className="mr-2">Contact us</PrimaryButton>
            <Hyperlinks link="/aboutus">See more about us</Hyperlinks>
          </div>
        </div>

        {/* right box  */}
        <div className="hidden lg:block lg:w-[20%]">
          <Image
            src="/home/hero/hero-section-stciker-2.png"
            width={0}
            height={0}
            layout="responsive"
            className="z-10 hidden md:flex max-w-[140px] m absolute top-20 right-[16%] "
            alt="simple but ambitious section cover"
          />

          {/* circle  */}
          <div className="z-0 absolute top-0 right-[15%] rounded-full w-[300px] h-[300px] bg-primary-800"></div>

          <Image
            src="/hero-section-1.png"
            width={0}
            height={0}
            layout="responsive"
            className="hidden sm:flex md:max-w-[400px] lg:max-w-[480px] h-auto p-3 z-20 absolute bottom-[-20px] right-[2%]"
            alt="simple but ambitious section cover"
          />
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withHeroSection(HeroSection);
export default WrappedComponent;
