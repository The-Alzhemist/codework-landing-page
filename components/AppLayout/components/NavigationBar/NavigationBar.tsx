import React from "react";
import withNavigation from "./withNavigation";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  return (
    <section className="sticky top-0 z-50  nav-bg-style mb-10 backdrop-blur-[5px]">
      <nav className="flex flex-col lg:flex-row justify-start lg:justify-between p-7 lg:px-4 lg:py-0 max-w-7xl mx-auto h-screen lg:h-16 items-start lg:items-center ">
        <div className="mb-5 lg:mb-0 relative w-full lg:w-auto">
          <img src="/codework-logo.png" className="h-4 w-auto" alt="xx" />
           <div className="flex lg:hidden absolute top-0 right-0 text-2xl cursor-pointer"><GiHamburgerMenu/></div> 
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-end gap-x-10">
          <ul className="grid  grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-5 justify-start lg:justify-center gap-x-10 justify-items-center items-center text-xl lg:text-sm text-slate-800 font-bold w-full lg:w-auto mb-10 lg:mb-0">
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full">
              Home
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full">
              About us
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full">
              Services
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full">
              Projects
            </li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1 w-full">
              Clients
            </li>
          </ul>
          <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-lg border-2 border-black  bg-[#C8D94C] lg:bg-transparent hover:bg-[#C8D94C]">
            CONTACT US
          </button>
        </div>
      </nav>
    </section>
  );
};

const WrappedComponent = withNavigation(NavigationBar);
export default WrappedComponent;
