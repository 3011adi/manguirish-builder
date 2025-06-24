import React, { useState } from 'react'

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Premium Vertical Nav for Large Devices */}
      <nav className='hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 h-[70vh] rounded-2xl mr-4 glass-premium shadow-premium z-50 flex-col items-center justify-center border border-amber-500/10'>
        <div className='flex flex-col items-center justify-center space-y-12 h-full  w-full '>
          <a 
            href='#home' 
            className='group text-gray-300 hover:text-amber-400 p-1 py-3 text-sm font-heading font-medium transition-all duration-500 transform -rotate-90 whitespace-nowrap hover:scale-110 relative'
          >
            <span className="relative z-10">HOME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
          <a 
            href='#layout' 
            className='group text-gray-300 hover:text-amber-400 p-1 py-3 text-sm font-heading font-medium transition-all duration-500 transform -rotate-90 whitespace-nowrap hover:scale-110 relative'
          >
            <span className="relative z-10">PROJECTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
          <a 
            href='#upcoming' 
            className='group text-gray-300 hover:text-amber-400 p-1 py-3 text-sm font-heading font-medium transition-all duration-500 transform -rotate-90 whitespace-nowrap hover:scale-110 relative'
          >
            <span className="relative z-10">SERVICES</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
          <a 
            href='#details' 
            className='group text-gray-300 hover:text-amber-400 p-1 py-3 text-sm font-heading font-medium transition-all duration-500 transform -rotate-90 whitespace-nowrap hover:scale-110 relative'
          >
            <span className="relative z-10">PORTFOLIO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
          <a 
            href='#about' 
            className='group text-gray-300 hover:text-amber-400 p-1  py-3 text-sm font-heading font-medium transition-all duration-500 transform -rotate-90 whitespace-nowrap hover:scale-110 relative'
          >
            <span className="relative z-10">ABOUT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-amber-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
          
          {/* Premium Contact Button */}
          <a 
            href='https://wa.me/+919322985826' 
            className='group rounded-lg btn-premium px-2 py-3 text-xs font-heading transform -rotate-90 whitespace-nowrap hover:scale-110 focus-premium border border-amber-500/20 relative overflow-hidden'
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT
              <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
              </svg>
            </span>
          </a>
        </div>
      </nav>

      {/* Premium Horizontal Nav for Small/Medium Devices */}
      <nav className='lg:hidden glass-premium border-b border-amber-500/10 fixed top-0 left-0 right-0 z-50 w-full shadow-premium'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Premium Logo/Brand */}
            <div className='flex-shrink-0'>
              <div className='flex flex-col'>
                <span className='font-display text-xl font-bold text-gradient-gold'>
                  L&L
                </span>
                <span className='font-heading text-xs text-amber-200/70 tracking-[0.2em] uppercase -mt-1'>
                  BUILDERS
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className='hidden md:block'>
              <div className='flex items-center space-x-8'>
                <a 
                  href='#home' 
                  className='group font-heading text-gray-300 hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider relative'
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a 
                  href='#layout' 
                  className='group font-heading text-gray-300 hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider relative'
                >
                  <span className="relative z-10">Projects</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a 
                  href='#upcoming' 
                  className='group font-heading text-gray-300 hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider relative'
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a 
                  href='#details' 
                  className='group font-heading text-gray-300 hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider relative'
                >
                  <span className="relative z-10">Portfolio</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a 
                  href='#about' 
                  className='group font-heading text-gray-300 hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider relative'
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                </a>
                <a 
                  href='https://wa.me/+919850455290' 
                  className='btn-premium font-heading px-6 py-2 text-sm border border-amber-500/20 focus-premium'
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-gray-300 hover:text-amber-400 p-2 transition-colors duration-300 focus-premium'
              >
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className='px-2 pt-2 pb-6 space-y-1 border-t border-amber-500/10'>
              <a 
                href='#home' 
                className='block font-heading text-gray-300 hover:text-amber-400 px-3 py-3 text-base font-medium transition-colors duration-300 uppercase tracking-wider hover:bg-amber-500/5 rounded-lg'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href='#layout' 
                className='block font-heading text-gray-300 hover:text-amber-400 px-3 py-3 text-base font-medium transition-colors duration-300 uppercase tracking-wider hover:bg-amber-500/5 rounded-lg'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href='#upcoming' 
                className='block font-heading text-gray-300 hover:text-amber-400 px-3 py-3 text-base font-medium transition-colors duration-300 uppercase tracking-wider hover:bg-amber-500/5 rounded-lg'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href='#details' 
                className='block font-heading text-gray-300 hover:text-amber-400 px-3 py-3 text-base font-medium transition-colors duration-300 uppercase tracking-wider hover:bg-amber-500/5 rounded-lg'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href='#about' 
                className='block font-heading text-gray-300 hover:text-amber-400 px-3 py-3 text-base font-medium transition-colors duration-300 uppercase tracking-wider hover:bg-amber-500/5 rounded-lg'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href='https://wa.me/+919850455290' 
                className='block mt-4 btn-premium font-heading px-6 py-3 text-center border border-amber-500/20 focus-premium'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav