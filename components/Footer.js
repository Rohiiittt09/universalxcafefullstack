import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='w-full pt-5 h-fit  border-black flex flex-col bg-[rgb(67,35,11)] '>
      <div className="   text-white flex flex-col sm:flex-row justify-center items-center">
      <div className="   w-1/5 flex justify-center items-center">
        <img className="" src="/img/cafelogo.webp" loading='lzy' alt="" />
      </div>
      <div className="  w-3/5 flex justify-center items-center  ">
        <div className=" flex-col justify-center items-center gap-10  ">
          <h2 className="text-[14px]">+91  9034958645 & +91 8930494818</h2>
          {/* <h2 className="text-[14px]">delhicafe819@gmail.com</h2> */}
          <Link href="" className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              
            >
              <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"></path>
              <circle cx="12" cy="11" r="2.5"></circle>
            </svg>
            <h2 className="underline text-[14px]">location</h2>
          </Link>
          <div className="  flex gap-5 sm:gap-0 sm:justify-between items-center ">
            <Link href="#">
              <img className=" sm:w-8 w-4" src="src/img/fblogo.png" alt="" />
            </Link>
            <Link href="#">
              <img className=" sm:w-12 w-8" src="src/img/iglogo1.png" alt="" />
            </Link>
            <Link href="#">
              <img className="sm:w-8 w-4" src="src/img/tlogo1.png" alt="" />
            </Link>
          </div>

          <h1 className=" mt-10 text-[8px] sm:text-[14px]">
            © 2025 UniversalXCafe | All Rights Reserved
          </h1>
        </div>
      </div>

      </div>
      <div className='pt-10 sm:pt-5 bg-[rgb(67,35,11)]   flex flex-col justify-center items-center text-[8px] sm:text-[12px] fo text-white'><h1>Developed by Rohit</h1><div><a href="https://linkedin.com/in/rohit-singh-9a994a317" target="_blank" 
   rel="noopener noreferrer">LinkedIn</a></div></div>
    </div>
  )
}

export default Footer
