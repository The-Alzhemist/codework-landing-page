import React from "react";
import { ourPartnerProps, ourPartnerTextInterface } from "./interface";
import { ourPartnerSectionText } from "@/constants/home/ourPartnerText";
// import { ourPartnerSectionText } from "@/constants/Home/our-partner-text";

const withOurPartner = (Component: React.FC<ourPartnerProps>) => {
  const Hoc = () => {
    

    const newProps: ourPartnerProps = {
    ourPartnerSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurPartner;
