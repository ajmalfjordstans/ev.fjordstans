'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

export default function ServicesSection() {
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
    <section 
      ref={sectionRef}
      className={`bg-[url('/images/background/background-one.png')] bg-cover bg-no-repeat py-20 px-8`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Illustrations */}
        <div className="w-full max-w-md animate-on-scroll slide-in-left">
          <Image
            src="/images/services.png"
            alt="Save the Planet"
            width={440}
            height={440}
            className="rounded-xl shadow w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Service Descriptions */}
        <div className="flex-1">
          <ul className="space-y-8">
            {[
              {
                title: '· EV Charging',
                desc: 'Guiding the planning, design, implementation, and operation of electric vehicle charging infrastructure to promote decarbonised mobility and e-mobility readiness.'
              },
              {
                title: '· Environmental',
                desc: 'Delivering multi-disciplinary environmental consultancy—from biodiversity and EIAs to net-zero planning and geo-environmental support—tailored for every project stage.'
              },
              {
                title: '· Recycling',
                desc: 'Delivering multi-disciplinary environmental consultancy—from biodiversity and EIAs to net-zero planning and geo-environmental support—tailored for every project stage.'
              },
              {
                title: '· Engineering',
                desc: 'Delivering multi-disciplinary environmental consultancy—from biodiversity and EIAs to net-zero planning and geo-environmental support—tailored for every project stage.'
              }
            ].map((service, index) => (
              <li 
                key={service.title}
                className="animate-on-scroll fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-3xl font-bold text-[#1A377B] mb-2">{service.title}</h3>
                <p className="text-gray-700 text-lg">
                  {service.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.show {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          transform: translateX(-100px);
        }

        .slide-in-left.show {
          transform: translateX(0);
        }

        .fade-in-up {
          transform: translateY(20px);
        }

        .fade-in-up.show {
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}