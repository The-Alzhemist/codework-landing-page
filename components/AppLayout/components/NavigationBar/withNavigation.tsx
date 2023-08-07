import React, { useState } from "react";


const withNavigation = (Component: React.FC) => {
  const Hoc = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const newProps: any = {
      isOpen,
      setIsOpen
    };
    return <Component  {...newProps} />;
  };

  return Hoc;
};
export default withNavigation;
