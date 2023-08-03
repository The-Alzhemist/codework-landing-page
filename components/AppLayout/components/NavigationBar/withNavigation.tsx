import React from "react";

const withNavigation = (Component: React.FC) => {
  const Hoc = () => {

    return <Component  />;
  };

  return Hoc;
};
export default withNavigation;
