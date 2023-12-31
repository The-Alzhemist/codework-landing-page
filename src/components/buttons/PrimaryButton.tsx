import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pathName: string;
  id?: string;
}


export const PrimaryButton: React.FC<CustomButtonProps> = ({pathName, className, children, id}) => {
  const style = twMerge(` py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-primary hover:bg-primary-800 hover:text-primary-100 hover:border-primary-100 hover:shadow-md  cursor-pointer rounded-xl border-2 border-gray-900 uppercase transition-all duration-100 east-out lg:hover:scale-125`, className);
  
  return (
    <Link href={pathName} id={id}>
      <button className={style}>
        <span>{children}</span>
      </button>
    </Link>
  );
};
