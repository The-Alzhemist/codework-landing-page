import React from "react";

const withHeroSection = (Component: React.FC) => {
  const Hoc = () => {

    return <Component  />;
  };

  return Hoc;
};
export default withHeroSection;
