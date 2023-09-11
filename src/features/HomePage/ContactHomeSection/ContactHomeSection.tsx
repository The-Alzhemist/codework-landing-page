import React from "react";
import Image from "next/image";

import withContactUs from "./withContactUs";
import { ContactHomeSectionProp } from "./interface";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "@/components/typography/paragraph/Paragraph";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";


const ContactHomeSection = (props: ContactHomeSectionProp) => {
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
            <PrimaryButton className="min-w-[200px] py-3" pathName="/contact-us">{contactUsSectionText.buttonName}</PrimaryButton>
          </div>
        </h2>

        <div className="lg:w-2/4">
       
             <picture className="z-0 max-w-[490px] h-auto">
            <source
              srcSet="/home/contact-us/contact-us-section-cover-1x.webp"
              type="image/webp"
              media="(max-width: 639px)"
            />
            <source
              srcSet="/home/contact-us/contact-us-section-cover-3x.webp"
              type="image/webp"
              media="(min-width: 640px)"
            />
            <img
              src="/home/contact-us/contact-us-section-cover-3x.png"
              alt="codework contact us section cover image"
              title="codework contact us section cover image"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withContactUs(ContactHomeSection);
export default WrappedComponent;
