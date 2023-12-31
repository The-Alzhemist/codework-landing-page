import React from "react";
import { OurServiceProps } from "./interface";
import { ourServiceSectionText } from "@/constants/homePage/ourServiceText";
// import { ourServiceSectionText } from "@/constants/Home/our-service-text";

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
