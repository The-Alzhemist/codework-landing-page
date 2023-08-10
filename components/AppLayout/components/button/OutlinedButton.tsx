import { Prompt } from '@next/font/google';
import React, { ButtonHTMLAttributes } from 'react';

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const OutlinedButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className = `${props.className}  ${fontPrompt.variable} font-prompt py-2.5 px-5 mr-2 text-sm font-medium rounded-xl text-secondary  border-2 border-secondary cursor-pointer  hover:bg-primary-800 hover:text-primary-100 hover:border-primary-100 hover:shadow-md uppercase transition-all duration-100 east-out`;
  return (
    <button {...props} className={className}>
      <span>{props.children}</span>
    </button>
  );
};
