import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-950 via-gray-900 to-stone-900 relative overflow-hidden' id='abt'>
      {/* Premium Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10'></div>
      </div>

      {/* Main Footer Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-8 py-20'>
        {/* Premium Section Header */}
        <div className='text-center mb-16'>
          <div className='w-20 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mx-auto mb-8'></div>
          <h2 className='font-display text-4xl lg:text-5xl font-light text-white tracking-tight leading-none mb-6'>
            <span className='text-gradient-gold font-bold'>GET IN</span>
            <br />
            <span className='font-heading font-extralight text-gray-300 text-2xl lg:text-3xl tracking-[0.15em] uppercase'>
              TOUCH
            </span>
          </h2>
        </div>

        {/* Premium Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16'>
          
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <div className='glass-premium border border-amber-500/10 rounded-2xl p-6 shadow-premium text-center lg:text-left'>
              <div className='mb-6'>
                <h1 className='font-display text-2xl lg:text-3xl font-bold text-gradient-gold mb-2'>
                  Manguirish
                </h1>
                <span className='font-heading text-amber-200 text-lg uppercase tracking-wider'>
                  Builders
                </span>
              </div>
              <p className='font-body text-gray-300 text-sm leading-relaxed'>
                Premium construction company delivering excellence in residential and commercial projects across Goa.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <div className='glass-premium border border-amber-500/10 rounded-2xl p-6 shadow-premium'>
              <h3 className='font-heading text-amber-400 text-lg uppercase tracking-wider mb-6 flex items-center gap-3'>
                <div className='w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500'></div>
                Navigation
              </h3>
              <div className='space-y-4'>
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#vision', label: 'Vision' },
                  { href: '#upcoming', label: 'Projects' },
                  { href: '#layout', label: 'Layouts' },
                  { href: '#details', label: 'Details' },
                  { href: '#about', label: 'About Us' }
                ].map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className='font-body text-gray-300 hover:text-amber-300 transition-colors duration-300 block group'
                  >
                    <span className='relative'>
                      {link.label}
                      <span className='absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full'></span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className='lg:col-span-1'>
            <div className='glass-premium border border-amber-500/10 rounded-2xl p-6 shadow-premium'>
              <h3 className='font-heading text-amber-400 text-lg uppercase tracking-wider mb-6 flex items-center gap-3'>
                <div className='w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500'></div>
                Contact
              </h3>
              <div className='space-y-4'>
                <a 
                  href='tel:+919322985826' 
                  className='group flex items-center gap-3 font-body text-gray-300 hover:text-amber-300 transition-colors duration-300'
                >
                  <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300'>
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+91 9322985826</span>
                </a>
                
                <a 
                  href='mailto:mangirish.builders@gmail.com' 
                  className='group flex items-center gap-3 font-body text-gray-300 hover:text-amber-300 transition-colors duration-300'
                >
                  <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300'>
                    <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className='text-sm'>mangirish.builders@gmail.com</span>
                </a>

                <a 
                  href='https://wa.me/+919322985826' 
                  className='group flex items-center gap-3 font-body text-gray-300 hover:text-amber-300 transition-colors duration-300'
                >
                  <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300'>
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                    </svg>
                  </div>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className='lg:col-span-1'>
            <div className='glass-premium border border-amber-500/10 rounded-2xl p-6 shadow-premium'>
              <h3 className='font-heading text-amber-400 text-lg uppercase tracking-wider mb-6 flex items-center gap-3'>
                <div className='w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500'></div>
                Address
              </h3>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mt-1'>
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className='font-body text-gray-300 text-sm leading-relaxed'>
                  Opposite To Hotel Spice Goa, Near Karaswada Sicle, Mapusa, North Goa, Goa
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Premium Back to Top */}
        <div className='flex justify-center mb-12'>
          <a href='#home' className='group'>
            <div className='glass-gold border border-amber-500/20 rounded-full p-4 shadow-gold hover:shadow-premium transition-all duration-500 hover:scale-110'>
              <svg 
                className='w-10 h-10 text-amber-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-amber-300' 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 15l7-7 7 7" 
                />
              </svg>
            </div>
          </a>
        </div>

        {/* Premium Divider */}
        <div className='w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-8'></div>

        {/* Premium Footer Bottom */}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
          <p className='font-body text-gray-400 text-sm'>
            © 2024 <span className='text-gradient-gold font-semibold'>Manguirish Builders</span>. All rights reserved.
          </p>
          <div className='flex items-center gap-6'>
            <a href='#' className='font-body text-gray-400 hover:text-amber-300 text-sm transition-colors duration-300'>
              Privacy Policy
            </a>
            <a href='#' className='font-body text-gray-400 hover:text-amber-300 text-sm transition-colors duration-300'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer