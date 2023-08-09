import Link from 'next/link'
import React from 'react'
import { AiOutlineRight } from "react-icons/ai";


const Hyperlinks = (props:any) => {
  return (
    <Link href={props.link} className={` ${props.className} text-sm font-light hover:border-b-[2px] border-black inline-block }`}>
      <div className="flex items-center"> {props.children}  <span className="ml-1"><AiOutlineRight/></span></div>
    </Link>
  )
}

export default Hyperlinks
