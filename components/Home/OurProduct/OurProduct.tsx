import React from "react";
import Image from "next/image";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import Hyperlinks from "../../AppLayout/components/link/Hyperlinks";
import withOurProduct from "./withOurProduct";
import { OurProductProps } from "./interface";

const OurProduct = (props: OurProductProps) => {
  const { ourProductSectionText } = props;
  return (
    <section
      className={`relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px]`}
    >
      <BackgroundGradientBlur className="bottom-40 right-0" />
      <h2 className="flex justify-center text-3xl md:text-5xl relative mb-10">
        <div className="">
          <span className="font-normal mr-3 relative">
            {ourProductSectionText.heading1}
            <Image
              src="/home/our-product/our-product-sticker-2.png"
              width={0}
              height={0}
              layout="responsive"
              className="z-0 max-w-[45px] h-auto absolute left-[-30px] top-[-30px]"
              alt="simple but ambitious section cover"
            />
          </span>
          <span className="font-normal bg-line relative">
            {ourProductSectionText.heading2}
            <Image
              src="/home/our-product/our-product-sticker-1.png"
              width={0}
              height={0}
              layout="responsive"
              className="-z-10 max-w-[250px] h-auto absolute right-2 bottom-[-20px]"
              alt="simple but ambitious section cover"
            />
          </span>
        </div>
      </h2>

      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 z-20">

        
        <h3 className="text-left mb-4 lg:w-2/4">
          <div className="mb-10">
            <span className="font-normal bg-line mb-7 md:text-[32px]">
              {ourProductSectionText.productName}
            </span>
          </div>
          <Paragraph className="max-w-[670px] text-base md:text-2xl mb-5 md:mb-10">
          {ourProductSectionText.productDescription}
          </Paragraph>

          <Hyperlinks link="/aboutus">{ourProductSectionText.productLinkName}</Hyperlinks>
        </h3>

        <div className="lg:w-2/4 flex justify-end">
          <Image
            src="/home/our-product/our-product-cover.png"
            width={0}
            height={0}
            layout="responsive"
            className="max-w-[475px] h-auto"
            alt="simple but ambitious section cover"
          />
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withOurProduct(OurProduct);
export default WrappedComponent;
