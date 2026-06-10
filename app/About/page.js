import React from 'react'



const About = () => {
  return (
    <div className='w-screen pt-15 mb-5'>
      <div className='w-screen flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-0 ' >
        <div className=' sm:w-2/5 w-screen flex justify-center '>
            <img className=' w-3/5 sm:w-4/6' src="/img/cafelogo.webp"  alt="" />
        </div>
        <div className=' w-screen  sm:w-2/5 justify-center flex flex-col pl-10 '>
            <h1 className='italic text-[35px] lg:text-7xl text-yellow-400 fo'>About Us</h1>
            <p className='italic text-[12px] lg:text-[20px] text-white fo'>Where taste meets elegance, and every moment becomes special.</p>
        </div>
      </div>
      <div className='w-screen flex justify-center items-center italic text-white/79 mt-10'>
        <p className='w-4/5 sm:text-[16px] text-[8px] pb-10 pfo'>
            Universal X Cafe is a modern, premium, and fully vegetarian café designed to offer the perfect blend of taste, comfort, and experience. Established in March 2025, this café is not just a place to eat, but a complete lifestyle destination where people can relax, connect, and celebrate special moments with friends and family.

Founded under the vision of Dhruv Gautam, Universal X Cafe aims to deliver a unique and memorable experience to every guest — whether it’s a casual coffee outing, a family dinner, or a special celebration.

The ground floor features a beautifully designed café space with elegant interiors, stylish lighting, and comfortable seating that creates a warm yet premium ambiance. Every detail has been thoughtfully curated to ensure guests can enjoy their time in a relaxed and welcoming environment while savoring delicious pure vegetarian dishes.

On the first floor, the café offers a spacious and well-designed party hall, perfect for hosting birthdays, anniversaries, private gatherings, and small events. With modern lighting, flexible seating arrangements, and a refined atmosphere, the party hall is designed to make every occasion truly special.

Conveniently located in the middle of Jharoda Road, directly opposite Vinova Enclave, Universal X Cafe is easily accessible and ideally situated for visitors from nearby areas.

The café takes pride in its pure vegetarian concept, maintaining high standards of quality, hygiene, and taste. Each dish is prepared with care using quality ingredients to ensure an exceptional dining experience.

Universal X Cafe is more than just a café — it’s a place where premium ambiance, great food, and warm hospitality come together to create unforgettable moments.
        </p>
      </div>
      
    </div>
  )
}

export default About

