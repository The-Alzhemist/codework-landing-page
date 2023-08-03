import React from "react";
import withNavigation from "./withNavigation";

const NavigationBar = () => {
  return (
    <nav className="grid grid-cols-[30%_70%] px-4  max-w-7xl mx-auto h-16 items-center ">
      <div>CODEWORK</div>

      <div className="hidden md:flex items-center justify-end gap-x-10">
        <ul className=" hidden md:grid grid-cols-4 justify-center gap-x-10 justify-items-center items-center text-sm text-slate-800 ">
          <li className="bg-codework">About us</li>
          <li className="text-yellow">services</li>
          <li>project</li>
          <li>Members</li>
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