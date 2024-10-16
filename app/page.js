'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Model from '../components/model';
import Home from '../components/home';
import A from '../components/a';
import In from '../components/in';
import B from '../components/b';
import Carousel1 from '../components/carousel';
import Map from '../components/map';
import Footer from '../components/footer';
const Page = () => {
  

  return (
    <div>
       <section id='home'>
        <Home/>
       </section>
 <section id='vision'>
 
  <div className=' bg-gradient-to-tr from-pink-500  to-cyan-600  '>
    <h1 className=' text-8xl  text-white  font-serif text-center  '>vision</h1>
    <div className='w-1/4 h-[90%] absolute bg-black bg-opacity-75 right-1 mt-10 rounded-3xl '>
       <p className='text-center font-sans3 text-2xl text-white p-3 py-8'>Our vision is to lead the construction industry by delivering innovative, sustainable, and high-quality projects that stand the test of time. We aim to build not just structures, but vibrant communities that enhance quality of life. Through excellence, integrity, and a commitment to our clients, we strive to leave a lasting legacy in every project we undertake.</p>
       
       <a href='#adi'> <h1 className='text-white  text-3xl  m-5 rounded-3xl hover:text-black hover: shadow-lg hover:shadow-white bg-gradient-to-r from-red-500 to-blue-500 flex items-center p-3 justify-center bottom-0'> exit</h1> </a>
    </div>
    <Model/>
  </div>
 </section>

 <section className='min-h-screen' id='upcoming'>
  <h1 className='text-center bg-black text-white font-serif p-8 text-8xl'>upcoming projects</h1>
 <div className='grid grid-cols-2 '>
  <div className=' bg-black'><A/></div>
  <div className='bg-black flex justify-center'>
    <div className='bg-gradient-to-r from-red-500 to-blue-500 m-8 w-2/3 rounded-xl shadow-xl shadow-red-500'>
    <h1 className=' text-5xl  text-white  font-serif text-center  '>project no 1</h1>
    <p  className='text-center p-8'>jejdejdedjwkdnwendwj <br />eknewknwekjnew <br />jknweckjewndjkwendw
    jejdejdedjwkdnwendwj <br />eknewknwekjnew <br />jknweckjewndjkwendw</p>
    </div>
  </div>
  <div className='bg-black flex justify-center pl-8'>
  <div className='bg-gradient-to-r from-red-500 to-blue-500 m-8 w-2/3  shadow-xl shadow-blue-500 rounded-xl'>
    <h1 className=' text-5xl  text-white  font-serif text-center  '>project no 1</h1>
    <p  className='text-center p-8'>jejdejdedjwkdnwendwj <br />eknewknwekjnew <br />jknweckjewndjkwendw
    jejdejdedjwkdnwendwj <br />eknewknwekjnew <br />jknweckjewndjkwendw</p>
    </div>
  </div>
  <div className='bg-black pt-1'><B/></div>
</div>
 </section >
 <h1 className='text-center font-serif text-8xl text-white bg-gray-600 p-3'> layout</h1>
 <section className=' bg-gray-600   ' id='layout'>   
 <div className='grid grid-cols-8 '>
 <div className=' '>
  
 </div>
 <div className=' col-span-3 flex items-center'>
  <div className='bg-gradient-to-r from-black via-slate-600 to-slate-400 bg-opacity-55  w-[90%] h-[90%] rounded-3xl '>
  <h1 className='text-center  text-black font-serif text-6xl '>  interior</h1>
  <p className='text-center font-sans3 text-white text-xl px-12 pt-6'> Discover this luxurious and fully furnished flat spanning 320 square meters, offering a blend of elegance and comfort. This spacious residence features two beautifully designed bedrooms, perfect for rest and relaxation. The heart of the home includes not one, but two state-of-the-art kitchens, each adorned with sleek granite countertops, providing ample space for cooking and entertaining.

Ideal for families or those who love to host, this flat offers both functionality and style in a prime location. The modern furnishings complement the high-quality finishes throughout, ensuring a move-in ready experience.</p>
  </div>
 </div>
 
  <div className='bg-gradient-to-r from-red-500 to-blue-500 col-span-4 h-[90%] my-9 mx-4 rounded-3xl'>
  <In/>
  </div>
  </div>
 </section>

<section  className='bg-black' id='details'>
  <h1 className='text-white font-serif bg-black text-8xl p-6 text-center'> details</h1>
  <div className='grid grid-cols-2 pl-28 '>
    <div className=' p-4 rounded-3xl'><Map/></div>
    <div className='p-4 '><Carousel1 /></div>
  </div>
  <div className='flex items-center justify-end p-5'>
  <a href=''> <h1 className='text-white  text-3xl  m-5 rounded-3xl shadow-lg shadow-white bg-gradient-to-r from-red-500 to-blue-500  flex items-center p-2 px-8 justify-center bottom-0'> price 80lk</h1> </a>
  </div>
</section>
<section id='about'>
<Footer />
</section>
 </div>
  )
}

export default Page