"use client"
import React, { useEffect, useState } from 'react'
import { useSession,signIn,signOut } from "next-auth/react"
import { fetchhistory } from '../../action/userintraction'
import { useRouter } from 'next/navigation'

const page = () => {
     const { data: session, status } = useSession()
     const [box, setbox] = useState(false);
      const [his, sethis] = useState([])
      const [orderdetails, setorderdetails] = useState([])
      const ordtl = (e) => {
    setorderdetails(e);
    setbox(true);
  }
      const router = useRouter()
      useEffect(() => {
        if(status=="unauthenticated"){
          router.push("/Login")
        }
      }, [status])
      
      const a = async()=>{
        const x = await fetchhistory(session?.user?.email)
        sethis(x)
      }
      useEffect(() => {

        a()
      }, [session])

      
      
      if(session){
        
        return(<div className='min-h-screen w-screen flex flex-col justify-center items-center bg-black/40'>
          <div className=' w-screen text-white mt-10 flex flex-col items-center justify-center gap-4  '>
            <h1 className=' text-[18px] sm:text-3xl fo '>Welcome, {session.user.name}!</h1>
            <button className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
    
          <div className='w-4/5 m-auto mt-10  flex  items-center sm:p-5'>
            <h1 className=' text-2xl fo font-bold text-white'>Your Orders</h1>
          </div>
          <div className='w-screen p-5 sco overflow-x-scroll flex  justify-center flex-col items-center '>
            <div className=' flex flex-col  justify-center mx-auto  items-center w-full sm:w-4/5      '>
              {
                his.length==0 ? <h1 className='text-white text-2xl font-bold'>You have no orders yet.</h1> :his.map((e)=>{
                return(<div key={e._id} onClick={()=>{ordtl(e)}} className='w-full h-fit overflow-x-scroll sco border cursor-pointer hover:bg-gray-900 bg-black border-white/40 m-5  flex flex-col  justify-center gap-2'>
                  <h1 className='text-sm text-white/60 font-bold'>Order ID: {e._id}</h1>
                  <div className='flex gap-5 w-full overflow-x-scroll sco   items-center  '>
                    {e.cart.map((i,index)=>{
                      return(
                        <div key={index}><img className='w-12 h-12'  src={i.img} alt="" /></div>
                      )
                    })}
    
                    
                  </div>
                  <h1 className='text-sm text-white/60'>Date: {new Date(e.createdAt).toLocaleDateString("en-IN")}</h1>
                  <h1>{e.pregress}</h1>
                  <h1 className='text-sm text-white/60'>Total Price: Rs{e.amount/100}</h1>
                </div>
                )
              })
              }
            </div>
          </div>
          <div
        className={
          box
            ? "w-4/5  mx-auto h-100 border overflow-y-scroll overflow-x-hidden bg-black  border-white/40 rounded-2xl flex p5 items-center fixed  top-30  "
            : "hidden"
        }
      >
        <div>
          <h1
            onClick={() => setbox(!box)}
            className="text-7xl rotate-45 absolute top-2 right-2 cursor-pointer "
          >
            +
          </h1>
        </div>
        <div className="w-full h-full flex flex-col p-5">
          <h1 className="text-3xl w-full  text-center">Order Details</h1>

          <h3>{orderdetails.name}</h3>
          <h3>{orderdetails.phone}</h3>
          <h3>{orderdetails.address}</h3>
          <h1>
            Total: $
            {orderdetails.amount
              ? (orderdetails.amount / 100).toFixed(2)
              : "0.00"}
          </h1>
          <h1>{orderdetails.pregress}</h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Items:</h1>
            {orderdetails?.cart?.map((e, index) => {
              return (
                <div key={index} className="flex gap-3 items-center">
                  <img className="w-12 h-12" src={e.img} alt="" />
                  <h4>{e.item}</h4>
                  <h4>{e.type}</h4>
                  <h4>{`${e.qty} * ${e.price}`}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        </div>)
      
    }
  return (
    <div>
      
    </div>
  )
}

export default page
