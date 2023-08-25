import React from 'react'

import { FaLine, FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
const SocialsSection = () => {
  return (
    <section className='px-2 md:px-5 mt-8 sm:mt-0'>
        <div className='mb-5'>Other contact channel</div>
        <div className='flex justify-left items-center gap-x-2 mb-2'>
            <span><FaSquareFacebook/></span>
            <span><FaInstagram/></span>
            <span><FaLinkedin/></span>
            <span className='font-light text-sm'>Codework Tech</span>
        </div>
        <div className='flex justify-left items-center gap-x-2'>
            <span><FaLine/></span>
            <span className='font-light text-sm'>@Codeworktech</span>
        </div>
    </section>
  )
}

export default SocialsSection
