import React, { ButtonHTMLAttributes } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className = `${props.className} py-2.5 px-5 mr-2 text-sm font-medium text-gray-900  rounded-xl border-2 border-gray-900 uppercase `;
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
