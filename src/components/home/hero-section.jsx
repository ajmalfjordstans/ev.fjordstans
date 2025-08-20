'use client'
import Link from "next/link";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const logoRef = useRef(null);
  const listItemsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Logo breathing animation
    gsap.to(logoRef.current, {
      scale: 1.05,
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Staggered entrance for list items
    gsap.from(listItemsRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Button entrance
    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 1,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <section className="bg-[#1A377B] text-white px-8 py-20 relative overflow-hidden">
      {/* Large faded logo background */}
      <div
        ref={logoRef}
        className="absolute right-0 bottom-0 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <img
          src="/logos/fjordstans/fj-logo-blurred.svg"
          alt="Fjordstans Logo Large"
          className="w-[350px] h-[350px]"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <ul className="space-y-4 md:text-5xl font-bold leading-tight">
          {["· EV Charging", "· Environmental", "· Recycling ", "· Engineering"].map((item, index) => (
            <li
              key={item}
              ref={el => listItemsRef.current[index] = el}
            >
              {item}
            </li>
          ))}
        </ul>
        <Link href="https://wa.me/+447501371000">
          <button
            // ref={buttonRef}
            className="mt-12 bg-white text-[#1A377B] px-6 py-2 rounded-full font-semibold md:text-2xl 
              shadow hover:cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Get in touch
          </button>
        </Link>
      </div>
    </section>
  );
}