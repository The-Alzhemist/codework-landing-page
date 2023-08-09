import React from "react";
import BackgroundGradientBlur from "../../backgroundGradientBlur/BackgroundGradientBlur";
import Paragraph from "../../AppLayout/components/typography/paragraph/Paragraph";
import Hyperlinks from "../../AppLayout/components/link/Hyperlinks";
import { Prompt } from "@next/font/google";

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

const OurService = () => {

    const jobRow1 = [
        {
            name: 'UX/UI designer',
            description: 'Collaborating closely with clients to identify their unique challenges and requirements'
        },
        {
            name: 'Project solution consulting',
            description: 'Collaborating closely with clients to identify their unique challenges and requirements'
        },
        {
            name: 'Web development',
            description: 'Collaborating closely with clients to identify their unique challenges and requirements'
        }
    ]

    const jobRow2 = [
        {
            name: 'Mobile application development',
            description: 'Collaborating closely with clients to identify their unique challenges and requirements'
        },
        {
            name: 'Digital marketing',
            description: 'Collaborating closely with clients to identify their unique challenges and requirements'
        },
        {
            name: 'Digital transformation consultant',
            description: 'Collaborating closely with clients to identify their unique challenges and requirements'
        }
    ]
  return (
    <section
      className={`${fontPrompt.variable} font-prompt relative max-w-[1440px] mx-auto py-[30px] md:py-[50px] lg:px-[50px]`}
    >
      <BackgroundGradientBlur className="bottom-40 right-0" />
      {/* 1 */}
      <h2 className="flex justify-center text-5xl">
        <span className="font-normal bg-line mb-7">OUR SERVICES</span>
      </h2>

      <div className="mx-auto h-auto">
        <div className="flex justify-center gap-3 flex-no duration-1000 ease-out ">
        {jobRow1.map((job:any, index:number) => (
            <React.Fragment key={`job-row-a-${index}`}>
                     <div className="bg-[#C8D94C] rounded-full w-[250px] h-[250px] hover:w-[450px] hover:h-[450px] flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl">
                  <div className="text-2xl  duration-1000 ease-out mb-3">{job.name}</div>
                  <p className="text-[0px] group-hover:text-[16px] duration-1000 ease-out p-2">
                  {job.description}
                  </p>
                </div>
            </React.Fragment>
                 
        ))}
        </div>

        <div className="flex justify-center gap-3 flex-no duration-1000 ease-out ">
        {jobRow2.map((job:any, index:number) => (
            <React.Fragment key={`job-row-a-${index}`}>
                     <div className="bg-[#C8D94C] rounded-full w-[250px] h-[250px] hover:w-[450px] hover:h-[450px] flex flex-col justify-center items-center text-center transition-all duration-1000 ease-out group m-3 shadow-xl">
                  <div className="text-2xl  duration-1000 ease-out mb-3">{job.name}</div>
                  <p className="text-[0px] group-hover:text-[16px] duration-1000 ease-out p-2">
                  {job.description}
                  </p>
                </div>
            </React.Fragment>
                 
        ))}
        </div>


        
      </div>
    </section>
  );
};

export default OurService;
