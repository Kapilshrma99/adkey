

import { Code, } from 'lucide-react';
import Testimonial from '../Testimonial';
import Email from '../Email';
export default function HomeHero() {




  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-50 w-24 h-24 bg-purple-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-200 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ">
                Digital Marketing and Web Development Services: <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}We Speak Your Language
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl ">
India’s leading digital marketing services company in Delhi. Established in 2019, We have an experienced team, innovative strategies, and guaranteed results. We love to help ambitious companies to achieve skyrocketing online growth.              </p>
            </div>

            {/* CTA Form */}
           <Email />
          </div>

          {/* Right Content - Statistics and Testimonial */}
          <div className="space-y-8 ">
            {/* Statistics Circles */}
            <div className="grid grid-cols-2 gap-6 ">
              {/* Awards Circle */}
              <div className="relative animate-pulse">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl font-bold">45</div>
                    <div className="text-xs font-medium uppercase tracking-wider">Design and Development Awards</div>
                  </div>
                </div>
                {/* <Award className="absolute -top-2 -right-2 w-8 h-8 text-blue-600 bg-white rounded-full p-1 shadow-lg" /> */}
              </div>

              {/* Satisfaction Circle */}
              <div className="relative animate-pulse">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl font-bold">93%</div>
                    <div className="text-xs font-medium uppercase tracking-wider">Client Satisfaction Score</div>
                    <div className="text-xs opacity-75 mt-1">Industry average: 72%</div>
                  </div>
                </div>
                {/* <TrendingUp className="absolute -top-2 -right-2 w-8 h-8 text-purple-600 bg-white rounded-full p-1 shadow-lg" /> */}
              </div>

              {/* Team Members Circle */}
              <div className="relative col-span-2 mx-auto animate-bounce">
                <div className="w-44 h-44 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl font-bold">85+</div>
                    <div className="text-sm font-medium uppercase tracking-wider">Interactive Team Members</div>
                  </div>
                </div>
                {/* <Users className="absolute -top-2 -right-2 w-8 h-8 text-blue-600 bg-white rounded-full p-1 shadow-lg" /> */}
              </div>
            </div>

            {/* Testimonial Card */}
            <Testimonial />
          </div>
        </div>

        {/* Technology Icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60">
          <Code className="w-8 h-8 text-gray-500" />
          <div className="text-2xl font-bold text-gray-500">PHP</div>
          <div className="text-2xl font-bold text-gray-500">ASP</div>
          <div className="text-2xl font-bold text-gray-500">HTML5</div>
          <div className="text-2xl font-bold text-gray-500">React</div>
          <div className="text-2xl font-bold text-gray-500">Next.js</div>
        </div>
      </div>
    </div>
  );
}