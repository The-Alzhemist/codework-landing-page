import React from "react";
import { HeroSectionProps, HeroTextInterface } from "./interface";
import { heroSectionText } from "@/constants/home/hero-text";




const withHeroSection = (Component: React.FC<HeroSectionProps>) => {
  const Hoc = () => {
    const newProps: HeroSectionProps = {
      heroSectionText
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withHeroSection;