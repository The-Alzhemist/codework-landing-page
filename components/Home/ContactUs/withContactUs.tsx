import React from "react";

const withContactUs = (Component: React.FC) => {
  const Hoc = () => {
    const contactUsSectionText = {
      heading1: "Let’s make your idea come true!",
      heading2: "CONTACT US",
      buttonName: 'READ MORE ABOUT US'
    }

    const newProps: any = {
        contactUsSectionText
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withContactUs;
