import React from "react";

import Image from "next/image";
import withOurService from "./withOurService";
import { OurServiceProps, ProductSolution } from "./interface";
import BackgroundGradientBlur from "@/components/ford/BackgroundGradientBlur";
import Paragraph from "@/components/typography/paragraph/Paragraph";

const OurService = (props: OurServiceProps) => {
  const { ourServiceSectionText } = props;
  return (
    <section
      className={`relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px] mb-10`}
    >
      <BackgroundGradientBlur className="bottom-40 right-0" />
      <BackgroundGradientBlur className="bottom-40 left-0" />
      {/* 1 */}
      <h2 className="flex justify-center text-3xl md:text-5xl relative">
        <div className="mb-7">
          <Image
            src="/home/our-service/our-services-sticker-1.png"
            width={0}
            height={0}
            layout="responsive"
            className="z-0 max-w-[150px] sm:max-w-[250px] h-auto absolute left-[37%] top-[65%]"
            alt="simple but ambitious section cover"
          />
          <span className="font-normal mr-3 relative">
            {ourServiceSectionText.heading1}
          </span>
          <span className="font-normal bg-line relative">
            {ourServiceSectionText.heading2}
            <Image
              src="/global/star.png"
              width={0}
              height={0}
              layout="responsive"
              className="-z-10 hidden sm:flex max-w-[100px] h-auto absolute right-[-30px] top-[-30px]"
              alt="simple but ambitious section cover"
            />
          </span>
        </div>
      </h2>

      <div className="mx-auto my-5">
        {/* for desktop and tablet */}
        <div className="hidden sm:block">
          <div className="flex justify-center items-end gap-3 flex-no duration-1000 ease-out ">
            {ourServiceSectionText.productSolutionsList
              .slice(0, 3)
              .map((job: ProductSolution, index: number) => (
                <React.Fragment key={`job-row-a-${index}`}>
                  <div className="bg-primary-500 rounded-full sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]  sm:hover:w-[350px] sm:hover:h-[350px] lg:hover:w-[450px] lg:hover:h-[450px] flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl p-2">
                    <div className="text-2xl md:text-xl sm:text-lg duration-1000 ease-out">
                      {job.name}
                    </div>
                    <Paragraph className="text-[0px] group-hover:text-[16px] duration-1000 ease-out leading-5 mt-3 font-light mb-5">
                      {job.description}
                    </Paragraph>
                    {/* <Hyperlinks
                      className="text-xs text-[0px] group-hover:text-[16px]"
                      link="/aboutus"
                    >
                      See more
                    </Hyperlinks> */}
                  </div>
                </React.Fragment>
              ))}
          </div>

          <div className="flex justify-center gap-3  items-start flex-no duration-1000 ease-out ">
            {ourServiceSectionText.productSolutionsList
              .slice(3, 7)
              .map((product: ProductSolution, index: number) => (
                <React.Fragment key={`job-row-a-${index}`}>
                  <div className="bg-primary-500 rounded-full sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]  sm:hover:w-[350px] sm:hover:h-[350px] lg:hover:w-[450px] lg:hover:h-[450px] flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl p-2">
                    <div className="text-2xl md:text-xl sm:text-lg duration-1000 ease-out ">
                      {product.name}
                    </div>
                    <Paragraph className="text-[0px] group-hover:text-[16px] duration-1000 ease-out leading-5 mt-3 font-light mb-5">
                      {product.description}
                    </Paragraph>
                    {/* <Hyperlinks
                      className="text-xs text-[0px] group-hover:text-[16px] "
                      link="/aboutus"
                    >
                      See more
                    </Hyperlinks> */}
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>

        {/* for mobile */}
        <div className="block sm:hidden">
          <div className="flex flex-col justify-center gap-1  items-start flex-no duration-1000 ease-out ">
            {ourServiceSectionText.productSolutionsList.map(
              (product: ProductSolution, index: number) => (
                <React.Fragment key={`job-row-mobile-${index}`}>
                  <div
                    className="bg-primary-500 rounded-3xl p-5 mb-5
              flex flex-col justify-center items-center text-center shadow-xl"
                  >
                    <div className="text-lg mb-2 font-semibold text-secondary-1000">
                      {product.name}
                    </div>
                    <Paragraph className="text-sm text-secondary-900 mb-5">
                      {product.description}
                    </Paragraph>
                    {/* <Hyperlinks
                      className="text-xs"
                      link="/aboutus"
                    >
                      See more
                    </Hyperlinks> */}
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const WrappedComponent = withOurService(OurService);
export default WrappedComponent;
