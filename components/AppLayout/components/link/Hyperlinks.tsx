import Link from 'next/link'
import React from 'react'

const Hyperlinks = (props:any) => {
  return (
    <Link href={props.link} className="text-sm font-light hover:border-b-[1px] border-black ml-4">
        {props.children}
    </Link>
  )
}

export default Hyperlinks
