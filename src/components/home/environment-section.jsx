'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function EnvironmentSection() {
  const sectionRef = useRef(null)
  const circlesRef = useRef([])
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate background circles
    circlesRef.current.forEach((circle, index) => {
      gsap.from(circle, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        },
        delay: index * 0.2
      })
    })

    // Animate content
    const contentElements = contentRef.current.children
    gsap.from(contentElements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })

    // Animate eco earth image
    gsap.from(imageRef.current, {
      scale: 0.8,
      rotate: -10,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })
  }, [])

  return (
    <section className="relative bg-[#F5F8FC] py-20 overflow-hidden" ref={sectionRef}>
      {/* Left background circles */}
      <div className="absolute left-0 top-0 z-0">
        <div 
          ref={el => circlesRef.current[0] = el}
          className="bg-[#CFDDC3] rounded-full w-[350px] h-[350px] opacity-60 absolute left-[-120px] top-[-80px]" 
        />
        <div 
          ref={el => circlesRef.current[1] = el}
          className="bg-[#CFDDC3] rounded-full w-[120px] h-[120px] opacity-40 absolute left-[30px] top-[260px]" 
        />
      </div>
      {/* Right background circles */}
      <div className="absolute right-0 bottom-0 z-0">
        <div 
          ref={el => circlesRef.current[2] = el}
          className="bg-[#CFDDC3] rounded-full w-[220px] h-[220px] opacity-50 absolute right-[-80px] bottom-[-60px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-start" ref={contentRef}>
        {/* Left side */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-[#1A377B] mb-6">
            Environmental Services
          </h2>
          <h3 className="text-3xl font-bold text-black mb-2">
            Transport Infrastructure Integration
          </h3>
          <p className="text-gray-700 text-lg">
            Seamless integration of EV charging solutions within broader transport and mobility systems, employing digital tools for traffic planning and electrified infrastructure.
          </p>
        </div>
        {/* Right side */}
        <div className="flex-1">
          {/* Top right illustration */}
          <img
            ref={imageRef}
            src="/shapes/eco-earth-leaves.png"
            alt="Eco Earth"
            className="w-[220px] pointer-events-none select-none mx-auto py-4 hidden md:block"
          />
          <h3 className="text-3xl font-bold text-black mb-2">
            End-To-End EV Charging Consultancy
          </h3>
          <p className="text-gray-700 text-lg">
            Comprehensive support—from feasibility and planning, through concept and detailed design, to permitting and operational delivery—ensuring efficient and compliant infrastructure roll-out.
          </p>
        </div>
      </div>
    </section>
  )
}