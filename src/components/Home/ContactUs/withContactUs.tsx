import React from "react";
import { contactUsProp } from "./interface";
import { contactUsSectionText } from "@/constants/home/contactus-text";


const withContactUs = (Component: React.FC<contactUsProp>) => {
  const Hoc = () => {
    const newProps: contactUsProp = {
      contactUsSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactUs;
