import React from "react";
import { OurProductProps, OurProductTextInterface } from "./interface";

const withOurProduct = (Component: React.FC<OurProductProps>) => {
  const Hoc = () => {
    const ourProductSectionText: OurProductTextInterface = {
      heading1: "OUR",
      heading2: "PRODUCT",
      productName: "KHOTBOT",
      productDescription: "The ultimate assistant for bitcoin traders, making profitable trades in both UP & DOWN markets without the need to constantly monitor market prices.",
      productLinkName: "See more about us",
    };

    const newProps: OurProductProps = {
      ourProductSectionText,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withOurProduct;
