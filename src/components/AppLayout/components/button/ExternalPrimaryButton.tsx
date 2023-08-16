import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pathName: string;
}

export const ExternalPrimaryButton: React.FC<CustomButtonProps> = ({
  pathName,
  className,
  children,
}) => {
  const style = `${className} py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-primary hover:bg-primary-800 hover:text-primary-100 hover:border-primary-100 hover:shadow-md  cursor-pointer rounded-xl border-2 border-gray-900 uppercase transition-all duration-100 east-out lg:hover:scale-125`;

  return (

    // need to use https:// prefix for external link
    <a href={pathName} rel="nofollow" target="_blank">
      <button className={style}>
        <span>{children}</span>
      </button>
    </a>
  );
};
