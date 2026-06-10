"use client"
import React, { useEffect, useState } from 'react'
import { useSession,signIn,signOut } from "next-auth/react"
import { fetchhistory } from '../../action/userintraction'
import { useRouter } from 'next/navigation'


const page = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if(status=="authenticated"){
      router.push("/account")
    }
  }, [status])
  
  
  
  
  return (
    <div className='h-screen w-screen bg-black/40'>
       <div className=' w-screen text-white mt-20  '>
        <div className='  text-center mt-10'><h1 className=' text-white font-bold  text-center text-[14px] sm:text-2xl mx-auto'>Login/Signup</h1></div>

        <div className=' flex justify-center  items-center flex-col gap-5 mt-10'> <button onClick={() => signIn("google")} className="flex w-70 cursor-pointer justify-center items-center gap-3 bg-white border px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md">
          
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />

          <span className="text-gray-700 font-medium">
            Sign up with Google
          </span>

        </button>
        


</div>
    </div>
    </div>
  )
}

export default page
