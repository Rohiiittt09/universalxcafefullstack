"use client"
import { useEffect } from "react";




const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className=" w-screen pt-5 bg-black/50 ">
      <div className="  w-screen flex justify-center items-center">
        <img className=" w-3/5 sm:w-1/5" src="/img/cafelogo.webp "  alt="" />
      </div>
      <div className="w-screen  justify-center text-2xl sm:text-4xl text-white text-center mt-10 mb-10 fo"><h1>We Would Love To Hear From You</h1></div>

      <div>
        <div className="  italic w-3/5 sm:w-2/5 flex flex-col gap-1   ">
          <h1 className="text-[16px] text-white bg-black/75 rounded-r-2xl lg:text-3xl lg:w-3/5 ">
            Contact Us
          </h1>
          
        </div>
        <div className=" mt-10 flex flex-col justify-center items-center  gap-10  ">
          <div className=" flex items-center gap-5   relative left-0 w-4/5 m-auto text-white/60 lg:w-2/5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
               stroke="#facc15" 
            
              className="drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
            >
              <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"></path>
              <circle cx="12" cy="11" r="2.5"></circle>
            </svg>
            <h1 className="text-[10px] italic sm:text-[20px] lg:text-[22px] w-1/6 ">
              Address:
            </h1>
            <p className="text-[8px]  w-5/6 sm:text-[16px] lg:text-[18px]">
               universa x cafe Najafgarh Bahadurgarh Rd, near shokeeen tower,opposite sainik enclave part 3, Najafgarh, Delhi, 110072 
            </p>
          </div>
          <div className="  flex items-center gap-5  relative left-0 w-4/5 m-auto text-white/60 lg:w-2/5  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
               stroke="#facc15" 
             
              className="drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.11a2 2 0 0 1 2.11-.45c.84.27 1.72.47 2.62.59A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <h1 className="text-[10px] italic sm:text-[20px] lg:text-[22px] w-1/6  ">
              Phone:
            </h1>
            <p className="text-[8px]  w-5/6 sm:text-[16px] lg:text-[18px]">
              +91  9034958645 & +91 9958158358
            </p>
          </div>
          {/* <div className="  flex items-center gap-5 relative left-0 w-4/5 m-auto text-white/60 lg:w-2/5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
               stroke="#facc15" 
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
            >
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="M3 7l9 6 9-6"></path>
            </svg>
            <h1 className="text-[10px] italic sm:text-[20px] lg:text-[22px] w-1/6 ">
              Email:
            </h1>
            <p className="text-[8px]  w-5/6 sm:text-[16px] lg:text-[18px]">
              delhicafe252@gmail.com
            </p>
          </div> */}
          <div className=" flex items-center gap-5 relative left-0 w-4/5 m-auto text-white/60 lg:w-2/5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
               stroke="#facc15" 
              
              
              className="drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
            >
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M12 7v5l3 2"></path>
            </svg>
            <h1 className="text-[10px] italic sm:text-[20px] lg:text-[22px] w-1/6 ">
              Opening Hours:
            </h1>
            <p className="text-[8px] w-5/6  sm:text-[16px] lg:text-[18px]">
              mon-sun;10:00AM - 11:00PM
            </p>
          </div>
        </div>
        
      </div>
      
     
      <div className='w-screen mt-10 pb-5'>
        <div className='w-3/5  sm:w-2/5'><h1 className='text-[16px] w-3/4 text-white bg-black/75 rounded-r-2xl lg:text-3xl lg:w-3/5'>Find Us</h1></div>
        <div className=' w-screen flex justify-center pt-10 '>
          <iframe className='w-4/5 lg:w-2/5 m-auto ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16406.004995141262!2d76.95247505021544!3d28.63500633854213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0f004a22a693%3A0x80e9fd592e7cb529!2sUNIVERSAL%20CAFE!5e0!3m2!1sen!2sin!4v1774348381245!5m2!1sen!2sin" width="500" height="300"   ></iframe>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
