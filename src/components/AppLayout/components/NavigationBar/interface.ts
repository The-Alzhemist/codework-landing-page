import { NextFontWithVariable } from "@next/font";
import { SpringValue } from "@react-spring/web";

export interface MenuItem {
  name: string;
  url: string;
}

export interface ExternalNavigationProps {
  fontPrompt: NextFontWithVariable; // You can replace this with the actual type of 'fontPrompt'
}

export interface NavigationProps extends ExternalNavigationProps {
  IsSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navStyle: { opacity: SpringValue<number>; right: SpringValue<number> };
  hamburgerStyle1: { rotate: SpringValue<number>; y: SpringValue<number> };
  hamburgerStyle2: { opacity: SpringValue<number> };
  hamburgerStyle3: { rotate: SpringValue<number>; y: SpringValue<number> };
  menu: MenuItem[];
}
