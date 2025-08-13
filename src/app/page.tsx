import { Building, CarIcon, Leaf, LeafIcon, Recycle, Rocket, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/ev.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="text-center container mx-auto px-[5%]">
          <Image src="/logos/fjordstans/logo-txt.png" alt="Fjordstans" width={200} height={50} className="mx-auto mb-8" />
          <h1 className="text-5xl font-bold mb-6">Driving Sustainable Innovation</h1>
          <div className="flex justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-blue-600 rounded-full">EV</span>
            <span className="px-4 py-2 bg-green-600 rounded-full">Environmental</span>
            <span className="px-4 py-2 bg-orange-600 rounded-full">Recycling</span>
            <span className="px-4 py-2 bg-purple-600 rounded-full">Engineering</span>
          </div>
          <p className="text-xl mb-8">Fjordstans integrates cutting-edge engineering with green practices to future-proof your projects.</p>
          <div className="flex justify-center gap-4">
            <Link href={`https://wa.me/+44 7501 371000`}>
              <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold">Request a Consultation</button>
            </Link>
            {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Learn More</button> */}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto px-[5%] text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">Who We Are</h2>
          <p className="text-gray-600 mb-12 max-w-[750px] mx-auto">Fjordstans is pioneering engineering innovation at the intersection of sustainable technology and green infrastructure. Through EV-ready engineering, environmental solutions, and smart recycling systems, we deliver the future—efficient, responsible, and built to last.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Leaf className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Design</h3>
              <p className="text-gray-600">Every project prioritizes environmental responsibility and long-term sustainability.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-disciplinary Engineering</h3>
              <p className="text-gray-600">Comprehensive expertise across multiple engineering disciplines for integrated solutions</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future-focused Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology and forward-thinking approaches for tomorrow's challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Specializations Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto px-[5%]">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EV Engineering */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-[10px] flex items-center justify-center mb-4">
                <CarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">EV Engineering</h3>
              <p className="text-gray-600">Designing infrastructure to support electric mobility—from charging stations to smart vehicle systems. Our EV solutions are built for scalability and efficiency.</p>
            </div>
            {/* Enironmental Solutions */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-[10px] flex items-center justify-center mb-4">
                <LeafIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enironmental Solutions</h3>
              <p className="text-gray-600">Crafting eco-conscious engineering designs that minimize carbon footprint and enhance ecological integration for sustainable development</p>
            </div>
            {/* Recycling Systems */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-[10px] flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recycling Systems</h3>
              <p className="text-gray-600">Developing smart, automated recycling solutions-bridging engineering and environmental responsiblity with cutting-edge technology.</p>
            </div>
            {/* Green Infrastructure */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-[10px] flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Green Infrastructure</h3>
              <p className="text-gray-600">Engineering resilient, sustainable systems for future-ready communities and businesses that priotize environmental stewardship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Engineering in Action Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto px-[5%]">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Green Engineering in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project cards */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/charging.jpeg" alt="EV Infrastructure" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">EV Infrastructure Implementation</h3>
                <p className="text-gray-600">Installation of fast charging systems for commercial fleets, delivering reliable and efficient electric vehicle support infrastructure.</p>
              </div>
            </div>
            {/* Eco-friendly Facility Retrofit */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/office.jpeg" alt="EV Infrastructure" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eco-friendly Facility Retrofit</h3>
                <p className="text-gray-600">Enhancing energy efficiency and waster recycling in industrial buildings through innovative green engineering solutions.</p>
              </div>
            </div>
            {/* Automated Recycling Unit */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/lineup.jpeg" alt="EV Infrastructure" width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Automated Recycling Unit</h3>
                <p className="text-gray-600">Custom engineering of intelligent sorting and resource recovery systems for maximum efficiency and environmental impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-blue-700 py-20 px-4 text-white">
        <div className="container mx-auto px-[5%] text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="relative">
            <div className="mb-8">
              <p className="text-xl italic mb-6">"Fjordstans brought exceptional expertise to our environmental retrofit project. The results exceeded our expectations in both efficiency and sustainability."</p>
              <div className="text-lg font-semibold">— Lisa R.</div>
              <div className="text-sm text-blue-200">Facility Manager</div>
            </div>
            {/* <div className="flex justify-center gap-2 mt-8">
              <button className="w-2 h-2 rounded-full bg-blue-400"></button>
              <button className="w-2 h-2 rounded-full bg-blue-400"></button>
              <button className="w-2 h-2 rounded-full bg-white"></button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* EV Engineering */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">EV Engineering</h3>
            <p className="text-gray-600 mb-4">Complete electric vehicle infrastructure design and implementation, from charging stations to smart grid integration.</p>
            {/* <a href="#" className="text-blue-600 font-medium">Learn More</a> */}
          </div>

          {/* Environmental Systems Design */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Environmental Systems Design</h3>
            <p className="text-gray-600 mb-4">Eco-conscious engineering solutions that minimize environmental impact while maximizing efficiency.</p>
            {/* <a href="#" className="text-blue-600 font-medium">Learn More</a> */}
          </div>

          {/* Smart Recycling Solutions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Recycling Solutions</h3>
            <p className="text-gray-600 mb-4">Automated recycling systems with AI-powered sorting and resource recovery optimization.</p>
            {/* <a href="#" className="text-blue-600 font-medium">Learn More</a> */}
          </div>

          {/* Additional service cards */}
          {/* Green Infrastructure */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Green Infrastructure</h3>
            <p className="text-gray-600 mb-4">Sustainable infrastructure engineering for resilient communities and future-ready developments.</p>
            {/* <a href="#" className="text-blue-600 font-medium">Learn More</a> */}
          </div>

          {/* Consulting & Strategy */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Consulting & Strategy</h3>
            <p className="text-gray-600 mb-4">Strategic guidance for sustainable engineering projects and environmental compliance.</p>
            {/* <a href="#" className="text-blue-600 font-medium">Learn More</a> */}
          </div>

          {/* Digital Integration */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Integration</h3>
            <p className="text-gray-600 mb-4">IoT solutions and data analytics for smart monitoring and optimization of engineering systems.</p>
            {/* <a href="#" className="text-blue-600 font-medium">Learn More</a> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Let's Build a Greener Future Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600">info@fjordstans.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Locations</div>
                  <div className="text-gray-600">Pontypridd, Fjordstans</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">Chat with us</div>
                  <div className="text-gray-600">Get instant support</div>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <Link href={`https://wa.me/+44 7501 371000`}>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full font-medium hover:bg-blue-700 transition-colors hover:cursor-pointer">Request a Consultation</button>
                </Link>
                {/* <button className="w-full bg-orange-500 text-white py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">Apply Now</button> */}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/house.jpeg"
                alt="Fjordstans Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/logos/fjordstans/logo-txt.png" alt="Fjordstans" width={150} height={40} className="mb-4" />
            <p className="text-blue-200">Pioneering sustainable engineering solutions for a greener future.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">About</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Projects</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">EV Engineering</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Environmental Solutions</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Recycling Systems</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Green Infrastructure</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-blue-600 text-center text-blue-200 text-sm">
          Fjordstans Engineering. Design by Fjordstans Studio
        </div>
      </footer>

    </div>
  );
}
