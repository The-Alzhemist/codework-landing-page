import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import { Gloria_Hallelujah, Prompt } from "@next/font/google";

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

const TeamCulture = () => {
  return (
    <>
      <section className={`${fontPrompt.variable} font-prompt relative max-w-7xl mx-auto py-[30px] md:py-[50px]`}>
        <BackgroundGradientBlur className="bottom-0 right-0" />
        {/* 1 */}
        <div className="flex justify-between items-center mb-20 z-20">
          <h2 className="text-left mb-5  ">
            <div className="mb-4">
              <span className="font-bold text-3xl md:text-5xl bg-line">
                CULTURE/TEAM
              </span>
            </div>

            <ul className="list-none border-2	p-5 rounded-lg min-w-[300px] border-[#A8B738]">
              <li>Knowledge sharing</li>
              <li>Flexibility</li>
              <li>Employee empowerment</li>
              <li>Relaxing and fun</li>
            </ul>
          </h2>

          <div>
            <img src="https://placehold.co/490x420" alt="" />
          </div>
        </div>

        {/* 2 */}
        <div className="text-right text-xl flex flex-col items-center mb-28">
          <div className="w-40 h-1 bg-[#687318] rounded-sm mb-7"></div>
          <p className="max-w-[600px] text-center">
            We grant our team the autonomy to work in ways that suit them best,
            and we create a free and open space for sharing ideas. We believe
            that when individuals feel empowered and inspired, the magic of
            creativity flourishes, leading us to greater heights together!
          </p>
        </div>

        {/* 3 */}
        <div className="text-xl flex flex-col items-center">
          <div className="md:min-w-[450px]">
            <div className="font-bold text-4xl  text-left">
              <span className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah bg-line`}>Good ideas</span>
            </div>
            <div className="font-normal text-3xl ml-3 text-center">
              often come along with
            </div>
            <div className="font-bold text-4xl  text-right">
              <span className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah bg-line`}>FUN!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCulture;
