import React from 'react'

const Footer = () => {
  return (
    <div>
    <section className='bg-gray-800 h-auto ' id='abt'>
<div className="  flex justify-center  ">
          <div className="grid xl:grid-cols-4 sm:grid-cols-1 sm:py-5 space-x-2  sm:space-y-6 xl:space-y-0  xl:w-3/4  xl:py-20">
            <div className="  text-white text-3xl   ">
              <div className=' flex sm:justify-center xl:justify-center '>
            <img src='./assets/group 6.png' alt="Description of image" style={{ width: '90px', height: '200px' }} className='' />
            </div>
              <h1 className=" sm:text-center xl:text-center ">Manguirish <br />builders</h1>
            </div>
            <div className=" text-white  space-y-2 flex justify-center ">
                <div className='grid grid-cols-1'>
              <h1 className="text-xl text-gray-400 text-center xl:text-start" >links</h1>
              <a href="#how" className="text-center xl:text-start">how it works</a>
              <a href="#qual" className="text-center xl:text-start">quality</a>
              <a href="#prod" className="text-center xl:text-start">gallery</a>
              <a href="https://wa.me/+91 98505 40400"className="text-center xl:text-start">contact</a>
              </div>
            </div>
            <div className=" text-white">
              <h1 className="text-xl text-gray-400 sm:text-center xl:text-start ">contact</h1>
              <h1 className="py-2 sm:text-center xl:text-start underline">+91 98505 40400</h1>
              <h1 className="sm:text-center xl:text-start underline">Autumninteriorsgoa@gmail.com</h1>
            </div>
            <div className="  text-white xl:flex xl:flex-col sm:justify-center  sm:align-middle  ">
              <h1 className=" sm:text-center xl:text-center text-xl font-semibold">ADRESS</h1>
               <h1 className='xl:text-center py-2 px-2'>Autumn Design Studio
D. S. Harmony, Shop No. 2, Opp. Chowgule College, Gogol
Margao - Salcete - Goa.</h1>
            </div>
          </div>
        </div>
        <a href="#home">
  <div className="flex xl:justify-end sm:justify-center px-6 b pb-6">
    <img src='' style={{ width: '80px', height: '80px' }} className='bg-[#958f8c] bg-opacity-20 rounded-full'/>

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