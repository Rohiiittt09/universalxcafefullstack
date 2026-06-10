"use client"
import React, { useEffect, useState } from 'react'
import { fetchmenu } from '@/action/userintraction'
import Menucard from '@/components/Menucard'

const page = () => {
    const [allmenu, setallmenu] = useState([])
    const b = async()=>{
              const y = await fetchmenu()
              setallmenu(y)
            }
            useEffect(() => {
             b()
            }, [])
  return (
    <div className='pb-5 min-h-screen pt-10 grid sm:grid-cols-3 bg-black/50  grid-cols-2 lg:grid-cols-4 place-items-center place-content-start gap-5'>
      {allmenu.map((e)=>{
        return <Menucard key={e.id} data={e}/>
      })}
    </div>
  )
}

export default page
