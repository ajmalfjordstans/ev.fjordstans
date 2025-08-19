import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#1A377B] text-white px-8 py-20 relative overflow-hidden">
      {/* Large faded logo background */}
      <div className="absolute right-0 bottom-0 opacity-90 pointer-events-none select-none" style={{ zIndex: 0 }}>
        <img src="/logos/fjordstans/fj-logo-blurred.svg" alt="Fjordstans Logo Large" className="w-[350px] h-[350px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <ul className="space-y-4 md:text-5xl font-bold leading-tight">
          <li>· EV Charging</li>
          <li>· Environmental</li>
          <li>· Recycling </li>
          <li>· Engineering</li>
        </ul>
        <Link href={`https://wa.me/+44 7501 371000`}>
          <button className="mt-12 bg-white text-[#1A377B] px-6 py-2 rounded-full font-semibold md:text-2xl shadow hover:cursor-pointer hover:bg-gray-100 transition">
            Get in touch
          </button>
        </Link>
      </div>
    </section>
  )
}
