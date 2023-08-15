import React from "react";
import { HeroSectionProps, HeroTextInterface } from "./interface";

const heroSectionText: HeroTextInterface = {
  heading1: "WE CAN MAKE YOUR",
  heading2: "idea come",
  heading3: "TRUE",
  description: "We grant our team the autonomy to work in ways that suit them best, and we create a free and open space for sharing ideas. We believe that when individuals feel empowered and inspired, the magic of creativity flourishes, leading us to greater heights together!",
  buttonName: "CONTACT US",
  linkName: "See more about us"
}


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
