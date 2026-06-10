"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import {fetchcart} from '@/action/userintraction'
const Cartbtn = () => {
  const { data: session } = useSession();

//   const [cartCount, setCartCount] = useState(0);
//   const a = async()=>{
//     const x = await fetchcart(session?.user.email)
//     if(x){
//       setCartCount(x.cart.length)
//     }
//   }

//   useEffect(() => {
//     a();
//   }, [session]);

  return (
   <div>
        
       <Link href="/cart">
        <button className=' cursor-pointer fixed z-20 top-6/7 right-4   sm:top-5/6 sm:right-10 w-25 h-12 sm:w-20 flex justify-center items-center sm:h-10   border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl'>
        {/* <div className={cartCount>=1?"bg-red-700 rounded-full text-white h-5 flex justify-center items-center absolute top-0  w-5":"hidden"}>{cartCount}</div> */}
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3H5L6.6 12.59C6.7 13.21 7.23 13.66 7.86 13.66H17.4C18 13.66 18.52 13.25 18.65 12.66L20 7H6" 
        stroke="white"  />
  <circle cx="9" cy="20" r="1.5" fill="white"/>
  <circle cx="17" cy="20" r="1.5" fill="white"/>
</svg></button>
    
        </Link>
    </div>
  )
}

export default Cartbtn
