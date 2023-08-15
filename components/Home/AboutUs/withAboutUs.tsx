import React from "react";

const withAboutUs = (Component: React.FC) => {
  const Hoc = () => {
    const aboutUsSectionText = {
      heading1: "SIMPLE",
      heading2: "BUT",
      heading3: "AMBITIOUS",
      descriptionRight:"We are a group of people who take pride in consistently delivering awesome products that will exceed your expectations.",
      descriptionLeft:"Everyday, we take chances to learn, grow and overcome new challenges to be able to deliver top-notch software that’s better than you can imagine!",
      buttonName: 'READ MORE ABOUT US'
    }

    const newProps: any = {
       aboutUsSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withAboutUs;
