import React from "react";
import withFooter from "./withFooter";
import { FooterMenuItem, FooterProps } from "./interface";

const Footer = (props: FooterProps) => {
  const { fontPrompt, footerMenu } = props;

  return (
    <footer className="bg-secondary-1000 text-white">
      <div
        className={`${fontPrompt.variable} font-prompt relative md:py-[50px] max-w-[1440px] mx-auto p-5 lg:px-[50px] flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 `}
      >
        {/* left */}
        <div className="w-full lg:w-1/2">
          <div className="font-light">{footerMenu.footerLeft.companyName}</div>
          <div className="font-light">{footerMenu.footerLeft.companyAddress}</div>
          <div className="font-light">Email: {footerMenu.footerLeft.companyEmail}</div>
          <div className="mb-5 font-light"> Tel: {footerMenu.footerLeft.companyTel}</div>
          <div className="text-sm font-light">
            {footerMenu.footerLeft.companyCopyright}
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5">
          <div className="w-full flex">
            {footerMenu.footerRight
              .slice(0, 3)
              .map((menu: FooterMenuItem, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                    <div>{menu.pageMenu}</div>
                      {menu.hasSubMenu &&
                        menu.subMenu?.map((submenu: { name: string }, index: number) => (
                          <div className="text-sm font-light" key={`submenu-top-${index}`}>{submenu.name}</div>
                        ))}
                    </div>
                </React.Fragment>
              ))}
          </div>
          <div className="w-full flex">
          {footerMenu.footerRight
              .slice(3, 6)
              .map((menu: FooterMenuItem, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                    <div>{menu.pageMenu}</div>
                      {menu.hasSubMenu &&
                        menu.subMenu?.map((submenu: { name: string }, index: number) => (
                          <div className="text-sm" key={`submenu-top-${index}`}>{submenu.name}</div>
                        ))}
                    </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const WrappedComponent = withFooter(Footer);
export default WrappedComponent;
