import { FooterMenu } from "@/components/AppLayout/components/Footer/interface";

export const footerMenu: FooterMenu = {
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
        path: '/'
      },
      {
        pageMenu: "About us",
        hasSubMenu: false,
        path: '/aboutus',
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
        hasSubMenu: false,
        path: '/services',
        subMenu: [
          {
            name: "UX/UI Design",
          },
        ],
      },
      {
        pageMenu: "Projects",
        hasSubMenu: false,
        path: '/projects',
      },
      {
        pageMenu: "Products",
        hasSubMenu: false,
        path: '/products',
      },
      {
        pageMenu: "Privacy policy",
        hasSubMenu: false,
        path: '/privacy-policy',
      },
    ],
  };