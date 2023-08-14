import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import Hyperlinks from "../../AppLayout/components/link/Hyperlinks";
import { Prompt } from "@next/font/google";
import Image from "next/image";



const OurService = () => {
  const jobRow = [
    {
      name: "UX/UI designer",
      description:
        "focusing on creating intuitive and visually appealing digital interfaces that enhance user experience and engagement",
    },
    {
      name: "Project solution consulting",
      description:
        "Collaborating closely with clients to identify their unique challenges and requirements",
    },
    {
      name: "Web development",
      description:
        "The process of building and maintaining websites, utilizing various programming languages and frameworks to create responsive and dynamic online platforms.",
    },
    {
      name: "Mobile application development",
      description:
        "focusing on creating intuitive and visually appealing digital interfaces that enhance user experience and engagement",
    },
    {
      name: "Digital marketing",
      description:
        "Guiding organizations through adopting digital technologies and strategies to optimize operations and stay competitive in the digital era, providing innovative solutions for enhanced efficiency and customer experience.",
    },
    {
      name: "Digital transformation consultant",
      description:
        "Employing various online channels and strategies, such as SEO, social media, email, and content marketing, to promote brands, attract targeted audiences, and drive conversions in the digital realm.",
    },
  ];

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
          <span className="font-normal mr-3 relative">OUR
        
          </span>
          <span className="font-normal bg-line relative">
            SERVICES
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
          { jobRow.slice(0,3).map((job: any, index: number) => (
            <React.Fragment key={`job-row-a-${index}`}>
              <div className="bg-primary-500 rounded-full sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]  sm:hover:w-[350px] sm:hover:h-[350px] lg:hover:w-[450px] lg:hover:h-[450px] flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl p-2">
                <div className="text-2xl md:text-xl sm:text-lg duration-1000 ease-out">
                  {job.name}
                </div>
                <p className="text-[0px] group-hover:text-[16px] duration-1000 ease-out p-2">
                  {job.description}
                </p>
              </div>
            </React.Fragment>
          )) }
        </div>

        <div className="flex justify-center gap-3  items-start flex-no duration-1000 ease-out ">
          { jobRow.slice(3,7).map((job: any, index: number) => (
            <React.Fragment key={`job-row-a-${index}`}>
              <div className="bg-primary-500 rounded-full sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px]  sm:hover:w-[350px] sm:hover:h-[350px] lg:hover:w-[450px] lg:hover:h-[450px] flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl p-2">
                <div className="text-2xl md:text-xl sm:text-lg duration-1000 ease-out ">
                  {job.name}
                </div>
                <p className="text-[0px] group-hover:text-[16px] duration-1000 ease-out p-2">
                  {job.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
        </div>

          {/* for mobile */}
        <div className="block sm:hidden">
        <div className="flex flex-col justify-center gap-1  items-start flex-no duration-1000 ease-out ">
          {/* { jobRow.map((job: any, index: number) => (
            <React.Fragment key={`job-row-mobile-${index}`}>
              <div className="bg-primary-500 rounded-lg w-full h-full   hover:w-full hover:h-full
              flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl p-2">
                <div className="text-base  sm:text-lg duration-1000 ease-out ">
                  {job.name}
                </div>
                <p className="duration-1000 ease-out p-2">
                  {job.description}
                </p>
              </div>
            </React.Fragment>
          ))} */}

              { jobRow.map((job: any, index: number) => (
            <React.Fragment  key={`job-row-mobile-${index}`}>
              <div className="bg-primary-500 rounded-3xl p-5 mb-5
              flex flex-col justify-center items-center text-center shadow-xl">
                <div className="text-lg mb-2 font-semibold text-secondary-900">
                  {job.name}
                </div>
                <p className="text-sm text-secondary-900">
                  {job.description}
                </p>
              </div>
            </React.Fragment>
          ))} 
        </div>
        </div>


            
        
      </div>
    </section>
  );
};

export default OurService;
