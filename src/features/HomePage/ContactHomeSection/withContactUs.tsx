import React from "react";
import { ContactHomeSectionProp } from "./interface";
import { contactUsSectionText } from "@/constants/home/contactusText";


const withContactHomeSection = (Component: React.FC<ContactHomeSectionProp>) => {
  const Hoc = () => {
    const newProps: ContactHomeSectionProp = {
      contactUsSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactHomeSection;
