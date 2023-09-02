import Link from 'next/link'
import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { HyperLinkInterfaceProps } from './interface';
import { twMerge } from 'tailwind-merge';


const Hyperlinks = (props:HyperLinkInterfaceProps) => {
  const style = twMerge(`text-sm font-light hover:border-b-[2px] border-black inline-block }`, props.className)
  return (
    <Link href={props.link} className={style}>
      <div className="flex items-center"> {props.children}  <span className="ml-1"><AiOutlineRight/></span></div>
    </Link>
  )
}

export default Hyperlinks
