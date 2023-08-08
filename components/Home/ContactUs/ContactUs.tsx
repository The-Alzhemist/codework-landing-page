import { Prompt } from "@next/font/google";
import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Image from "next/image";
import Hyperlinks from "../../AppLayout/components/link/Hyperlinks";
import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import { Button } from "../../AppLayout/components/button/Button";


const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const ContactUs = () => {
  return (
    <section
      className={`${fontPrompt.variable} font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[150px]`}
    >
      <BackgroundGradientBlur className="bottom-40 right-0" />
      {/* 1 */}

      <div className="flex justify-between items-center mb-10 z-20">
        <h2 className="text-left mb-5  md:text-5xl lg:min-w-[550px]">
          <Paragraph className="max-w-[670px]">
            Let’s make your idea come true!
          </Paragraph>

          <div className="mb-10 flex justify-center">
            <span className="font-normal bg-line mb-3">CONTACT US</span>
          </div>

          <div className="flex justify-end">
            <Button>READ MORE ABOUT US</Button>
          </div>
        </h2>

        <div>
          <Image
            src="/contactus.png"
            width={588}
            height={492}
            className="max-w-[490px] h-auto"
            alt="simple but ambitious section cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
