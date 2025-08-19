import React from 'react'

export default function RecycleSection() {
  return (
    <section
      className={`relative bg-[url('/images/background/recycle-background.png')] bg-cover bg-no-repeat py-20 overflow-hidden`}
    >
      {/* Decorative faded recycle icons */}
      <img
        src="/shapes/recycle.png"
        alt="Recycle Icon"
        className="absolute left-0 top-10 w-[120px] opacity-10 pointer-events-none select-none hidden md:block"
      />
      <img
        src="/shapes/recycle.png"
        alt="Recycle Icon"
        className="absolute right-0 bottom-10 w-[120px] opacity-10 pointer-events-none select-none hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center mb-14">
          <img
            src="/shapes/recycle.png"
            alt="Recycle Icon"
            className="w-[70px] mb-2 drop-shadow-lg"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A377B] text-center mt-2 tracking-tight">
            Recycling & Circular Economy
          </h2>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          {/* Left column */}
          <div className="flex flex-col md:gap-10">
            <div className="p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-[#1760A0] mb-3">
                Waste Management Planning
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Strategic site and operational waste planning aligned with the waste hierarchy to minimize landfill dependency and maximize material reuse.
              </p>
            </div>
            <div className="p-8 hover:shadow-xl transition">
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
            <div className="p-8 hover:shadow-xl transition">
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
