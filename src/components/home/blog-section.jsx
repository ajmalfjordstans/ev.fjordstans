import React from 'react';

const blogs = [
  {
    image: '/images/blog/blog1.png',
    date: 'July 15 2025',
    title: 'Accelerating The EV Revolution: Planning Sustainable Charging Networks',
    desc: 'Exploring strategies to design, implement, and scale EV charging infrastructure that supports clean mobility.',
    link: '#',
  },
  {
    image: '/images/blog/blog2.png',
    date: 'July 15 2025',
    title: 'Embedding Nature-Based Solutions In Urban Water Systems',
    desc: 'How green infrastructure—like wetlands, green roofs, and permeable surfaces—can improve water management.',
    link: '#',
  },
  {
    image: '/images/blog/blog3.png',
    date: 'July 15 2025',
    title: 'Building Circularity: From Pre-Demolition Audits To Material Reuse',
    desc: 'A closer look at how pre-demolition planning helps recover valuable materials, reduce waste, and embed circular economy.',
    link: '#',
  },
  {
    image: '/images/blog/blog4.png',
    date: 'July 15 2025',
    title: 'Engineering Tomorrow: Smart Infrastructure Powered By Digital Sustainability',
    desc: 'Leveraging digital tools, data, and sustainable engineering practices to deliver smarter, greener infrastructure for the communities of the future.',
    link: '#',
  },
  {
    image: '/images/blog/blog5.png',
    date: 'July 15 2025',
    title: 'Decarbonizing Infrastructure: Pathways To Net-Zero Projects',
    desc: 'Examining practical approaches to reduce carbon emissions across planning, design, and construction—ensuring infrastructure meets net-zero targets.',
    link: '#',
  },
  {
    image: '/images/blog/blog6.png',
    date: 'July 15 2025',
    title: 'Integrating Recycling Innovations Into Urban Development',
    desc: 'How advanced recycling technologies and circular design strategies can transform waste into resources, creating sustainable value in city planning and construction.',
    link: '#',
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A377B] mb-8">
        Blog Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-[#E3E8F0] shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[160px] object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <span className="text-gray-500 text-sm mb-2">{blog.date}</span>
              <h3 className="font-semibold text-lg mb-2 text-[#222]">{blog.title}</h3>
              <p className="text-gray-600 text-[15px] mb-4 flex-1">{blog.desc}</p>
              <a
                href={blog.link}
                className="text-[#1760A0] font-medium hover:underline mt-auto"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}