'use client'
import React, { useEffect, useRef } from 'react'

export default function EvSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="bg-[#E3F1FB] pt-8 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1A377B] mb-8 animate-on-scroll fade-in">
          Connected For A Greener Future
        </h2>
      </div>
      <div className={`bg-[url('/images/background/ev-charging.png')] bg-cover bg-no-repeat relative py-20`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-12 animate-on-scroll fade-in">
            EV Charging Services
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Card 1 */}
            <div className="bg-[#1760A0] rounded-2xl p-8 flex-1 min-w-[300px] shadow-lg hover:shadow-xl animate-on-scroll slide-in-left transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-2xl font-bold text-white mb-4">
                End-To-End EV Charging Consultancy
              </h4>
              <p className="text-white text-lg">
                Comprehensive support—from feasibility and planning, through concept and detailed design, to permitting and operational delivery—ensuring efficient and compliant infrastructure roll-out.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1760A0] rounded-2xl p-8 flex-1 min-w-[300px] shadow-lg hover:shadow-xl animate-on-scroll slide-in-right transition-all duration-300 hover:scale-[1.02]">
              <h4 className="text-2xl font-bold text-white mb-4">
                Transport Infrastructure Integration
              </h4>
              <p className="text-white text-lg">
                Seamless integration of EV charging solutions within broader transport and mobility systems, employing digital tools for traffic planning and electrified infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.show {
          opacity: 1;
          transform: translateX(0) translateY(0);
        }

        .fade-in {
          transform: translateY(20px);
        }

        .slide-in-left {
          transform: translateX(-100px);
        }

        .slide-in-right {
          transform: translateX(100px);
        }

        @media (max-width: 768px) {
          .slide-in-left,
          .slide-in-right {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  )
}