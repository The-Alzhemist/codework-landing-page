import React from "react";
import { ourPartnerProps, ourPartnerTextInterface } from "./interface";

const withOurPartner = (Component: React.FC<ourPartnerProps>) => {
  const Hoc = () => {
    const ourPartnerSectionText: ourPartnerTextInterface = {
      heading1: "OUR ",
      heading2: "PARTNERS",
      imagesList: [
        {pathName: '/semour.png'},
        {pathName: '/scgc.png'}
      ]
    }

    const newProps: ourPartnerProps = {
    ourPartnerSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurPartner;
