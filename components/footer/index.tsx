import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
    <section className='bg-gray-800 h-auto ' id='abt'>
<div className="  flex justify-center  ">
          <div className="grid xl:grid-cols-4 sm:grid-cols-1 sm:py-5 space-x-2  sm:space-y-6 xl:space-y-0  xl:w-3/4  xl:py-20">
            <div className="  text-white text-3xl   ">
              <div className=' flex sm:justify-center xl:justify-center '>
              <Image
className='  '
src="/assets/group 6.png" // Route of the image file
height={70} // Desired size
width={70}
alt="Description of the image"
/>
            </div>
              <h1 className=" sm:text-center xl:text-center ">Manguirish <br />builders</h1>
            </div>
            <div className=" text-white  space-y-2 flex justify-center ">
                <div className='grid grid-cols-1'>
              <h1 className="text-xl text-gray-400 text-center xl:text-start" >links</h1>
              <a href="#home" className="text-center xl:text-start">home</a>
              <a href="#layout" className="text-center xl:text-start">layout</a>
              <a href="#upcoming" className="text-center xl:text-start">upcoming</a>
              <a href="#details" className="text-center xl:text-start">details</a>
              <a href="#about" className="text-center xl:text-start">about us</a>
              <a href="https://wa.me/+919850455290" className="text-center xl:text-start">contact</a>
              </div>
            </div>
            <div className=" text-white">
              <h1 className="text-xl text-gray-400 sm:text-center xl:text-start ">contact</h1>
              <h1 className="py-2 sm:text-center xl:text-start underline">+91 9850455290</h1>
              <h1 className="sm:text-center xl:text-start underline">mangirish.builders@gmail.com</h1>
            </div>
            <div className="  text-white xl:flex justify-center  sm:align-middle  ">
               <div className=''>
              <h1 className=" sm:text-center xl:text-center text-xl font-semibold">ADRESS</h1>
               <h1 className='xl:text-center py-2 px-8 '>Opposite To Hotel Spice Goa, Near Karaswada Sicle, Mapusa, North Goa, Goa</h1>
</div>
            </div>
          </div>
        </div>
        <a href="#home">
  <div className="flex xl:justify-end sm:justify-center px-6 b pb-6">
  <Image
className='  '
src="/assets/arrow.png" // Route of the image file
height={80} // Desired size
width={80}
alt="Description of the image"
/>
  </div>
</a>
        <div className=" bg-gradient-to-r from-red-500 h-1 to-blue-500"></div>
        <div className="flex justify-between py-6">
          <h1 className="text-white p-2 ">
            © 2024 manguirish. All rights reserved.
          </h1>
          <h1 className="text-white p-2">Privacy Policy</h1>
        </div>
</section>
</div>
  )
}

export default Footer