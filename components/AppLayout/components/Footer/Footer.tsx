import { Prompt } from "@next/font/google";
import React from "react";

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const Footer = () => {
  return (
    <footer>
      <div
        className={`${fontPrompt.variable} font-prompt relative md:py-[50px] max-w-[1440px] mx-auto p-5 lg:px-[50px] flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 bg-secondary-1000 text-white`}
      >
        {/* left */}
        <div className="w-full lg:w-1/2">
          <div>CodeWork Tech Co.,Ltd.</div>
          <div>3774 Sukhumvit road, South Bang Na, Bang Na, Bangkok 10260</div>
          <div>Email: hello@codework-tech.com</div>
          <div className="mb-5"> Tel: (+66) 83 987 4997</div>
          <div className="text-sm">Ⓒ2023 CodeWork Tech Co.,Ltd. All rights reserved.</div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5">
          <div className="w-full flex">
            <div className="w-1/3">
              <div className="font-semibold">Home</div>
            </div>
            <div className="w-1/3">
              <div className="font-semibold">About us</div>
              <div>Our story</div>
              <div>Culture</div>
              <div>Team</div>
            </div>
            <div className="w-1/3">
              <div className="font-semibold">Services</div>

              <div>Our story</div>
              <div>Culture</div>
              <div>Team</div>
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-1/3">
              {" "}
              <div className="font-semibold">Projects</div>
            </div>
            <div className="w-1/3">
              <div className="font-semibold">Products</div>
            </div>
            <div className="w-1/3">
              <div className="font-semibold">Privacy policy </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
