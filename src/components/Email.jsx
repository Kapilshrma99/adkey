'use client';
import React, { useState } from 'react';
import {ArrowRight } from 'lucide-react';
const Email = () => {
      const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
    const handleSubmit = () => {
    console.log('Proposal request for:', email);
    // Handle form submission
  };
  return (
     <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="url"
                placeholder="Enter your website"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
              />
              <button
                onClick={handleSubmit}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                Send Me a Proposal
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
            </div>
  )
}

export default Email
