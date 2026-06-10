"use client"
import React, { useEffect, useState } from 'react'
import { fetchcart } from '@/action/userintraction'
import { useSession } from 'next-auth/react'
import { deletecart } from '@/action/userintraction'
import { incqty } from '@/action/userintraction'
import { decqty } from '@/action/userintraction'
import { initiate } from '@/action/userintraction'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const page = () => {
    const [form, setform] = useState({name:"",address:"",phone:""})
    
    const {data:session,status}=useSession()
        const [cartdata, setcartdata] = useState([])
        const [cost, setcost] = useState(0)
        const router = useRouter()
    
        useEffect(() => {
          const params = new URLSearchParams(window.location.search);
         if(params.get("success")=="true"){
          toast("🦄 order confirmed", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
            router.push("/cart")
         }
        }, [])
        

        const dec=async(id)=>{
             await decqty(session?.user.email,id)
            b()
        }
        const inc = async(id)=>{
            await incqty(session?.user.email,id)
            b()
        }
        const deleteitem = async(id)=>{
            await deletecart(session?.user.email,id)
            b()
            
        }
    
        const b = async()=>{
            let x = await fetchcart(session?.user.email)
            if(x){

                setcartdata(x.cart)
                let u = 0
                x.cart.map((e)=>{
                    
                    u=u+e.qty*e.price
                })
                setcost(u)
            }
        }
        useEffect(() => {
           if(status=="authenticated"){
            b()
            
           }
        }, [session])

        const pay = async (amount)=>{
        const a = await initiate(amount,form,cartdata,session?.user.email)
       const orderId = a.id
        var options = {
    "key": "rzp_test_SwigLOpD4554qR", // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": "cafe website", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "http://localhost:3000//api/razorpay",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

var rzp1 = new Razorpay(options);
rzp1.open();
    
    }
    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }

    if(cartdata.length==0){
        return(
            <div className='w-screen h-screen flex justify-center items-center bg-black/40'>
              <ToastContainer className={"z-40 mt-15 relative "}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
                <h1 className='text-white text-2xl font-bold'>Your cart is empty.</h1>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3H5L6.6 12.59C6.7 13.21 7.23 13.66 7.86 13.66H17.4C18 13.66 18.52 13.25 18.65 12.66L20 7H6" 
        stroke="white"  />
  <circle cx="9" cy="20" r="1.5" fill="white"/>
  <circle cx="17" cy="20" r="1.5" fill="white"/>
</svg>
            </div>
        )
    }
  return (
    
    <div className='w-screen  min-h-screen max-h-fit flex flex-col border '>
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
         <div className="mt-20 gap-2  flex flex-col ga sm:gap-2 ">
        {cartdata.map((e) => {
          return (
            <div key={e.id} className=" flex  w-5/6 sm:w-3/5 m-auto justify-between  italic text-white gap-5 border ">
              <div className="  flex w-3/5 justify-between sm:text-[16px] text-[8px] items-center ">
              <span><img className='w-8 h-8' src={e.img} alt={e.item} /></span>
                <h1>{e.item}</h1>
                <h1>{e.type}</h1>
                <h1>Rs{e.price * e.qty}</h1>
              </div>
              <div className="  flex w-2/5 sm:w-2/7 justify-around items-center ">
                <div className="flex justify-center items-center sm:h-full w-10 h-4 sm:w-20  ">
                  <button
                    className="border rounded-2xl text-[8px] sm:text-[14px] text-white bg-[rgb(67,35,11)] h-full w-full  cursor-pointer hover:bg-[rgb(143,79,31)]  "
                   onClick={()=>{deleteitem(e.id)}}
                  >
                    <h4>cancel</h4>
                  </button>
                </div>
                <div className=" flex w-3/5 justify-around border items-center ">
                  <div className="w-1/3 flex justify-center items-center">
                    <button
                     onClick={()=>{dec(e.id)}}
                      className="sm:text-[18px] text-[10px] text-white bg-[rgb(67,35,11)] w-full cursor-pointer hover:bg-[rgb(143,79,31)]   "
                    >
                      -
                    </button>
                  </div>
                  <div className="text-[10px] sm:text-[18px] w-1/3 border-[rgb(67,35,11)] flex justify-center  ">
                    {e.qty}
                  </div>
                  <div className="w-1/3 flex justify-center items-center">
                    <button
                      onClick={()=>{inc(e.id)}}
                      className="text-[10px] sm:text-[18px] w-full text-white bg-[rgb(67,35,11)] cursor-pointer hover:bg-[rgb(143,79,31)]  "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="  m-auto border flex w-5/6 sm:w-3/5  sm:text-3xl italic text-white justify-between pl-5 pr-5">
            <div className=""><h1>Total</h1></div>
            <div className=" "><h1>Rs{cost}</h1></div>
            
        </div>
      </div>
      <div className='w-3/5 mt-10 flex flex-col gap-4 h-100  mx-auto '>
      <input onChange={(e)=>{handlechange(e)}}  className='w-full  text-[14px] sm:text-[18px] rounded-2xl p-1 bg-slate-600 text-white placeholder:text-slate-400 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='name' placeholder='Enter Name' />
        <input onChange={(e)=>{handlechange(e)}}  className=' w-full text-[14px] sm:text-[18px] rounded-2xl p-1 bg-slate-600 text-white placeholder:text-slate-400 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='Address' placeholder='Enter Address' />
        <input onChange={(e)=>{handlechange(e)}}   className=' w-full text-[14px] sm:text-[18px] rounded-2xl p-1 bg-slate-600 text-white placeholder:text-slate-400 border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500' type="tel" name='phone' placeholder='Enter Phone Number' />
        <button type="button" onClick={()=>{pay(cost*100)}}   className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none w-full focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl  text-sm px-4 py-2.5 cursor-pointer text-[18px] text-center leading-5">Pay</button>
        
      </div>
    </div>
  )
}

export default page


