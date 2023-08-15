import React from "react";

const withHeroSection = (Component: React.FC) => {
  const Hoc = () => {
    const heroSectionText = {
      heading1: "WE CAN MAKE YOUR",
      heading2: "idea come",
      heading3: "TRUE",
      description: "We grant our team the autonomy to work in ways that suit them best, and we create a free and open space for sharing ideas. We believe that when individuals feel empowered and inspired, the magic of creativity flourishes, leading us to greater heights together!",
      buttonName: "CONTACT US",
      linkName: "See more about us"
    }

    const newProps: any = {
      heroSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withHeroSection;
