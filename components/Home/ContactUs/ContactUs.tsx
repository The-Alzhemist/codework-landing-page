import { Prompt } from "@next/font/google";
import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Image from "next/image";

import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "../../AppLayout/components/button/PrimaryButton";
import withContactUs from "./withContactUs";




const ContactUs = (props: any) => {
  const { contactUsSectionText } = props
  return (
    <section
      className={`relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[150px]`}
    >
      <BackgroundGradientBlur className="bottom-40 right-40" />
      {/* 1 */}

      <div className="flex gap-10 flex-col lg:flex-row justify-between items-center mb-10 z-20">
        <h2 className="text-left mb-5 text-3xl md:text-5xl lg:w-2/4">
          <Paragraph className="max-w-[670px] text-end pr-3 mb-2">
            {contactUsSectionText.heading1}
          </Paragraph>

          <div className="mb-14 flex justify-end relative">
            <span className="font-normal  bg-line mb-3"> {contactUsSectionText.heading2}
            <Image
              src="/home/contact-us/contact-us-sticker-1.png"
              width={0}
              height={0}
              layout="responsive"
              className="-z-10 hidden sm:flex max-w-[255px] h-auto absolute right-10 bottom-[-10px]"
              alt="simple but ambitious section cover"
            />
            </span>
          </div>

          <div className="flex justify-end relative">
          <Image
              src="/home/contact-us/contact-us-sticker-3.png"
              width={0}
              height={0}
              layout="responsive"
              className="z-0 max-w-[80px] h-auto absolute right-60 bottom-5"
              alt="simple but ambitious section cover"
            />
             <Image
              src="/home/contact-us/contact-us-sticker-2.png"
              width={0}
              height={0}
              layout="responsive"
              className="z-0 max-w-[30px] h-auto absolute right-[-10px] bottom-12"
              alt="simple but ambitious section cover"
            />
            <PrimaryButton pathName="/aboutus">{contactUsSectionText.buttonName}</PrimaryButton>
          </div>
        </h2>

        <div className="lg:w-2/4">
          <Image
            src="/home/contact-us/contact-us-section-cover.png"
            width={0}
            height={0}
            layout="responsive" 
            className="z-0 max-w-[490px] h-auto"
            alt="simple but ambitious section cover"
          />
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withContactUs(ContactUs);
export default WrappedComponent;
