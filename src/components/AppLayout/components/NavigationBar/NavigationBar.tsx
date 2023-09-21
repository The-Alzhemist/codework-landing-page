import React, { useEffect, useState } from "react";
import withNavigation from "./withNavigation";
import Link from "next/link";
import { animated } from "@react-spring/web";

import { OutlinedButton } from "../../../buttons/OutlinedButton";
import { MenuItem, NavigationProps } from "./interface";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const controls = useAnimation();
  
  useEffect(() => {
      controls.start({ y: "-100%" }); // Move sidebar up (Y: -100%)
  }, []);


  useEffect(() => {
    if (isOpen) {
      controls.start({ y: 0 }); // Move sidebar down (Y: 0%)
    } else {
      controls.start({ y: "-100%" }); // Move sidebar up (Y: -100%)
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`${fontPrompt.variable} font-prompt text-md fixed z-50 flex h-16 w-full items-center overflow-hidden bg-primary-50/30 bg-white`}
      >
        <div className="w-full h-full mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center  font-black text-primary-900">
            <div className="relative w-[170px] h-[15px]">
              <Link href="/">
                <picture>
                  <source srcSet="/codework-logo-1x.webp" type="image/webp" />
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

          {/* Only for PC */}
          {/* หน้าไหนเสร็จแล้วค่อยๆมาเปิดทีละปุ่ม */}
          <div className="hidden lg:flex items-center gap-x-5">
            <div
              className="cursor-pointer p-3 bg-slate-300 rounded"
              onClick={() => {
                toggleSidebar();
              }}
            >
              menu
            </div>
            <OutlinedButton className="" pathName="/contact-us">
              Contact Us
            </OutlinedButton>
          </div>
        </div>
      </header>

      <AnimatePresence>
        <motion.nav
          animate={controls}
          className={`top-0 h-full w-full z-50 fixed`}
        >
          <header className="bg-primary-500 h-auto p-10 grid grid-cols-2">
            <div
              className="flex justify-end font-semibold col-start-1 col-span-2"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <span className="bg-slate-50 w-12 h-12 p-3 rounded-full cursor-pointer flex justify-center items-center">
                X
              </span>
            </div>
            <motion.div className="flex flex-col gap-y-3">
              <div className=" cursor-pointer text-7xl font-bold flex gap-x-2 hover:text-secondary group">
                Home
                <span className="hidden group-hover:block">
                  <FaArrowLeftLong />
                </span>
              </div>
              <div className="cursor-pointer text-7xl font-bold flex gap-x-2 hover:text-secondary group">
                About Us
                <span className="hidden group-hover:block">
                  <FaArrowLeftLong />
                </span>
              </div>
              <div className="cursor-pointer text-7xl font-bold flex gap-x-2 hover:text-secondary group">
                Our Product
                <span className="hidden group-hover:block">
                  <FaArrowLeftLong />
                </span>
              </div>
              <div className="cursor-pointer text-7xl font-bold flex gap-x-2 hover:text-secondary group">
                Contact Us
                <span className="hidden group-hover:block">
                  <FaArrowLeftLong />
                </span>
              </div>
            </motion.div>
            <div className="flex flex-col items-end justify-end">
              <div className="text-lg">Social</div>
              <div className="text-2xl font-semibold">Facebook</div>
              <div className="text-2xl font-semibold mb-5">Instagram</div>

              <div className="text-lg">Phone</div>
              <div className="text-2xl font-semibold mb-5">
                (+66) 83 987 4997
              </div>

              <div className="text-lg">Email</div>
              <div className="text-2xl font-semibold">
                hello@codework-tech.com
              </div>
            </div>
          </header>
        </motion.nav>
      </AnimatePresence>

      {/* Margin */}
      <div className="relative h-16 sm:h-24 w-full" />
    </>
  );
};

const WrappedComponent = withNavigation(NavigationBar);
export default WrappedComponent;
