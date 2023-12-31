import React from "react";
import { aboutUsProps, aboutUsTextInterface } from "./interface";
import { aboutUsSectionText } from "@/constants/homePage/aboutusText";


const withAboutUs = (Component: React.FC<aboutUsProps>) => {
  const Hoc = () => {
    

    const newProps: aboutUsProps = {
       aboutUsSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withAboutUs;
