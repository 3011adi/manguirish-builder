import React from 'react'

const Nav = () => {
  return (
    <div className='rotate-90 bg-gradient-to-l from-red-600 to-blue-600 px-8 my-16  m-6 opacity-85 rounded-ss-full p-4 rounded-ee-full fixed flex '>
   <h1 className='text-3xl leading-none font-serif hover:text-white   font-semibold p-2'>home</h1>
    <h1 className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>layout</h1>
    <h1 className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>upcoming</h1>
    <h1 className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>details</h1>
    <h1 className='text-3xl leading-none font-serif hover:text-white font-semibold p-2'>about us</h1>
    <h1 className='text-3xl leading-none font-serif  font-semibold p-2 px-6 hover:bg-white hover:text-black bg-black rounded-ss-full rounded-ee-full text-white'>contacts</h1>
    </div>
  )
}

export default Nav