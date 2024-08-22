import React from 'react'

const Nav = () => {
  return (
    <div className='rotate-90 bg-gradient-to-l from-red-600 to-blue-600 px-8 my-16  m-6 opacity-85 rounded-ss-full p-4 rounded-ee-full fixed flex '>
   <a href='#home' className='text-3xl leading-none font-serif hover:text-white   font-semibold p-2'>home</a>
    <a href='#layout' className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>layout</a>
    <a href='#upcoming' className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>upcoming</a>
    <a href='#details' className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>details</a>
    <a href='#about' className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>about us</a>
    <a href='https://wa.me/+919850455290' className='text-3xl leading-none font-serif  font-semibold p-2 px-6 hover:bg-white hover:text-black bg-black rounded-ss-full rounded-ee-full text-white'>contacts</a>
    </div>
  )
}

export default Nav