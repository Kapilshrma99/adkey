'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AgencyFooter() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', color: 'hover:bg-red-600' }
  ];

  const services = [
    'SEO Optimization',
    'Social Media Marketing',
    'Google Ads',
    'Social Media Ads',
    'Mobile App Development',
    'Web Desigen & Development'
  ];

  const quickLinks = [
    
    'about',
    'services',
    'blog',
    'contact'
  ];

  return (
    <footer className="relative hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                
                <div>
                  <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
                   <img src="/Logo.png" alt="adKey Logo" className="h-10 w-auto sm:h-12" />
                    </Link>
                  <p className="text-blue-200 text-sm">Digital Marketing Agency</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                India's leading digital marketing services company in Delhi. Established in 2019, 
                We have an experienced team, innovative strategies, and guaranteed results.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`
                      p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                      text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg
                      ${social.color}
                      ${hoveredSocial === index ? 'shadow-xl shadow-blue-500/25' : ''}
                    `}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={`/${link}`} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Contact Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">ADDRESS :</h4>
               <p className="text-white">
                        Adkey Digital Marketing<br />
                        220A,1st floor<br />
                        Rama Market, Pitampura, Delhi-110034
                      </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Mobile :</h4>
                  <p className="text-gray-300">9582345373</p>
                </div>
              </div>

              <button onClick={() => {
    window.location.href = 'tel:+919311139479';
  }} className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center group">
                Call Now
                <Phone className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-center md:text-left">
              © 2018-2025. Digital Marketing Agency. All rights reserved
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        {/* <div className="absolute bottom-20 right-8 hidden lg:block">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-full shadow-2xl animate-bounce">
            <Mail className="w-6 h-6 text-white" />
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
          .hero {
  position:relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
}
      `}</style>
    </footer>
  );
}