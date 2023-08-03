import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-white sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">CodeWork</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0 text-white">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About Us</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Our Services</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Our Projects</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Our Members</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer
