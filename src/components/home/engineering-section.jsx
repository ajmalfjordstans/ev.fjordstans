'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function EngineeringSection() {
  const circlesRef = useRef([])
  const titleRef = useRef(null)
  const logoRef = useRef(null)
  const contentRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Circle animations
    circlesRef.current.forEach((circle, index) => {
      gsap.from(circle, {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: circle,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      })
    })

    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })

    // Logo animation - continuous floating effect
    gsap.to(logoRef.current, {
      y: "20px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })

    // Content animations
    contentRef.current.forEach((content, index) => {
      gsap.from(content, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        delay: 0.2 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: content,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      })
    })
  }, [])

  return (
    <section className="relative bg-[#1A377B] py-20 overflow-hidden">
      {/* Decorative gradient circles */}
      <div className="absolute left-[-120px] top-[-80px] z-0" ref={el => circlesRef.current[0] = el}>
        <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#17408B] via-[#1A377B] to-[#3B5998] opacity-40" />
      </div>
      <div className="absolute left-[60px] top-[220px] z-0" ref={el => circlesRef.current[1] = el}>
        <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-br from-[#17408B] via-[#1A377B] to-[#3B5998] opacity-30" />
      </div>
      <div className="absolute right-[-80px] bottom-[-60px] z-0" ref={el => circlesRef.current[2] = el}>
        <div className="w-[220px] h-[220px] rounded-full bg-gradient-to-br from-[#17408B] via-[#1A377B] to-[#3B5998] opacity-40" />
      </div>
      <div className="absolute right-[60px] top-[60px] z-0" ref={el => circlesRef.current[3] = el}>
        <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#17408B] via-[#1A377B] to-[#3B5998] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-white text-center md:text-left mb-10 mx-auto">
          Engineering Excellence
        </h2>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          
          {/* Logo Centered */}
          <div className="flex-1 flex justify-center items-center">
            <img
              ref={logoRef}
              src="/logos/fjordstans/fj-logo.png"
              alt="Engineering Logo"
              className="w-full max-w-[540px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
              style={{ willChange: 'transform' }}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="space-y-10">
              <div 
                ref={el => contentRef.current[0] = el}
                className="transition-all duration-500 hover:bg-white/10 rounded-xl p-4"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Infrastructure & Systems Engineering
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Strategic site and operational waste planning aligned with the waste hierarchy to minimize landfill dependency and maximize material reuse.
                </p>
              </div>
              <div 
                ref={el => contentRef.current[1] = el}
                className="transition-all duration-500 hover:bg-white/10 rounded-xl p-4"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Digital & Sustainable Design
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Use of digital tools, BIM, and sustainable engineering principles to deliver environmentally efficient and future-proofed infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}