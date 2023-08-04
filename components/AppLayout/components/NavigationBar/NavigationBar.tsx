import React from "react";
import withNavigation from "./withNavigation";

const NavigationBar = () => {
  return (
      <nav className="grid grid-cols-[40%_60%] px-4  max-w-7xl mx-auto h-16 items-center ">
        <div>CODEWORK</div>

        <div className="hidden md:flex items-center justify-end gap-x-10">
          <ul className=" hidden md:grid grid-cols-5 justify-center gap-x-10 justify-items-center items-center text-sm text-slate-800 font-bold">
            <li className="cursor-pointer hover:bg-custom-gradient p-1">Home</li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1">About us</li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1">Services</li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1">Projects</li>
            <li className="cursor-pointer hover:bg-custom-gradient p-1">Clients</li>
          </ul>
          <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-lg border-2 border-black hover:bg-[#C8D94C]">
            CONTACT US
          </button>
        </div>
      </nav>
  
  );
};

const WrappedComponent = withNavigation(NavigationBar);
export default WrappedComponent;
