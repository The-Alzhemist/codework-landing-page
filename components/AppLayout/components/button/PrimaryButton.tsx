import { Prompt } from '@next/font/google';
import React, { ButtonHTMLAttributes } from 'react';

const fontPrompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
});

export const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className = `${props.className}  ${fontPrompt.variable} font-prompt  py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-[#C8D94C]  rounded-xl border-2 border-gray-900 uppercase`;
  return (
    <button {...props} className={className}>
      <span>{props.children}</span>
    </button>
  );
};
