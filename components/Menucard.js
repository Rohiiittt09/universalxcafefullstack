"use client"
import React, { useEffect, useRef, useState } from 'react'
import { addcart } from '@/action/userintraction'
import { useSession } from 'next-auth/react'
import { fetchcart } from '@/action/userintraction'
import { upcart } from '@/action/userintraction'
import { useRouter } from 'next/navigation'




const Menucard = ({data}) => {
    const {data:session,status}=useSession()
    const [cartdata, setcartdata] = useState({})
    const router = useRouter()
    const btn = useRef()
    const b = async()=>{
        let x = await fetchcart(session?.user.email)
        if(x){
            setcartdata(x.cart)
            x.cart.map((e)=>{
                if(e.id==data.id){
                    btn.current.innerText="Added"
                    btn.current.style.backgroundColor="green"
                }
            })
        }
    }
    useEffect(() => {
       if(status=="authenticated"){
        b()
       }

    }, [session])
    
    const addtocart = async()=>
        {
        
        if(status!="authenticated"){
            alert("Please login to add items to cart")
            router.push("/Login")
            
        }else{
         btn.current.innerText="Added"
        btn.current.style.backgroundColor="green"
        let a = await fetchcart(session?.user.email)
       
        if(a){
            await upcart(session?.user.email,data)
           
        }else{
            await addcart(session?.user.email,session?.user.name,data)
            
        }}

        
    }
    
  return (
    <div key={data.id} className='flex m-0  justify-around border-3 border-[rgb(67,35,11)] sm:p-2 rounded-2xl bg-black/54 cursor-pointer w-30 h-42  sm:h-80 sm:w-55 lg:h-80 lg:w-60 '>
        <div className='sm:w-50 sm:h-70   h-40 w-28 flex flex-col items-center justify-center   '>
              <div ><img className='sm:h-50 sm:w-50 w-24 h-24 rounded-2xl' src={data.img} alt="" /></div>
              <div className=' w-25 sm:w-full flex justify-between'>
                <h1 className='italic text-[rgb(241,237,234)] sm:text-[18px] text-[10px]'>{data.item}</h1>
                <h1 className='italic text-[rgb(241,237,234)] sm:text-[18px] text-[10px]'>{data.type}</h1>
              </div>
               <div className='w-25 mt-5 sm:w-full flex justify-between'>
                <h1 className='italic text-[rgb(241,237,234)] sm:text-[18px] text-[10px]'>Rs{data.price}</h1>
                <button   onClick={()=>{addtocart()}} ><h1 ref={btn} className='text-white bg-[rgb(67,35,11)] text-center  sm:text-[12px] sm:w-20 sm:h-7 rounded-2xl text-[8px] w-14 h-5 hover:text-[rgb(67,35,11)]  hover:bg-white border flex items-center justify-center
                 cursor-pointer '>Add</h1></button>
                 
            </div>
            </div>
           
    </div>
  )
}

export default Menucard
