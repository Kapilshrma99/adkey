import React from 'react'
import { Star } from 'lucide-react';
const Testimonial = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  G
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-800 font-medium mb-3 italic">
                    "[They have the] ability to maintain a website that continues to grow lead generation... our website is in good hands with WebFX."
                  </blockquote>
                  <div className="text-sm text-gray-600 mb-3">
                    <strong>Tracy W.</strong>, Review from Clutch.co
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">Rated 4.9/5 stars on G2</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">Rated 4.9/5 stars on Clutch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Testimonial
