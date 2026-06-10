"use client"
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'    

const Navbar = (prom) => {
    const {data:session}=useSession()   
  return (

    <div className='w-screen flex-col sm:flex-row sticky top-0 z-40   flex justify-center h-20 m-auto  bg-black/50 ' >
        <div className='w-10/11 z-20   m-auto h-14    mt-5  '>
        <div className='w-full flex-col sm:flex-row flex  items-center justify-between'>
            <div className='flex   justify-baseline gap-3 items-center w-full sm:w-1/5'>
                <div className='w-14  '><img className=''  alt="" /></div>
                <div className='flex justify-around text-[10px] sm:text-[16px] font-bold text-yellow-400 text-center 
drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] fo '><h1>Universal X Cafe</h1>
                </div>
            </div>
            <div className=' sm:w-3/5 w-full'>
                <div className='   '>
      <nav className=''><ul className=' flex justify-around text-[10px] sm:text-[16px] font-bold text-yellow-400 text-center 
drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] fo  '> 
          <Link href="/"><li className=''>Home</li></Link>
          <Link href="/menu"><li>Menu</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/Contact"><li>Contact</li></Link>
          {session ? (
            <Link href="/Login "><li>Account</li></Link>
          ) : (
            <Link href="/Login"><li>Sign In</li></Link>
          )}

          </ul></nav>
      </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Navbar
