
import React from "react";

const withFooter = (Component: React.FC) => {
  const Hoc = (props: any) => {

    const footerMenu =  {
        footer_left: {
            company_name: "xCodeWork Tech Co.,Ltd.",
            company_address: "3774 Sukhumvit road, South Bang Na, Bang Na, Bangkok 10260",
            company_email: "hello@codework-tech.com",
            company_tel: "(+66) 83 987 4997",
            company_copyright: "Ⓒ2023 CodeWork Tech Co.,Ltd. All rights reserved."
        },
        footer_right: [
            {
                pageMenu: 'Home',
                hasSubMenu: false
            },
            {
                pageMenu: 'About us',
                hasSubMenu: true,
                subMenu: [
                    {
                        name: 'Our story'
                    },
                    {
                        name: 'Culture'
                    },
                    {
                        name: 'Team'
                    }
                ]
            },
            {
                pageMenu: 'Services',
                hasSubMenu: true,
                subMenu: [
                    {
                        name: 'UX/UI Design'
                    },
                ]
            },
            {
                pageMenu: 'Projects',
                hasSubMenu: false
            },
            {
                pageMenu: 'Products',
            },
            {
                pageMenu: 'Privacy policy',
                hasSubMenu: false
            },

        ]    
    }
    const { fontPrompt } = props 

    const newProps: any = {
      footerMenu,
      fontPrompt
    };
    return <Component  {...newProps} />;
  };

  return Hoc;
};
export default withFooter;
