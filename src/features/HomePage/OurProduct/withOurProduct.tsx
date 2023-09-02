import React from "react";
import { OurProductProps, OurProductTextInterface } from "./interface";
import { ourProductSectionText } from "@/constants/home/ourProductText";
// import { ourProductSectionText } from "@/constants/Home/our-product-text";

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
