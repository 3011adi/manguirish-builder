'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
const Home = () => {
    const [borderRadius1, setBorderRadius1] = useState('54% 46% 27% 73% / 71% 43% 57% 29% ');
  const [borderRadius2, setBorderRadius2] = useState('76% 24% 27% 73% / 65% 56% 44% 35%');
  const [borderRadius3, setBorderRadius3] = useState('6% 94% 9% 91% / 57% 43% 57% 43% ');
  useEffect(() => {
    const interval1 = setInterval(() => {
      const newBorderRadius = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% / ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
      setBorderRadius1(newBorderRadius);
    }, 30);
    
    const interval2 = setInterval(() => {
      const newBorderRadius = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% / ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
      setBorderRadius2(newBorderRadius);
    }, 35);

    const interval3 = setInterval(() => {
      const newBorderRadius = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% / ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
      setBorderRadius3(newBorderRadius);
    }, 30);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);
  return (
    <div> <section className='bg-gradient-to-l from-black to-gray-800'>
    <div className='grid grid-cols-10'>
     <div className='bg-red-6 col-span-1 flex items-center justify-center   '>
     <div className='rotate-90 bg-gradient-to-l from-red-600 to-blue-600 px-20 opacity-85 rounded-ss-full rounded-ee-full fixed shadow-sm shadow-red-500 m-5'>
<h1 className='text-9xl leading-none font-serif  font-semibold'>our  projects</h1>
</div>
     </div>
     <div className='flex items-center justify-center  col-span-4 '>
<div className='px-12'>
<h1 className='text-8xl font-semibold text-white font-serif' >manguirish builders</h1>
<h1 className='text-3xl text-cyan-500 font-sans3 '>quality constructions </h1>
</div>
</div>
     <div className=' col-span-5 px' >
   <div className='h-screen flex items-center pt-24 p-12 '>
  <div className='bg-blue-600 w-[600px] h-[500px] bg-opacity-50 absolute shadow-lg shadow-blue-600 transition-all ' style={{borderRadius: borderRadius1}}></div>
  <div className='bg-red-600 w-[615px] h-[500px] bg-opacity-50 absolute shadow-lg shadow-red-600 transition-all ' style={{borderRadius: borderRadius2}}></div>
  <div className='bg-green-600 w-[580px] h-[530px] bg-opacity-50  absolute shadow-lg shadow-green-600 transition-all ' style={{borderRadius: borderRadius3}}></div>
  <div className='flex items-center justify-center  h-[600px] w-[580px] z-10 '>
<Image
className=' pb-  '
src="/assets/Group 6.png" // Route of the image file
height={300} // Desired size
width={240}
alt="Description of the image"
/>
</div>
</div>
</div>



</div>
</section></div>
  )
}

export default Home