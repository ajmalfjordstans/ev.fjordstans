import React from 'react'

export default function EvSection() {
  return (
  <section className="bg-[#E3F1FB] pt-8 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1A377B] mb-8">
          Connected For A Greener Future
        </h2>
      </div>
      <div className={`bg-[url('/images/background/ev-charging.png')] bg-cover bg-no-repeat relative py-20`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            EV Charging Services
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Card 1 */}
            <div className="bg-[#1760A0] rounded-2xl p-8 flex-1 min-w-[300px] shadow-lg">
              <h4 className="text-2xl font-bold text-white mb-4">
                End-To-End EV Charging Consultancy
              </h4>
              <p className="text-white text-lg">
                Comprehensive support—from feasibility and planning, through concept and detailed design, to permitting and operational delivery—ensuring efficient and compliant infrastructure roll-out.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#1760A0] rounded-2xl p-8 flex-1 min-w-[300px] shadow-lg">
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
    </section>
  )
}
