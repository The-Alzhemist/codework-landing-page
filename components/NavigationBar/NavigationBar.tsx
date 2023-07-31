import React from "react";

const NavigationBar = () => {
    // max-w-[1440px]
  return (
    <nav className="grid grid-cols-[30%_40%_30%] px-4  max-w-7xl mx-auto h-16 items-center ">
      <div>CODEWORK</div>

      <ul className=" hidden md:grid grid-cols-4 justify-center gap-2 justify-items-center items-center text-sm text-slate-800 ">
        <li className="bg-codework">About us</li>
        <li className="text-yellow">Our services</li>
        <li>Our project</li>
        <li>Members</li>
      </ul>

      <div className="hidden md:flex items-center justify-end">
        <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-md border-2 border-[#C8D94C] hover:bg-[#C8D94C]">Contact us</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
