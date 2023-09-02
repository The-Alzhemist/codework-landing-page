import { Prompt } from '@next/font/google';
import React from 'react'

import { twMerge } from 'tailwind-merge';
import { ParagraphInterfaceProps } from './interface';
const fontPrompt = Prompt({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-prompt",
  });


const Paragraph = (props:ParagraphInterfaceProps) => {
  const style = twMerge(`${fontPrompt.variable} text-2xl font-prompt`, props.className)
  return (
      <p className={style}>
            {props.children}
      </p>
  )
}

export default Paragraph
