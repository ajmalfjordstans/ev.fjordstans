'use client'
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section
      className="bg-[url('/images/background/contact.png')] bg-cover bg-no-repeat py-20 flex items-center justify-center min-h-[500px]"
    >
      <form
        className="w-full max-w-3xl mx-auto flex flex-col items-center px-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-bold text-white text-center mb-10">Stay Connected</h2>
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="flex-1 px-5 py-4 rounded-lg bg-white text-gray-800 text-lg outline-none focus:ring-2 focus:ring-[#1A377B] placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="flex-1 px-5 py-4 rounded-lg bg-white text-gray-800 text-lg outline-none focus:ring-2 focus:ring-[#1A377B] placeholder-gray-400"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-5 py-4 rounded-lg bg-white text-gray-800 text-lg outline-none focus:ring-2 focus:ring-[#1A377B] placeholder-gray-400 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-8 px-10 py-4 bg-[#1A377B] text-white font-semibold rounded-full text-lg shadow hover:bg-[#17408B] transition"
        >
          Connect Us
        </button>
      </form>
    </section>
  );
}