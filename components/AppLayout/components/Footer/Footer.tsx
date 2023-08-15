import React from "react";
import withFooter from "./withFooter";

const Footer = (props: any) => {
  const { fontPrompt, footerMenu } = props;

  console.log("xxx>>>", footerMenu);

  return (
    <footer className="bg-secondary-1000 text-white">
      <div
        className={`${fontPrompt.variable} font-prompt relative md:py-[50px] max-w-[1440px] mx-auto p-5 lg:px-[50px] flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 `}
      >
        {/* left */}
        <div className="w-full lg:w-1/2">
          <div className="font-light">{footerMenu.footer_left.company_name}</div>
          <div className="font-light">{footerMenu.footer_left.company_address}</div>
          <div className="font-light">Email: {footerMenu.footer_left.company_email}</div>
          <div className="mb-5 font-light"> Tel: {footerMenu.footer_left.company_tel}</div>
          <div className="text-sm font-light">
            {footerMenu.footer_left.company_copyright}
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-5">
          <div className="w-full flex">
            {footerMenu.footer_right
              .slice(0, 3)
              .map((menu: any, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                    <div>{menu.pageMenu}</div>
                      {menu.hasSubMenu &&
                        menu.subMenu.map((submenu: any, index: number) => (
                          <div className="text-sm font-light" key={`submenu-top-${index}`}>{submenu.name}</div>
                        ))}
                    </div>
                </React.Fragment>
              ))}
          </div>
          <div className="w-full flex">
          {footerMenu.footer_right
              .slice(3, 6)
              .map((menu: any, index: number) => (
                <React.Fragment key={`footer-menu-${index}`}>
                  <div className="w-1/3">
                    <div>{menu.pageMenu}</div>
                      {menu.hasSubMenu &&
                        menu.subMenu.map((submenu: any, index: number) => (
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
