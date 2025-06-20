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

 {/* Premium Upcoming Projects Section */}
 <section className='min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-stone-900 py-20' id='upcoming'>
  <div className='max-w-7xl mx-auto px-8'>
    {/* Premium Section Header */}
    <div className='text-center mb-16'>
      <div className='w-20 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mx-auto mb-8'></div>
      <h1 className='font-display text-5xl lg:text-7xl font-light text-white tracking-tight leading-none mb-6'>
        <span className='text-gradient-gold font-bold'>UPCOMING</span>
        <br />
        <span className='font-heading font-extralight text-gray-300 text-3xl lg:text-5xl tracking-[0.15em] uppercase'>
          PROJECTS
        </span>
      </h1>
      <p className='font-body text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto'>
        Discover our forthcoming developments that represent the pinnacle of architectural innovation and construction excellence.
      </p>
    </div>

    {/* Premium Projects Grid */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
      
      {/* Project 1 */}
      <div className='group relative'>
        <div className='glass-premium border border-amber-500/10 rounded-3xl p-8 lg:p-12 shadow-premium hover:shadow-gold transition-all duration-500 hover:border-amber-500/20'>
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            <div className='w-full lg:w-1/2'>
              <div className='bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 h-64 flex items-center justify-center border border-amber-500/10'>
                <A />
              </div>
            </div>
            <div className='w-full lg:w-1/2 space-y-6'>
              <div>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500'></div>
                  <span className='font-heading text-amber-400 text-sm uppercase tracking-wider'>Project Alpha</span>
                </div>
                <h3 className='font-display text-3xl lg:text-4xl font-bold text-gradient-gold mb-4'>
                  Modern Residential Tower
                </h3>
                <p className='font-body text-gray-300 leading-relaxed mb-6'>
                  A cutting-edge residential development featuring contemporary architecture, sustainable design principles, and luxury amenities. This premium tower will redefine urban living with its innovative approach to space utilization.
                </p>
              </div>
              <div className='flex flex-wrap gap-4'>
                <div className='glass-gold px-4 py-2 rounded-lg'>
                  <span className='font-heading text-amber-200 text-sm uppercase tracking-wider'>30 Floors</span>
                </div>
                <div className='glass-gold px-4 py-2 rounded-lg'>
                  <span className='font-heading text-amber-200 text-sm uppercase tracking-wider'>Luxury Units</span>
                </div>
                <div className='glass-gold px-4 py-2 rounded-lg'>
                  <span className='font-heading text-amber-200 text-sm uppercase tracking-wider'>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className='group relative'>
        <div className='glass-premium border border-amber-500/10 rounded-3xl p-8 lg:p-12 shadow-premium hover:shadow-gold transition-all duration-500 hover:border-amber-500/20'>
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            <div className='w-full lg:w-1/2 order-2 lg:order-1 space-y-6'>
              <div>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500'></div>
                  <span className='font-heading text-amber-400 text-sm uppercase tracking-wider'>Project Beta</span>
                </div>
                <h3 className='font-display text-3xl lg:text-4xl font-bold text-gradient-gold mb-4'>
                  Commercial Complex
                </h3>
                <p className='font-body text-gray-300 leading-relaxed mb-6'>
                  An innovative commercial development designed to accommodate modern business needs. Featuring flexible office spaces, retail areas, and state-of-the-art infrastructure for the future of commerce.
                </p>
              </div>
              <div className='flex flex-wrap gap-4'>
                <div className='glass-gold px-4 py-2 rounded-lg'>
                  <span className='font-heading text-amber-200 text-sm uppercase tracking-wider'>25 Floors</span>
                </div>
                <div className='glass-gold px-4 py-2 rounded-lg'>
                  <span className='font-heading text-amber-200 text-sm uppercase tracking-wider'>Mixed Use</span>
                </div>
                <div className='glass-gold px-4 py-2 rounded-lg'>
                  <span className='font-heading text-amber-200 text-sm uppercase tracking-wider'>2025</span>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-2'>
              <div className='bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 h-64 flex items-center justify-center border border-amber-500/10'>
                <B />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Premium CTA Section */}
    <div className='text-center mt-20'>
      <div className='glass-premium border border-amber-500/10 rounded-2xl p-12 shadow-premium'>
        <h3 className='font-display text-2xl lg:text-3xl font-bold text-gradient-gold mb-6'>
          Interested in Our Upcoming Projects?
        </h3>
        <p className='font-body text-gray-300 text-lg mb-8 max-w-2xl mx-auto'>
          Get exclusive early access to floor plans, pricing, and investment opportunities for our premium developments.
        </p>
        <a 
          href='https://wa.me/+919850455290' 
          className='inline-flex items-center gap-3 btn-premium font-heading px-8 py-4 text-base border border-amber-500/20 focus-premium'
        >
          <span className="relative z-10">Contact for Details</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
 </section>

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