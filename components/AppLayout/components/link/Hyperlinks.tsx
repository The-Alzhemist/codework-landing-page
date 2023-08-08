import Link from 'next/link'
import React from 'react'

const Hyperlinks = (props:any) => {
  return (
    <Link href={props.link} className={` ${props.className} text-sm font-light hover:border-b-[2px] border-black }`}>
        {props.children}
    </Link>
  )
}

export default Hyperlinks
