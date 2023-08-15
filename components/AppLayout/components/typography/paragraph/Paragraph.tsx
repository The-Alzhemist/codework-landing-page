import { Gloria_Hallelujah, Prompt } from '@next/font/google';
import React from 'react'
import { ParagraphInterfaceProps } from './interface';
const fontPrompt = Prompt({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-prompt",
  });


const Paragraph = (props:ParagraphInterfaceProps) => {
  return (
      <p className={`${fontPrompt.variable} text-2xl font-prompt ${props.className}`}>
            {props.children}
      </p>
  )
}

export default Paragraph
