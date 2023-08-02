import React from "react";
import { Prompt, Gloria_Hallelujah } from '@next/font/google'


const fontPrompt = Prompt({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-prompt'
})

const fontGloriaHallelujah = Gloria_Hallelujah({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-gloria-hallelujah'
})

const HelloSection = () => {
  return (
    // <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] mt-10 md:py-[50px]">
    //   <div className="flex flex-col justify-center items-start mb-4">
    //     {/* subtitle */}
    //     {/* <div className="font-bold uppercase text-sm mb-4">Lorem ipsum dolor sit amet</div> */}
    //     {/* title */}
    //     <h1 className="mb-5 text-3xl md:text-5xl font-bold">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing
    //     </h1>
    //     {/* content */}
    //     <p className="mb-6 opacity-75 max-w-[500px]">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit
    //       reprehenderit cumque expedita adipisci aliquid. Non, eaque! Quae,
    //       laborum deleniti.
    //     </p>
    //     <button className="py-2.5 px-5 mr-2 text-lg font-medium bg-[#C8D94C] text-gray-900 rounded-md bg-primary mb-4 md:mb-0 w-full md:w-[200px]">
    //       Contact Us
    //     </button>
    //   </div>
    //   <div className="grid justify-end">
    //     <img src="https://placehold.co/600x400" alt="" />
    //   </div>
    // </section>
    <section  className={`${fontPrompt.variable} font-prompt relative md:py-[50px]`}>
      <div className="rounded-full circle absolute top-0 left-0"></div>
      <div className="rounded-full circle absolute top-36 right-0"></div>
      <div className="max-w-[830px] min-h-[600px]  mx-auto relative bg-white border-[3px] border-black rounded-[50px] p-10 flex flex-col justify-center">
        {/* Sub-title */}
        <div className="text-sm mb-12 font-medium">CODEWORK-TECH</div>

        {/* Title */}
        <h1 className="mb-20">
          <span className="flex text-[45px]  font-light">WE CAN MAKE YOUR </span>

          <span className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-7xl ml-4`}>idea come</span>
          <span className={`${fontGloriaHallelujah.variable} font-gloriaHallelujah text-7xl text-[#C8D94C] ml-4`} >TRUE</span>
        </h1>

        <p className="mb-8 max-w-[660px]">Lorem ipsum dolor sit amet consectetur. Aliquam consectetur sed elementum vitae ultrices nisi dis pellentesque lectus. Non eget semper quam sit enim venenatis hendrerit mauris quam.</p>

        {/* Contact */}
        <div>
        <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-[#C8D94C]  rounded-xl border-2 border-gray-900 uppercase">Contact us</button>
        <a className="text-sm font-sm border-b-[2px] border-black">SEE MORE ABOUT US</a>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
