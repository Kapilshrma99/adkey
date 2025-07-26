'use client';
import React from 'react'
import { useState, useEffect } from 'react';


const Clientcounter = () => {

  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0
  });//go
    useEffect(() => {
    const targets = { projects: 500, clients: 200, experience: 6, awards: 15 };
    const duration = 2000;
    const steps = 50;
    const increment = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key];
      const step = target / steps;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, increment);
    });
  }, []);//go
  return (
   <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{counters.projects}+</div>
                    <div className="text-black">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{counters.clients}+</div>
                    <div className="text-black">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">{counters.experience}+</div>
                    <div className="text-black">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">{counters.awards}+</div>
                    <div className="text-black">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Clientcounter
