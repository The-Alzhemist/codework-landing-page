import { useSpring } from "@react-spring/web";
import React, { useState } from "react";
import { ExternalNavigationProps, NavigationProps } from "./interface";
import { menu } from "@/constants/navigationBarText";


const withNavigation = (Component: React.FC<NavigationProps>) => {
  const Hoc = (props: ExternalNavigationProps) => {
    const [IsSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
    const navStyle = useSpring({
      opacity: IsSideMenuOpen ? 1 : 0,
      right: IsSideMenuOpen ? 0 : -2000,
    });
    const hamburgerStyle1 = useSpring({
      y: IsSideMenuOpen ? 8 : 0,
      rotate: IsSideMenuOpen ? 225 : 0,
    });
    const hamburgerStyle2 = useSpring({
      opacity: IsSideMenuOpen ? 0 : 1,
    });
    const hamburgerStyle3 = useSpring({
      y: IsSideMenuOpen ? -8 : 0,
      rotate: IsSideMenuOpen ? -225 : 0,
    });

    const { fontPrompt } = props;

    const newProps: NavigationProps = {
      IsSideMenuOpen,
      setIsSideMenuOpen,
      navStyle,
      hamburgerStyle1,
      hamburgerStyle2,
      hamburgerStyle3,
      menu,
      fontPrompt,
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withNavigation;
