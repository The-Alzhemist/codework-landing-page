import React  from "react";
import withNavigation from "./withNavigation";
import Link from "next/link";
import { animated } from "@react-spring/web";

import { OutlinedButton } from "../../../buttons/OutlinedButton";
import { MenuItem, NavigationProps } from "./interface";


const NavigationBar = ({
  IsSideMenuOpen,
  setIsSideMenuOpen,
  navStyle,
  hamburgerStyle1,
  hamburgerStyle2,
  hamburgerStyle3,
  menu,
  fontPrompt,
}: NavigationProps) => {
  return (
    <>
      <header
        className={`${fontPrompt.variable} font-prompt text-md fixed z-50 flex h-16 w-full items-center overflow-hidden bg-primary-50/30 bg-white`}
      >
        <div className=" w-full h-full mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center  font-black text-primary-900">
            <div className="relative w-[170px] h-[15px]">
              <Link href="/">
                <picture>
                  <source
                    srcSet="/codework-logo-1x.webp"
                    type="image/webp"
                  />
                  <img
                    src="/codework-logo-1x.png"
                    alt="codework logo"
                    title="codework logo"
                    loading="lazy"
                  />
                </picture>
              </Link>
            </div>
          </div>

          {/* Burger for Sidemenu, only for mobile */}
           {/* หน้าไหนเสร็จแล้วค่อยๆมาเปิดทีละปุ่ม */}
          <div className="z-20 flex items-end lg:hidden">
            <button
              className="ml-4 flex flex-col"
              onClick={() => {
                setIsSideMenuOpen(!IsSideMenuOpen);
              }}
            >
              <animated.span
                style={hamburgerStyle1}
                className="mb-1 h-1 w-6 rounded-full bg-slate-900"
              />
              <animated.span
                style={hamburgerStyle2}
                className="mb-1 h-1 w-6 rounded-full bg-slate-900"
              />
              <animated.span
                style={hamburgerStyle3}
                className="mb-1 h-1 w-6 rounded-full bg-slate-900"
              />
            </button>
          </div>

          {/* Only for PC */}
           {/* หน้าไหนเสร็จแล้วค่อยๆมาเปิดทีละปุ่ม */}
          <div className="hidden lg:flex items-center gap-x-5">
            {/* {menu?.map((menu: MenuItem, index: number) => (
              <React.Fragment key={`menu-${index}`}>
                <div
                  className={`flex cursor-pointer hover:text-secondary hover:bg-custom-gradient font-medium`}
                >
                  <Link className="py-1 px-3" href={menu.url}>
                    {menu.name}
                  </Link>
                </div>
              </React.Fragment>
            ))} */}

            <OutlinedButton className="" pathName="/contact-us">Contact Us</OutlinedButton>
          </div>
        </div>
      </header>

      {/* Sidemenu for tablet mobile */}
      {/* หน้าไหนเสร็จแล้วค่อยๆมาเปิดทีละปุ่ม */}
      <animated.nav
        style={navStyle}
        className="fixed top-0 z-30 flex h-full flex-col bg-primary-50/30 p-6 text-primary-900 bg-white w-full"
      >
        <ul className="mt-16 flex flex-col">
          {/* {menu?.map((menu: MenuItem, index: number) => (
            <React.Fragment key={`mobile-menu-${index}`}>
              <li className="border-b-[2px] border-dashed border-primary-700">
                <p className="flex cursor-pointer text-secondary font-medium text-2xl">
                  <Link className="py-3 w-full text-secondary" href={menu.url}>
                    {menu.name}
                  </Link>
                </p>
              </li>
            </React.Fragment>
          ))} */}

          <li><OutlinedButton className="mt-8 w-full max-w-md" pathName="/contact-us" >Contact Us</OutlinedButton></li>
     
        </ul>
      </animated.nav>

      {/* Margin */}
      <div className="relative h-16 sm:h-24 w-full" />
    </>
  );
};

const WrappedComponent = withNavigation(NavigationBar);
export default WrappedComponent;
