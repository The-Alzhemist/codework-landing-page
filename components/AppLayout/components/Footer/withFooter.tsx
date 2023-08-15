import React from "react";
import { FooterMenu, FooterProps, footerExternalProps } from "./interface";


const withFooter = (Component: React.FC<FooterProps>) => {
  const Hoc = (props:footerExternalProps) => {
    const footerMenu: FooterMenu = {
      footerLeft: {
        companyName: "CodeWork Tech Co.,Ltd.",
        companyAddress:
          "3774 Sukhumvit road, South Bang Na, Bang Na, Bangkok 10260",
        companyEmail: "hello@codework-tech.com",
        companyTel: "(+66) 83 987 4997",
        companyCopyright: "Ⓒ2023 CodeWork Tech Co.,Ltd. All rights reserved.",
      },
      footerRight: [
        {
          pageMenu: "Home",
          hasSubMenu: false,
        },
        {
          pageMenu: "About us",
          hasSubMenu: true,
          subMenu: [
            {
              name: "Our story",
            },
            {
              name: "Culture",
            },
            {
              name: "Team",
            },
          ],
        },
        {
          pageMenu: "Services",
          hasSubMenu: true,
          subMenu: [
            {
              name: "UX/UI Design",
            },
          ],
        },
        {
          pageMenu: "Projects",
          hasSubMenu: false,
        },
        {
          pageMenu: "Products",
          hasSubMenu: false,
        },
        {
          pageMenu: "Privacy policy",
          hasSubMenu: false,
        },
      ],
    };
    const { fontPrompt } = props;

    const newProps: FooterProps = {
      footerMenu,
      fontPrompt,
    };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withFooter;
