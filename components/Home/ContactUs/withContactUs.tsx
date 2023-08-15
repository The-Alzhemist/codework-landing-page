import React from "react";
import { ContactUsTextInterface, contactUsProp } from "./interface";

const withContactUs = (Component: React.FC<contactUsProp>) => {
  const Hoc = () => {
    const contactUsSectionText: ContactUsTextInterface = {
      heading1: "Let’s make your idea come true!",
      heading2: "CONTACT US",
      buttonName: 'READ MORE ABOUT US'
    }

    const newProps: contactUsProp = {
        contactUsSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactUs;
