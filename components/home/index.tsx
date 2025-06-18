'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Nav from '../nav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const Home = () => {
  const [borderRadius1, setBorderRadius1] = useState('54% 46% 27% 73% / 71% 43% 57% 29% ');
  const [borderRadius2, setBorderRadius2] = useState('76% 24% 27% 73% / 65% 56% 44% 35%');
  const [borderRadius3, setBorderRadius3] = useState('6% 94% 9% 91% / 57% 43% 57% 43% ');
  
  // Refs for GSAP animations
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const imageRef = useRef(null);
  const particleContainerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      createFloatingParticles();
      
      // Initial animations timeline
      const tl = gsap.timeline();
      
      // Animate hero text with stagger effect
      tl.fromTo(heroTextRef.current?.children || [], {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotationX: -90,
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      })
      
      // Typewriter effect for subtitle
      .fromTo(subtitleRef.current, {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.5,
      })
      .to(subtitleRef.current, {
        text: "Premium Quality Constructions",
        duration: 2,
        ease: "none",
      })
      
      // Description slide in
      .fromTo(descriptionRef.current, {
        x: -100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      })
      
      // Button pop in with bounce
      .fromTo(buttonRef.current, {
        scale: 0,
        rotation: 180,
      }, {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)",
      });

      // Continuous blob morphing with GSAP
      gsap.to(blob1Ref.current, {
        borderRadius: "30% 70% 50% 50% / 60% 40% 60% 40%",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob2Ref.current, {
        borderRadius: "60% 40% 30% 70% / 80% 20% 80% 20%",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(blob3Ref.current, {
        borderRadius: "80% 20% 60% 40% / 40% 60% 40% 60%",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating animation for blobs
      gsap.to([blob1Ref.current, blob2Ref.current, blob3Ref.current], {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

      // Image floating and rotation
      gsap.to(imageRef.current, {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Glow pulse effect
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll-triggered animations
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(containerRef.current, {
            backgroundPosition: "0% 100%",
            duration: 1,
          });
        },
        onLeave: () => {
          gsap.to(containerRef.current, {
            backgroundPosition: "100% 0%",
            duration: 1,
          });
        },
      });

      // Parallax effect
      gsap.to(blob1Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
        ease: "none",
      });

      gsap.to(blob2Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        ease: "none",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const createFloatingParticles = () => {
    const particleContainer = particleContainerRef.current;
    if (!particleContainer) return;

    // Clear existing particles
    particleContainer.innerHTML = '';

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-70';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particleContainer.appendChild(particle);

      // Animate particle
      gsap.to(particle, {
        y: "random(-200, 200)",
        x: "random(-200, 200)",
        scale: "random(0.5, 2)",
        opacity: "random(0.3, 1)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });

      // Rotation animation
      gsap.to(particle, {
        rotation: 360,
        duration: "random(3, 8)",
        repeat: -1,
        ease: "none",
      });
    }
  };

  // Mouse move parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;

    gsap.to([blob1Ref.current, blob2Ref.current, blob3Ref.current], {
      x: xPos,
      y: yPos,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.1,
    });
  };

  // Enhanced blob animation with performance optimization
  useEffect(() => {
    const interval1 = setInterval(() => {
      const newBorderRadius = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% / ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
      setBorderRadius1(newBorderRadius);
    }, 100);
    
    const interval2 = setInterval(() => {
      const newBorderRadius = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% / ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
      setBorderRadius2(newBorderRadius);
    }, 120);

    const interval3 = setInterval(() => {
      const newBorderRadius = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% / ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
      setBorderRadius3(newBorderRadius);
    }, 80);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div ref={containerRef} className='relative overflow-hidden' onMouseMove={handleMouseMove}> 
      <Nav />
      
      {/* Floating Particles Container */}
      <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none z-10"></div>
      
      {/* Background Glow Effect */}
      <div 
        ref={glowRef}
        className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 pointer-events-none"
      ></div>

      <section className='bg-gradient-to-l from-black via-gray-900 to-gray-800 pt-16 lg:pt-0 lg:pl-20 relative'>
        <div className='flex flex-col lg:flex-row min-h-screen'>
          <div className='flex items-center justify-center lg:w-[50%] w-full py-12 lg:py-0 relative z-20'>
            <div className='px-6 sm:px-8 lg:px-12 space-y-4 lg:space-y-6 text-center lg:text-left'>
              <div className='space-y-3 lg:space-y-4'>
                <div ref={heroTextRef} className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-serif leading-tight'>
                  <span className='bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
                    manguirish
                  </span>
                  <br />
                  <span className='text-white inline-block transform hover:scale-110 transition-transform duration-300 cursor-pointer'>builders</span>
                </div>
                <div className='w-16 lg:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto lg:mx-0 transform origin-left'></div>
                <h2 ref={subtitleRef} className='text-lg sm:text-xl lg:text-2xl text-gray-300 font-light tracking-wide min-h-[2rem]'>
                  {/* Text will be animated here */}
                </h2>
                <p ref={descriptionRef} className='text-gray-400 text-base lg:text-lg leading-relaxed max-w-sm lg:max-w-md mx-auto lg:mx-0'>
                  Crafting exceptional spaces with precision, innovation, and unmatched quality since decades.
                </p>
              </div>
              
              {/* Call to Action */}
              <div className='pt-6 lg:pt-8'>
                <button 
                  ref={buttonRef}
                  className='relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group'
                  onMouseEnter={(e) => {
                    gsap.to(e.target, {
                      scale: 1.1,
                      rotation: 2,
                      duration: 0.3,
                      ease: "back.out(1.7)"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, {
                      scale: 1,
                      rotation: 0,
                      duration: 0.3,
                      ease: "back.out(1.7)"
                    });
                  }}
                >
                  <span className="relative z-10">Explore Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
     
          <div className='h-[60vh] sm:h-[70vh] lg:h-screen flex items-center justify-center lg:w-[50%] w-full relative overflow-hidden'>
            {/* Enhanced Morphing Blobs */}
            <div 
              ref={blob1Ref}
              className='bg-gradient-to-br from-orange-500/20 to-red-500/20 w-[300px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[350px] lg:h-[500px] absolute shadow-2xl shadow-orange-500/50 backdrop-blur-sm border border-orange-500/30' 
              style={{borderRadius: borderRadius1}}
            ></div>
            <div 
              ref={blob2Ref}
              className='bg-gradient-to-br from-amber-400/30 to-yellow-500/30 w-[310px] sm:w-[415px] lg:w-[615px] h-[250px] sm:h-[350px] lg:h-[500px] absolute shadow-2xl shadow-amber-400/50 backdrop-blur-sm border border-amber-400/30' 
              style={{borderRadius: borderRadius2}}
            ></div>
            <div 
              ref={blob3Ref}
              className='bg-gradient-to-br from-white/10 to-gray-300/20 w-[290px] sm:w-[380px] lg:w-[580px] h-[265px] sm:h-[365px] lg:h-[530px] absolute shadow-2xl shadow-white/30 backdrop-blur-sm border border-white/20' 
              style={{borderRadius: borderRadius3}}
            ></div>
            
            {/* Image Container with Enhanced Effects */}
            <div className='flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[600px] w-[290px] sm:w-[380px] lg:w-[580px] z-10 relative'>
              <div 
                ref={imageRef}
                className="relative group cursor-pointer"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.1,
                    rotationY: 10,
                    rotationX: 5,
                    duration: 0.5,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.5,
                    ease: "power2.out"
                  });
                }}
              >
                <Image
                  className='pb-0 drop-shadow-2xl'
                  src="/assets/Group 6.png"
                  height={300}
                  width={240}
                  alt="Description of the image"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '600px',
                    maxHeight: '500px',
                    filter: 'drop-shadow(0 25px 50px rgba(251, 191, 36, 0.3))'
                  }}
                />
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home