import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";

const AboutUs = () => {
  return (
    <>
      {/* <section className="max-w-7xl mx-auto py-[30px] md:py-[50px] px-4 ">
      <h2 className="text-left mb-5 text-3xl md:text-5xl uppercase">
        <div className="font-bold">Simple</div> 
        <div><span className="font-light text-4xl">But</span><span className="font-bold bg-line ml-3">AMBITIOUS</span></div> 
      </h2>
      <div className="border-2 rounded-md  border-slate-700 bg-[#C8D94C]  font-semibold text-2xl p-[30px] md:p-[100px] text-center">
       {`We are thrilled to announce the launch of our brand-new software house,
        and we can't wait to partner with you on your next project! At our
        state-of-the-art development hub, we've assembled a team of highly
        skilled and experienced senior developers and designers who are eager to
        bring your ideas to life.`} 
      </div>
    </section> */}

      <section className="relative max-w-7xl mx-auto py-[30px] md:py-[50px]">
      <BackgroundGradientBlur className="top-0 left-0 "/>
      <BackgroundGradientBlur className="bottom-0 right-0"/>
        {/* 1 */}
        <div className="flex justify-between items-center mb-10 z-20">
          <h2 className="text-left mb-5 text-3xl md:text-5xl uppercase">
            <div className="w-1 h-40 bg-[#687318] rounded-sm mb-4"></div>
            <div className="font-bold">Simple</div>
            <div>
              <span className="font-light text-4xl">But</span>
              <span className="font-bold bg-line ml-3">AMBITIOUS</span>
            </div>
          </h2>

          <div>
            <img src="https://placehold.co/490x420" alt="" />
          </div>
        </div>


        {/* 2 */}
        <div className="text-right text-xl flex flex-col items-end z-20">
        <div className="w-40 h-1 bg-[#687318] rounded-sm mb-7"></div>
          <p className="max-w-[600px] text-right">        We are a group of people who take pride in consistently delivering awesome products that will exceed your expectations. </p>
        </div>

        {/* 3 */}
        <div className="text-right text-xl flex flex-col items-start z-20 mb-32">
        <div className="w-40 h-1 bg-[#687318] rounded-sm mb-7"></div>
          <p className="max-w-[600px] text-left">Everyday, we take chances to learn, grow and overcome new challenges to be able to deliver top-notch software that’s better than you can imagine!  </p>
        </div>


        {/* 4 */}
        <div className="text-right text-xl flex flex-col items-center z-20">
          <p className="max-w-[600px] text-center">It is our commitment to deliver nothing less than a seriously</p>
          <div className="font-normal text-4xl bg-line ml-3">mind-blowing product</div>
        </div>



      </section>
    </>
  );
};

export default AboutUs;
