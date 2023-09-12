import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { PDPAPopupAcceptProps, PDPAPopupProps } from "./interface";

const withPDPAPopup = (Component: React.FC<PDPAPopupProps>) => {
  const Hoc = (props: PDPAPopupAcceptProps) => {
    const {onAccept}  = props
    const [isOpen, setIsOpen] = useState(true);
    const [shouldRender, setShouldRender] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
        if (onAccept) {
            Cookies.set('consent', 'true', { expires: 365 }); // Expires in 365 days
            onAccept();
        }
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 3000); 
  
      return () => clearTimeout(timer);
    }, []);
    
    const newProps: any = {
        handleClose,
        isOpen,
        shouldRender
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withPDPAPopup;
