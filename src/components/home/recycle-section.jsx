'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function RecycleSection() {
  const backgroundIconsRef = useRef([])
  const titleIconRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Floating animation for background icons
    backgroundIconsRef.current.forEach((icon) => {
      gsap.to(icon, {
        y: "20px",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    })

    // Title icon and heading animation
    gsap.from(titleIconRef.current, {
      scale: 0,
      rotate: -180,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: titleIconRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })

    // Cards stagger animation
    gsap.from(cardsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return (
    <section
      className={`relative bg-[url('/images/background/recycle-background.png')] bg-cover bg-no-repeat py-20 overflow-hidden`}
    >
      {/* Decorative faded recycle icons */}
      <img
        ref={el => backgroundIconsRef.current[0] = el}
        src="/shapes/recycle.png"
        alt="Recycle Icon"
        className="absolute left-0 top-10 w-[120px] opacity-10 pointer-events-none select-none hidden md:block"
      />
      <img
        ref={el => backgroundIconsRef.current[1] = el}
        src="/shapes/recycle.png"
        alt="Recycle Icon"
        className="absolute right-0 bottom-10 w-[120px] opacity-10 pointer-events-none select-none hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center mb-14">
          <img
            ref={titleIconRef}
            src="/shapes/recycle.png"
            alt="Recycle Icon"
            className="w-[70px] mb-2 drop-shadow-lg"
          />
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-[#1A377B] text-center mt-2 tracking-tight"
          >
            Recycling & Circular Economy
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* Left column */}
          <div className="flex flex-col md:gap-10">
            <div 
              // ref={el => cardsRef.current[0] = el}
              className="p-8 hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-[#1760A0] mb-3">
                Waste Management Planning
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Strategic site and operational waste planning aligned with the waste hierarchy to minimize landfill dependency and maximize material reuse.
              </p>
            </div>
            <div 
              // ref={el => cardsRef.current[1] = el}
              className="p-8 hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-[#1760A0] mb-3">
                Material Management Solutions
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Detailed assessment of waste streams (inert, non-hazardous, hazardous) to optimize disposal routes, recycling options, and treatment alternatives.
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col justify-center h-full">
            <div 
              // ref={el => cardsRef.current[2] = el}
              className="p-8 hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-[#1760A0] mb-3">
                Pre-Demolition Audits
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Audits conducted before demolition or redevelopment to identify materials for reuse or recycling, supporting BREEAM credits and circularity goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}