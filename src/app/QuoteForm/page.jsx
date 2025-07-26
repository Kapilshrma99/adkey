'use client';
import { useRef } from 'react';
import React from 'react'

const Quote = () => {
  const formRef = useRef(null);

  return (
    <>
      <section ref={formRef} className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Quote</h2>
       <form
  action="https://formsubmit.co/kapilsharma09311@gmail.com"
  method="POST"
  target="_blank"
  className="space-y-4"
>
  <div>
    <label className="block text-gray-700 font-medium mb-1">Name</label>
    <input
      type="text"
      name="name"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Your full name"
      required
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-1">Email</label>
    <input
      type="email"
      name="email"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="you@example.com"
      required
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-1">Phone</label>
    <input
      type="tel"
      name="phone"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="+91 9876543210"
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-1">Project Details</label>
    <textarea
      name="message"
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Describe your project..."
      rows={4}
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
  >
    Submit Quote Request
  </button>
</form>

      </section>
    </>
  )
}

export default Quote
