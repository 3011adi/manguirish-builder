import React from 'react'

const Nav = () => {
  return (
    <>
      {/* Vertical Nav for Large Devices */}
      <nav className='hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 h-[80vh] rounded-xl m-2 bg-gradient-to-b from-amber-500/20 to-orange-600/20 backdrop-blur-sm border-r border-amber-500/30 z-50 flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center  space-y-14 h-full w-full'>
          <a href='#home' className='text-white hover:text-amber-400 p-2 text-sm font-medium font-serif transition-colors duration-300 transform -rotate-90 whitespace-nowrap'>
            Home
          </a>
          <a href='#layout' className='text-white hover:text-amber-400 p-2 text-sm font-medium font-serif transition-colors duration-300 transform -rotate-90 whitespace-nowrap'>
            Layout
          </a>
          <a href='#upcoming' className='text-white hover:text-amber-400 p-2 text-sm font-medium font-serif transition-colors duration-300 transform -rotate-90 whitespace-nowrap'>
            Upcoming
          </a>
          <a href='#details' className='text-white hover:text-amber-400 p-2 text-sm font-medium font-serif transition-colors duration-300 transform -rotate-90 whitespace-nowrap'>
            Details
          </a>
          <a href='#about' className='text-white hover:text-amber-400 p-2 text-sm font-medium font-serif transition-colors duration-300 transform -rotate-90 whitespace-nowrap'>
            About
          </a>
          <a href='https://wa.me/+919850455290' className='bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-3 py-2 rounded-lg text-xs font-medium font-serif transition-all duration-300 shadow-lg transform -rotate-90 whitespace-nowrap'>
            Contact
          </a>
        </div>
      </nav>

      {/* Horizontal Nav for Small Devices */}
      <nav className='lg:hidden bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm border-b border-amber-500/30 fixed top-0 left-0 right-0 z-50 w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo/Brand */}
            <div className='flex-shrink-0'>
              <span className='text-lg font-serif font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
                Manguirish
              </span>
            </div>
            
            {/* Navigation Links */}
            <div className='hidden sm:block'>
              <div className='flex items-center space-x-4'>
                <a href='#home' className='text-white hover:text-amber-400 px-2 py-1 text-xs font-medium font-serif transition-colors duration-300'>
                  Home
                </a>
                <a href='#layout' className='text-white hover:text-amber-400 px-2 py-1 text-xs font-medium font-serif transition-colors duration-300'>
                  Layout
                </a>
                <a href='#upcoming' className='text-white hover:text-amber-400 px-2 py-1 text-xs font-medium font-serif transition-colors duration-300'>
                  Upcoming
                </a>
                <a href='#details' className='text-white hover:text-amber-400 px-2 py-1 text-xs font-medium font-serif transition-colors duration-300'>
                  Details
                </a>
                <a href='#about' className='text-white hover:text-amber-400 px-2 py-1 text-xs font-medium font-serif transition-colors duration-300'>
                  About
                </a>
                <a href='https://wa.me/+919850455290' className='bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-3 py-1 rounded-lg text-xs font-medium font-serif transition-all duration-300 shadow-lg'>
                  Contact
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className='sm:hidden'>
              <button className='text-white hover:text-amber-400 p-2'>
                <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav