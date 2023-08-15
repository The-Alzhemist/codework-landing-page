import React from "react";
import { OurProductProps, OurProductTextInterface } from "./interface";
import { ourProductSectionText } from "@/Constant/Home/our-prouct-text";

const withOurProduct = (Component: React.FC<OurProductProps>) => {
  const Hoc = () => {
  

    const newProps: OurProductProps = {
      ourProductSectionText,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurProduct;
