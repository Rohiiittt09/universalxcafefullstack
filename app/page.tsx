"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react' 
import Link from 'next/link';

export default function Home() {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className=' ' >
      <div className='z-5 absolute  top-0 w-screen justify-center flex  h-120  ' ><img className='w-10/11 hidden md:flex  '  src="img/cafehome.webp " alt="" /><img className='w-full top-0 flex md:hidden h-130  '  src="img/cafebg101.webp " alt="" /></div>
      <div className='relative z-20  top-0 h-120 bg-black/50 flex flex-col  justify-center  '>
      <div className='  w-full  h-4/5  flex flex-col justify-center '>
        <h1 className=' text-6xl sm:text-8xl   font-bold text-yellow-400 text-center 
drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] 
[ text-shadow:0_0_20px_rgba(255,215,0,0.9),0_0_40px_rgba(255,215,0,0.6) ] fo italic  '> Welcome</h1>
         <p className='  ont-bold text-yellow-400 text-center 
drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] 
[ text-shadow:0_0_20px_rgba(255,215,0,0.9),0_0_40px_rgba(255,215,0,0.6) ] fo sm:text-2xl text-[10px] '>A perfect destination for dining, cafe moments & celebrations
Premium hall available for parties & special events</p>

      <div className='w-screen justify-around sm:justify-center items-center flex flex-col sm:flex-row  gap-5   sm:gap-25 pt-10'>
        <Link href="/menu"><div className='w-30  sm:w-50 rounded-2xl h-15  pfo flex justify-center bg-black/75 items-center text-[16px] sm:text-2xl text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)]
transition-all duration-300 cursor-pointer '><button className='cursor-pointer'>Order Food</button></div></Link>
        <Link href="/hallbooking"><div className=' w-40 sm:w-70 rounded-2xl h-15  pfo flex justify-center cursor-pointer text-[16px] sm:text-2xl  bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)]
transition-all duration-30OTHING ALL duration-3００  '><button className='cursor-pointer'>Book Party Hall </button></div></Link>
      </div>
      </div>

  
      </div>
      <div className='bg-black/50 p-5  sco flex w-screen   gap-3 sm:gap-10 '>
        
      </div>
      
      <div className='w-screen bg-black/50 pb-10'>
      <div className='w-screen'><h1 className='lg:w-2/7 w-2/5 text-[22px]  lg:text-5xl fo italic sm:p-2   bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-r-2xl transition-all duration-300'>Special offer  </h1></div>
      <div className='w-6/7 gap-2 lg:gap-10 mt-5 lg:mt-15 m-auto h-35 lg:h-80  rounded-4xl flex justify-center bg-black/40 items-center text-white  '>
      <div className='sm:w-1/6 w-30 h-full flex overflow-y-hidden   items-center '><img className='w-full   pl-5 ' src="img/offer1.jpg"  alt="" /></div>
      <div className='w-4/5  justify-center h-4/5  flex flex-col items-center gap-2 sm:gap-5 '>
        <h1 className='fo italic lg:text-3xle w-full flex justify-center text-[16px] lg:text-4xl '>Weekend Special Offer</h1>
        <p className='pfo text-[6px] sm:text-[8px] lg:text-[16px] '>Buy 1 Get 1 FREE on any medium pizza!
Available only on Saturdays & Sundays. Don’t miss out!.</p>
        <Link href="/menu"><div className=' w-30 sm:w-70 rounded-2xl h-6 lg:h-15  pfo flex justify-center cursor-pointer text-[12px] sm:text-2xl  bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)]
transition-all duration-300  '><button className='cursor-pointer'>Explore pizza</button></div></Link>
      </div>
      </div>
      </div>
      <div className='w-full  bg-black/50 h-fit'>
      </div>
      <div className='w-screen bg-black/50   '>
      <div className='w-screen'><h1 className='lg:w-2/7 w-2/5 text-[22px]  lg:text-5xl fo italic   bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-r-2xl transition-all duration-300 sm:p-2'>Services </h1></div>
      <div className='w-6/7 gap-2 lg:gap-10 mt-5 lg:mt-15 m-auto h-35 lg:h-80  rounded-4xl flex justify-center bg-black/40 items-center text-white  '>
      <div className='sm:w-1/6 w-30 h-full flex overflow-y-hidden   items-center '><img className='w-full   pl-5 ' src="img/hallbook1.webp"  alt="" /></div>
      <div className='w-4/5  justify-center h-4/5  flex flex-col items-center gap-2 sm:gap-5 '>
        <h1 className='fo italic lg:text-3xle w-full flex justify-center text-[16px] lg:text-4xl '>Party Hall</h1>
        <p className='pfo text-[6px] sm:text-[8px] lg:text-[16px] '>Celebrate your special moments in our beautifully designed premium party hall, crafted to offer elegance, comfort, and a luxurious ambiance. Whether it's a birthday, anniversary, family gathering, or any celebration, our spacious hall provides the perfect setting for unforgettable experiences. With modern interiors, comfortable seating, and a welcoming atmosphere, we ensure every event becomes truly memorable.</p>
        <Link href="/hallbooking"><div className=' w-30 sm:w-70 rounded-2xl h-6 lg:h-15  pfo flex justify-center cursor-pointer text-[12px] sm:text-2xl  bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)]
transition-all duration-300  '><button className='cursor-pointer'>Book Party Hall </button></div></Link>
      </div>
      
      </div>
      <div className='w-6/7 gap-2 lg:gap-10 flex mt-5 lg:mt-15 m-auto h-35 lg:h-80  rounded-4xl lg:flex   bg-black/40 items-center text-white  '>
      <div className='w-4/5  justify-center h-4/5 flex flex-col items-center gap-2 sm:gap-5   '>
        <h1 className='fo italic lg:text-3xle w-full flex justify-center text-[16px] lg:text-4xl  '>Cozy Cafe Experience</h1>
        <p className='pfo text-[6px] sm:text-[8px] lg:text-[16px] '>Step into our cozy and stylish cafe, designed to offer a perfect blend of comfort and elegance. Enjoy delicious food, refreshing beverages, and a relaxing ambiance with modern interiors and premium seating. Whether you're catching up with friends or spending quality time, our cafe creates the perfect atmosphere for every moment.</p>
        <Link href="/menu"><div className='  w-30 sm:w-70 rounded-2xl h-6 lg:h-15  pfo flex justify-center cursor-pointer text-[12px] sm:text-2xl  bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)]
transition-all duration-300  '><button className='cursor-pointer'>View Menu </button></div></Link>
      </div>
      <div className='sm:w-1/6 w-30 h-full flex overflow-y-hidden  items-center'><img className='w-full  pr-5 ' src="img/restro.webp"  alt="" /></div>
      
      </div>
      <div className='w-6/7 gap-2 lg:gap-10 flex  mt-5 lg:mt-15 m-auto h-35 lg:h-80 rounded-4xl lg:flex items-center  bg-black/40 items-center text-white  '>
      <div className='sm:w-1/6 w-30 h-full flex  items-center overflow-y-hidden'><img className='w-full  pl-5 ' src="img/fast.webp"  alt="" /></div>
      <div className='w-4/5  justify-center h-4/5 flex flex-col items-center gap-2 sm:gap-5  '>
        <h1 className='fo italic lg:text-3xle w-full flex justify-center text-[16px] lg:text-4xl  '>Fast Service & Home Delivery</h1>
        <p className='pfo text-[6px] sm:text-[8px] lg:text-[16px] '>Enjoy fast and efficient service with freshly prepared meals served in no time. We maintain a clean and hygienic kitchen to ensure quality in every bite. Whether you dine in or order from home, our quick food delivery and seamless service guarantee a satisfying experience every time.</p>
        <Link href="/menu"><div className=' w-30 sm:w-70 rounded-2xl h-6 lg:h-15  pfo flex justify-center cursor-pointer text-[12px] sm:text-2xl  bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)]
transition-all duration-300  '><button className='cursor-pointer'>View Menu </button></div></Link>
      </div>
      </div>
      </div>
      <div className='w-screen bg-black/50   pt-10'>
       <div className='w-screen'><h1 className='lg:w-2/7 sm:w-2/5 w-3/5 text-[20px]  lg:text-4xl  fo italic  bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-r-2xl transition-all duration-300 sm:p-2'>Why Choose Us?</h1></div>
       <div className=' w-screen md:w-4/5  m-auto h-fit pt-5 pb-5 flex  items-center mt-10 rounded-3xl bg-black/40'>

       <div className='w-2/5 p-2' >
        <ul className='italic w-full text-white/60 text-[12px] md:text-3xl fo flex flex-col gap-1 sm:gap-2'>
        <li>Premium Ambiance ✨</li>
        <li>Fresh & Tasty Food 🍽️</li>
        <li>Hygienic Kitchen 🧼</li>
        <li>Fast Service ⚡</li>
        <li>Party Hall Available 🎉</li>
        <li>Friendly Service 😊</li>
       </ul>
       </div>
       <div className='w-3/5 h-full  flex items-center'>
        <p className=' text-white/60 pfo text-[6px] md:text-[16px]'>We offer a premium and elegant ambiance that creates a perfect environment for dining, relaxing, and celebrating special moments. Our food is freshly prepared with high-quality ingredients to ensure great taste in every bite. We maintain a clean and hygienic kitchen, focusing on safety and quality at every step. With fast and efficient service, you never have to wait long to enjoy your meal. We also provide a spacious and beautifully designed party hall, perfect for hosting birthdays, celebrations, and special events. Our friendly and dedicated staff is always ready to serve you and make your experience comfortable and memorable.</p>
       </div>
       </div>
      </div>
      <div className='w-screen bg-black/50 pb-5 pt-5'>
        <div className='w-screen'><h1 className='lg:w-2/7 w-2/5 text-[22px]  lg:text-4xl  fo italic text-white  bg-black/75 items-center  shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] sm:p-2  hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-r-2xl transition-all duration-300'>Find Us</h1></div>
        <div className=' w-screen flex justify-center pt-10 '>
          <iframe className='w-4/5 lg:w-2/5 m-auto ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16406.004995141262!2d76.95247505021544!3d28.63500633854213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f004a22a693%3A0x80e9fd592e7cb529!2sUNIVERSAL%20CAFE!5e0!3m2!1sen!2sin!4v1774348381245!5m2!1sen!2sin" width="500" height="300"  loading="lazy" ></iframe>
        </div>
      </div>
      
      
    </div>
  );
}
