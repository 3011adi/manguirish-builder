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
 {/* Premium Vision Section */}
 <section id='vision' className='min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-stone-900 relative overflow-hidden'>
   {/* Futuristic 3D Background */}
   <div className='absolute inset-0'>
     <Model/>
   </div>
   
   {/* Premium Content Overlay */}
   <div className='relative m-2 z-10 min-h-screen flex items-center justify-end pr-8 lg:pr-16'>
     <div className='w-full max-w-lg lg:max-w-xl'>
       <div className='glass-premium border border-amber-500/10 rounded-3xl p-8 lg:p-12 shadow-premium backdrop-blur-xl'>
         {/* Premium Section Header */}
         <div className='mb-8'>
           <div className='w-16 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6'></div>
           <h1 className='font-display text-4xl lg:text-6xl font-light text-white tracking-tight leading-none mb-6'>
             <span className='text-gradient-gold font-bold'>OUR</span>
             <br />
             <span className='font-heading font-extralight text-gray-300 text-2xl lg:text-4xl tracking-[0.15em] uppercase'>
               VISION
             </span>
           </h1>
         </div>

         {/* Premium Vision Content */}
         <div className='space-y-6'>
           <p className='font-body text-gray-300 text-lg lg:text-xl leading-relaxed'>
             Our vision is to lead the construction industry by delivering innovative, sustainable, and high-quality projects that stand the test of time.
           </p>
           <p className='font-body text-gray-300 text-base lg:text-lg leading-relaxed'>
             We aim to build not just structures, but vibrant communities that enhance quality of life. Through excellence, integrity, and a commitment to our clients, we strive to leave a lasting legacy in every project we undertake.
           </p>
         </div>

         {/* Premium Vision Points */}
         <div className='grid grid-cols-1 gap-4 mt-8'>
           <div className='glass-gold p-4 rounded-xl'>
             <h3 className='font-heading text-amber-200 font-semibold mb-2'>Innovation</h3>
             <p className='font-body text-gray-300 text-sm'>Cutting-edge construction technologies</p>
           </div>
           <div className='glass-gold p-4 rounded-xl'>
             <h3 className='font-heading text-amber-200 font-semibold mb-2'>Sustainability</h3>
             <p className='font-body text-gray-300 text-sm'>Eco-friendly building practices</p>
           </div>
           <div className='glass-gold p-4 rounded-xl'>
             <h3 className='font-heading text-amber-200 font-semibold mb-2'>Excellence</h3>
             <p className='font-body text-gray-300 text-sm'>Uncompromising quality standards</p>
           </div>
         </div>

         {/* Premium CTA */}
         <div className='mt-8'>
           <a 
             href='#upcoming' 
             className='inline-flex items-center gap-3 btn-premium font-heading px-6 py-3 text-sm border border-amber-500/20 focus-premium'
           >
             <span className="relative z-10">Explore Projects</span>
             <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </a>
         </div>
       </div>
     </div>
   </div>

   {/* Scroll Indicator */}
   <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
     <div className='glass-gold px-3 py-2 rounded-lg'>
       <span className='font-body text-gray-300 text-xs'>Scroll to explore • Drag to navigate</span>
     </div>
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

 {/* Premium Layout Section */}
 <section className='min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-stone-900 py-20' id='layout'>
   <div className='max-w-7xl mx-auto px-8'>
     {/* Premium Section Header */}
     <div className='text-center mb-16'>
       <div className='w-20 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mx-auto mb-8'></div>
       <h1 className='font-display text-5xl lg:text-7xl font-light text-white tracking-tight leading-none mb-6'>
         <span className='text-gradient-gold font-bold'>INTERIOR</span>
         <br />
         <span className='font-heading font-extralight text-gray-300 text-3xl lg:text-5xl tracking-[0.15em] uppercase'>
           LAYOUTS
         </span>
       </h1>
       <p className='font-body text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto'>
         Experience our meticulously crafted interior designs that blend luxury, functionality, and modern aesthetics.
       </p>
     </div>

     {/* Premium Layout Content */}
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
       
       {/* Interior Details Card */}
       <div className='order-2 lg:order-1'>
         <div className='glass-premium border border-amber-500/10 rounded-3xl p-8 lg:p-12 shadow-premium'>
           <div className='space-y-8'>
             <div>
               <div className='flex items-center gap-4 mb-6'>
                 <div className='w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500'></div>
                 <span className='font-heading text-amber-400 text-sm uppercase tracking-wider'>Premium Living</span>
               </div>
               <h2 className='font-display text-3xl lg:text-4xl font-bold text-gradient-gold mb-6'>
                 Luxury Interior Design
               </h2>
               <p className='font-body text-gray-300 leading-relaxed text-lg mb-8'>
                 Discover this luxurious and fully furnished residence spanning 320 square meters, offering a perfect blend of elegance and comfort. This spacious home features beautifully designed bedrooms and state-of-the-art amenities.
               </p>
             </div>

             {/* Premium Features Grid */}
             <div className='grid grid-cols-2 gap-6'>
               <div className='glass-gold p-4 rounded-xl'>
                 <div className='flex items-center gap-3 mb-2'>
                   <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                     <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v4M16 5v4" />
                     </svg>
                   </div>
                   <h4 className='font-heading text-amber-200 font-semibold'>2 Bedrooms</h4>
                 </div>
                 <p className='font-body text-gray-300 text-sm'>Spacious & comfortable</p>
               </div>

               <div className='glass-gold p-4 rounded-xl'>
                 <div className='flex items-center gap-3 mb-2'>
                   <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                     <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                     </svg>
                   </div>
                   <h4 className='font-heading text-amber-200 font-semibold'>2 Kitchens</h4>
                 </div>
                 <p className='font-body text-gray-300 text-sm'>Granite countertops</p>
               </div>

               <div className='glass-gold p-4 rounded-xl'>
                 <div className='flex items-center gap-3 mb-2'>
                   <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                     <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                   </div>
                   <h4 className='font-heading text-amber-200 font-semibold'>320 sqm</h4>
                 </div>
                 <p className='font-body text-gray-300 text-sm'>Spacious living area</p>
               </div>

               <div className='glass-gold p-4 rounded-xl'>
                 <div className='flex items-center gap-3 mb-2'>
                   <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center'>
                     <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                     </svg>
                   </div>
                   <h4 className='font-heading text-amber-200 font-semibold'>Furnished</h4>
                 </div>
                 <p className='font-body text-gray-300 text-sm'>Move-in ready</p>
               </div>
             </div>

             {/* Premium CTA */}
             <div className='pt-6'>
               <a 
                 href='https://wa.me/+919850455290' 
                 className='inline-flex items-center gap-3 btn-premium font-heading px-6 py-3 text-sm border border-amber-500/20 focus-premium'
               >
                 <span className="relative z-10">View Full Details</span>
                 <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </a>
             </div>
           </div>
         </div>
       </div>

       {/* 3D Visualization */}
       <div className='order-1 lg:order-2'>
         <div className='glass-premium border border-amber-500/10 rounded-3xl p-8 shadow-premium'>
           <div className='bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl h-96 lg:h-[500px] border border-amber-500/10 relative overflow-hidden'>
             {/* 3D Model takes full container */}
             <In/>
             
             {/* Floating title overlay */}
             <div className='absolute top-4 left-4 glass-gold px-4 py-2 rounded-lg z-10'>
               <h3 className='font-display text-lg text-gradient-gold font-semibold'>3D Interior Preview</h3>
               <p className='font-body text-gray-400 text-xs'>Interactive layout visualization</p>
             </div>
           </div>
         </div>
       </div>

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