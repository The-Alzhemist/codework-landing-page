import React, { useState } from "react";


const withNavigation = (Component: React.FC) => {
  const Hoc = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    

    return <Component  />;
  };

  return Hoc;
};
export default withNavigation;
