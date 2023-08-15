import React from "react";
import { OurServiceProps, OurServiceSectionTextInterface } from "./interface";
import { ourServiceSectionText } from "@/Constant/Home/our-service-test";

const withOurService = (Component: React.FC<OurServiceProps>) => {
  const Hoc = () => {
    const newProps: OurServiceProps = {
      ourServiceSectionText,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurService;
