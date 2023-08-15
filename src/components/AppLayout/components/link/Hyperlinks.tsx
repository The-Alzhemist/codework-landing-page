import Link from 'next/link'
import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { HyperLinkInterfaceProps } from './interface';


const Hyperlinks = (props:HyperLinkInterfaceProps) => {
  return (
    <Link href={props.link} className={` ${props.className} text-sm font-light hover:border-b-[2px] border-black inline-block }`}>
      <div className="flex items-center"> {props.children}  <span className="ml-1"><AiOutlineRight/></span></div>
    </Link>
  )
}

export default Hyperlinks
