import React from "react";
import withNavigation from "./withNavigation";
import Link from "next/link";
import Image from "next/image";
import { animated } from "@react-spring/web";
import { Button } from "../button/button";

const NavigationBar = ({  IsSideMenuOpen,
  setIsSideMenuOpen,
  navStyle,
  hamburgerStyle1,
  hamburgerStyle2,
  hamburgerStyle3}:any) => {
  return (
   <>
     <>
      <header className="fixed z-50 flex h-16 w-full items-center overflow-hidden bg-primary-50/30 backdrop-blur">
        <div className=" w-full h-full mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center text-2xl font-black text-primary-900">
            <div className="relative w-[170px] h-[15px] mr-[8px]"  >
             
               <Link href="/"> 
               <Image
                src="/codework-logo.png"
                alt="Picture of the author"
                sizes="1000px"
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
              </Link>
            </div>
           
          </div>

          {/* Burger for Sidemenu, only for mobile */}
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
          <div className="hidden items-end lg:flex">
            <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 hover:bg-custom-gradient font-medium">
              <Link href="/">Home</Link>
            </p>
            <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500  font-medium">
              <Link href="/aboutus">About us</Link>
            </p>
            <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 hover:bg-custom-gradient font-medium">
              <Link href="/projects">Projects</Link>
            </p>
            <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 hover:bg-custom-gradient font-medium">
              <Link href="/clients">Clients</Link>
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/CyberBonfire/next-tailwind-landing-page"
                )
              }
            >
              Contact Us
            </Button> 
          </div>
        </div>
      </header>

      {/* Sidemenu */}
      <animated.nav
        style={navStyle}
        className="fixed top-0 z-20 flex h-full flex-col bg-primary-50/30 p-6 text-lg text-primary-900 backdrop-blur w-full"
      >
        <ul className="mt-16 flex flex-col">
          <li>
          <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 font-medium">
              <Link href="/">Home</Link>
            </p>
          </li>
          <li>
          <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 font-medium">
              <Link href="/contact">About us</Link>
            </p>
          </li>
          <li>
          <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 font-medium">
              <Link href="/contact">Projects</Link>
            </p>
          </li>
          <li>
          <p className="flex cursor-pointer py-3 px-6 hover:text-primary-500 font-medium">
              <Link href="/contact">Clients</Link>
            </p>
          </li>
          <Button
              onClick={() =>
                window.open(
                  "https://github.com/CyberBonfire/next-tailwind-landing-page"
                )
              }
            >
              Contact Us
            </Button> 
        </ul>
      </animated.nav>

      {/* Margin */}
      <div className="relative h-24 w-full" />
    </>
   </>
  );
};

const WrappedComponent = withNavigation(NavigationBar);
export default WrappedComponent;
