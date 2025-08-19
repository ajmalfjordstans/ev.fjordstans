import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-8 py-2 bg-white">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Image src="/logos/fjordstans/fjordstans-blue.png" alt="Fjordstans" width={300} height={150} className="mx-auto h-[100px]" />
      </div>
      <div className="flex items-center gap-6">
        <Link href={`https://wa.me/+44 7501 371000`}>
          <button className="bg-[#1A377B] text-white px-6 py-2 rounded-full font-semibold text-lg hover:bg-[#17408B] transition">
            Get a quote
          </button>
        </Link>
      </div>
    </header>
  )
}
