import Image from 'next/image'
import React from 'react'

export default function ServicesSection() {
  return (
    <section className={`bg-[url('/images/background/background-one.png')] bg-cover bg-no-repeat py-20 px-8`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Illustrations */}
        <div className="w-full max-w-md">
          <Image
            src="/images/services.png"
            alt="Save the Planet"
            width={440}
            height={440}
            className="rounded-xl shadow w-full"
          />
        </div>
        {/* Service Descriptions */}
        <div className="flex-1">
          <ul className="space-y-8">
            <li>
              <h3 className="text-3xl font-bold text-[#1A377B] mb-2">· EV Charging</h3>
              <p className="text-gray-700 text-lg">
                Guiding the planning, design, implementation, and operation of electric vehicle charging infrastructure to promote decarbonised mobility and e-mobility readiness.
              </p>
            </li>
            <li>
              <h3 className="text-3xl font-bold text-[#1A377B] mb-2">· Environmental</h3>
              <p className="text-gray-700 text-lg">
                Delivering multi-disciplinary environmental consultancy—from biodiversity and EIAs to net-zero planning and geo-environmental support—tailored for every project stage.
              </p>
            </li>
            <li>
              <h3 className="text-3xl font-bold text-[#1A377B] mb-2">· Recycling</h3>
              <p className="text-gray-700 text-lg">
                Delivering multi-disciplinary environmental consultancy—from biodiversity and EIAs to net-zero planning and geo-environmental support—tailored for every project stage.
              </p>
            </li>
            <li>
              <h3 className="text-3xl font-bold text-[#1A377B] mb-2">· Engineering</h3>
              <p className="text-gray-700 text-lg">
                Delivering multi-disciplinary environmental consultancy—from biodiversity and EIAs to net-zero planning and geo-environmental support—tailored for every project stage.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
