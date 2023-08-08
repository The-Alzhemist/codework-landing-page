import { Prompt } from "@next/font/google";
import { useSpring } from "@react-spring/web";
import React, { useState } from "react";



const withNavigation = (Component: React.FC) => {
  const Hoc = (props: any) => {
    const [IsSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
    const navStyle = useSpring({
      opacity: IsSideMenuOpen ? 1 : 0,
      right: IsSideMenuOpen ? 0 : -1024,
    });
    const hamburgerStyle2 = useSpring({
      opacity: IsSideMenuOpen ? 0 : 1,
    });
    const hamburgerStyle1 = useSpring({
      y: IsSideMenuOpen ? 8 : 0,
      rotate: IsSideMenuOpen ? 225 : 0,
    });
    const hamburgerStyle3 = useSpring({
      y: IsSideMenuOpen ? -8 : 0,
      rotate: IsSideMenuOpen ? -225 : 0,
    });
    const menu =  [
      {
        "name": "Home",
        "url": "/"
      },
      {
        "name": "About us",
        "url": "/aboutus"
      },
      {
        "name": "Projects",
        "url": "/projects"
      },
      {
        "name": "Clients",
        "url": "/clients"
      },
    ]

    const { font } = props 

    
    const newProps: any = {
      IsSideMenuOpen,
      setIsSideMenuOpen,
      navStyle,
      hamburgerStyle1,
      hamburgerStyle2,
      hamburgerStyle3,
      menu,
      font
    };
    return <Component  {...newProps} />;
  };

  return Hoc;
};
export default withNavigation;
