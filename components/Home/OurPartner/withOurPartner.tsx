import React from "react";

const withOurPartner = (Component: React.FC) => {
  const Hoc = () => {
    const ourPartnerSectionText = {
      heading1: "OUR ",
      heading2: "PARTNERS",
      imagesList: [
        {pathName: '/semour.png'},
        {pathName: '/scgc.png'}
      ]
    }

    const newProps: any = {
    ourPartnerSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurPartner;
