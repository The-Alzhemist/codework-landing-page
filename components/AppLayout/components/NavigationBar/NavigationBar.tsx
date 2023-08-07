import React, { useState } from "react";
import withNavigation from "./withNavigation";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = ({isOpen,
  setIsOpen}:any) => {
  return (
    <section className="07082023:1618 sticky top-0 z-50  lg:bg-inherit	 mb-10  lg:backdrop-blur-[5px]">
      <nav className={`flex flex-col lg:flex-row justify-start lg:justify-between p-7 lg:px-4 lg:py-0 max-w-7xl mx-auto  lg:h-16 items-start lg:items-center  ${isOpen ? 'bg-white' : ''}` }>
        <div className="mb-5 lg:mb-0 relative w-full lg:w-auto">
          <img src="/codework-logo.png" className="h-4 w-auto" alt="xx" />
           <div className="flex lg:hidden absolute top-0 right-0 text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
            {/* <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)}/> */}
            HH
            </div> 
        </div>

        {/* desktop  */}
        <div className={`hidden lg:flex flex-col lg:flex-row items-center justify-end gap-x-10 w-full transition-all ease-out`}>
          <ul className="grid  grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-5 justify-start lg:justify-center gap-x-10 justify-items-center items-center text-2xl lg:text-sm text-slate-800 font-bold w-full lg:w-auto mb-10 lg:mb-0">
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Home
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              About us
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Services
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Projects
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Clients
            </li>
          </ul>
          <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-lg border-2 border-black   lg:bg-transparent hover:bg-[#C8D94C]">
            CONTACT US
          </button>
        </div>

        {/* mobile */}
        <div className={`flex lg:hidden flex-col lg:flex-row items-center justify-end gap-x-10 w-full transition-all ease-out ${isOpen ? 'h-[500px]' : 'h-[-1000px]'}`}>
          <ul className="grid  grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-5 justify-start lg:justify-center gap-x-10 justify-items-center items-center text-2xl lg:text-sm text-slate-800 font-bold w-full lg:w-auto mb-10 lg:mb-0">
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Home
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              About us
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Services
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Projects
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full border-b-2 border-[#C8D94C] border-dashed lg:border-none">
              Clients
            </li>
          </ul>
          <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-lg border-2 border-black   lg:bg-transparent hover:bg-[#C8D94C]">
            CONTACT US
          </button>
        </div>
      </nav>
    </section>
  );
};

const WrappedComponent = withNavigation(NavigationBar);
export default WrappedComponent;
