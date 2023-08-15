import { NextFontWithVariable } from "@next/font";

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
  navStyle: any;
  hamburgerStyle1: any;
  hamburgerStyle2: any;
  hamburgerStyle3: any;
  menu: MenuItem[];
}
