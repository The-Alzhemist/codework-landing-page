import React from "react";
import Image from "next/image";
import withOurPartner from "./withOurPartner";
import { ourPartnerProps, ImageInfo } from "./interface";
import Link from "next/link";
import BackgroundGradientBlur from "@/components/BackgroundGradientBlur/BackgroundGradientBlur";


const OurPartner = (props: ourPartnerProps) => {
  const { ourPartnerSectionText } = props;
  return (
    <section
      className={`font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px] mb-[100px]`}
    >
      <BackgroundGradientBlur className="top-0 left-0" />
      {/* 1 */}
      <h2 className="flex justify-center text-3xl md:text-5xl mb-20 relative">
        <div className="mb-7">
          <span className="font-normal mr-3 relative">
            {ourPartnerSectionText.heading1}
          </span>
          <span className="font-normal bg-line relative uppercase">
            {ourPartnerSectionText.heading2}
            <Image
              src="/home/our-partner/our-partner-sticker-1.png"
              width={0}
              height={0}
              layout="responsive"
              className="-z-10 hidden sm:flex max-w-[54px] h-auto absolute right-[-30px] top-[-30px]"
              alt="simple but ambitious section cover"
            />
            <Image
              src="/home/our-partner/our-partner-sticker-2.png"
              width={0}
              height={0}
              layout="responsive"
              className="z-0 max-w-[260px] h-auto absolute right-[10px] bottom-[-20px]"
              alt="simple but ambitious section cover"
            />
          </span>
        </div>
      </h2>

      <div className="flex justify-center gap-10">
        {ourPartnerSectionText.imagesList.map((item: ImageInfo, index: number) => (
          <React.Fragment key={`our-partner-${index}`}>
            <a className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-white rounded-full border-2 border-primary-700 flex justify-center items-center transition-all ease-out duration-100 hover:shadow-lg" href={item.urlName} target="_blank" rel="noopener nofollow">
              <Image
                src={item.pathName}
                width={170}
                height={59}
                layout="responsive"
                className="h-auto p-3"
                alt="simple but ambitious section cover"
              />
            </a>
           
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const WrappedComponent = withOurPartner(OurPartner);
export default WrappedComponent;
