import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';


export const OutlinedButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className =  twMerge(`${props.className} py-2.5 px-5 mr-2 text-sm font-medium rounded-xl text-secondary  border-2 border-secondary cursor-pointer  hover:bg-primary-800 hover:text-primary-100 hover:border-primary-100 hover:shadow-md uppercase transition-all duration-100 east-out lg:hover:scale-125`);
  return (
    <button {...props} className={className}>
      <span>{props.children}</span>
    </button>
  );
};
