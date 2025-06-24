'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Nav from '../nav';

const Home = () => {
  const [borderRadius1, setBorderRadius1] = useState('54% 46% 27% 73% / 71% 43% 57% 29% ');
  const [borderRadius2, setBorderRadius2] = useState('76% 24% 27% 73% / 65% 56% 44% 35%');
  const [borderRadius3, setBorderRadius3] = useState('6% 94% 9% 91% / 57% 43% 57% 43% ');

  // Refined blob animation with professional timing
  useEffect(() => {
    const interval1 = setInterval(() => {
      const newBorderRadius = `${45 + Math.floor(Math.random() * 20)}% ${35 + Math.floor(Math.random() * 20)}% ${40 + Math.floor(Math.random() * 20)}% ${50 + Math.floor(Math.random() * 20)}% / ${55 + Math.floor(Math.random() * 15)}% ${40 + Math.floor(Math.random() * 15)}% ${45 + Math.floor(Math.random() * 15)}% ${35 + Math.floor(Math.random() * 15)}%`;
      setBorderRadius1(newBorderRadius);
    }, 200);
    
    const interval2 = setInterval(() => {
      const newBorderRadius = `${50 + Math.floor(Math.random() * 25)}% ${30 + Math.floor(Math.random() * 25)}% ${45 + Math.floor(Math.random() * 25)}% ${55 + Math.floor(Math.random() * 25)}% / ${60 + Math.floor(Math.random() * 20)}% ${35 + Math.floor(Math.random() * 20)}% ${50 + Math.floor(Math.random() * 20)}% ${40 + Math.floor(Math.random() * 20)}%`;
      setBorderRadius2(newBorderRadius);
    }, 250);

    const interval3 = setInterval(() => {
      const newBorderRadius = `${40 + Math.floor(Math.random() * 30)}% ${45 + Math.floor(Math.random() * 30)}% ${35 + Math.floor(Math.random() * 30)}% ${60 + Math.floor(Math.random() * 30)}% / ${50 + Math.floor(Math.random() * 25)}% ${45 + Math.floor(Math.random() * 25)}% ${40 + Math.floor(Math.random() * 25)}% ${55 + Math.floor(Math.random() * 25)}%`;
      setBorderRadius3(newBorderRadius);
    }, 180);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className='relative overflow-hidden'> 
      <Nav />
      
      {/* Premium Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-stone-500/5 pointer-events-none"></div>

      <section className='bg-gradient-to-br from-slate-950 via-gray-900 to-stone-900 pt-20 lg:pt-0 lg:pl-24 relative'>
        <div className='flex flex-col lg:flex-row min-h-screen'>
          <div className='flex items-center justify-center lg:w-[50%] w-full py-16 lg:py-0 relative z-20'>
            <div className='px-8 sm:px-10 lg:px-16 space-y-6 lg:space-y-8 text-center lg:text-left max-w-2xl'>
              
              {/* Premium Brand Line */}
              <div className='w-20 lg:w-32 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mx-auto lg:mx-0 mb-6'></div>

              <div className='space-y-4 lg:space-y-6'>
                <div className='space-y-2'>
                  <h1 className='font-display text-5xl sm:text-6xl lg:text-8xl font-light text-white tracking-tight leading-none'>
                    <span className='block font-serif text-gray-300 text-5xl sm:text-6xl lg:text-8xl mb-2 tracking-[0.15em] uppercase'>
                    L&L
                  </span>
                    <span className='font-display text-gradient-gold font-bold tracking-tighter'>
                      BUILDERS
                    </span>
                  </h1>
                </div>
                
                <h2 className='font-heading text-sm sm:text-base lg:text-lg text-amber-200/90 font-medium tracking-[0.2em] uppercase'>
                  EXCELLENCE IN CONSTRUCTION & ARCHITECTURE
                </h2>

                <p className='font-body text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light'>
                  Delivering architectural excellence and construction mastery through innovative design, 
                  superior craftsmanship, and unwavering commitment to quality.
                </p>
              </div>

              {/* Premium Statistics */}
              <div className='grid grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-12'>
                <div className='text-center lg:text-left'>
                  <div className='font-display text-2xl lg:text-3xl font-bold text-gradient-gold'>500+</div>
                  <div className='font-heading text-xs lg:text-sm text-gray-400 uppercase tracking-wider'>Projects</div>
                </div>
                <div className='text-center lg:text-left'>
                  <div className='font-display text-2xl lg:text-3xl font-bold text-gradient-gold'>25+</div>
                  <div className='font-heading text-xs lg:text-sm text-gray-400 uppercase tracking-wider'>Years</div>
                </div>
                <div className='text-center lg:text-left'>
                  <div className='font-display text-2xl lg:text-3xl font-bold text-gradient-gold'>100%</div>
                  <div className='font-heading text-xs lg:text-sm text-gray-400 uppercase tracking-wider'>Quality</div>
                </div>
              </div>
              
              {/* Premium Call to Action */}
              <div className='pt-8 lg:pt-12'>
                <button 
                  onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                  className='group btn-premium font-heading px-8 lg:px-12 py-4 lg:py-5 text-sm lg:text-base border border-amber-500/20 focus-premium hover:scale-105 transition-transform duration-300'
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Portfolio
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
     
          <div className='hidden md:flex h-[60vh] sm:h-[70vh] lg:h-screen items-center justify-center lg:w-[50%] w-full relative overflow-hidden'>
            {/* Sophisticated Morphing Blobs */}
            <div 
              className='bg-gradient-to-br from-amber-500/15 to-yellow-600/10 w-[300px] sm:w-[400px] lg:w-[550px] h-[250px] sm:h-[350px] lg:h-[450px] absolute shadow-2xl shadow-amber-500/20 backdrop-blur-sm border border-amber-500/10 transition-all duration-1000' 
              style={{borderRadius: borderRadius1}}
            ></div>
            <div 
              className='bg-gradient-to-br from-stone-400/20 to-gray-500/15 w-[320px] sm:w-[420px] lg:w-[570px] h-[260px] sm:h-[360px] lg:h-[470px] absolute shadow-2xl shadow-stone-400/20 backdrop-blur-sm border border-stone-400/10 transition-all duration-1000' 
              style={{borderRadius: borderRadius2}}
            ></div>
            <div 
              className='bg-gradient-to-br from-white/5 to-gray-200/10 w-[280px] sm:w-[380px] lg:w-[530px] h-[270px] sm:h-[370px] lg:h-[490px] absolute shadow-2xl shadow-white/10 backdrop-blur-sm border border-white/5 transition-all duration-1000' 
              style={{borderRadius: borderRadius3}}
            ></div>
            
            {/* Premium Image Container */}
            <div className='flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[600px] w-[290px] sm:w-[380px] lg:w-[580px] z-10 relative'>
              <div className="relative group cursor-pointer hover:scale-105 transition-transform duration-500">
                <Image
                  className='drop-shadow-2xl'
                  src="/assets/Group 6.png"
                  height={400}
                  width={320}
                  alt="Premium Construction Excellence"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '500px',
                    maxHeight: '600px',
                    filter: 'drop-shadow(0 25px 60px rgba(245, 158, 11, 0.25)) brightness(1.1) contrast(1.05)'
                  }}
                />
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/15 to-yellow-500/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home