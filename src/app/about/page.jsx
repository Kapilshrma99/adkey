

import { 
  Users, 
  Target, 
  Award, 
  Globe,
  TrendingUp, 
  Clock, 
  Lightbulb, 
  Shield,
  ArrowRight,
  PlayCircle,
  CheckCircle,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';
import Clientcounter from '@/components/Clientcounter';
import Clientmisson from '@/components/Clientmisson';

import Link from 'next/link'
export default function AboutPage() {





  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "image",
      expertise: "Digital Strategy, Business Development",
      experience: "8+ years"
    },
    {
      name: "Priya Sharma",
      role: "Head of Marketing",
      image: "image",
      expertise: "SEO, Content Marketing, Analytics",
      experience: "6+ years"
    },
    {
      name: "Amit Singh",
      role: "Creative Director",
      image: "image",
      expertise: "Brand Design, UI/UX, Creative Campaigns",
      experience: "7+ years"
    },
    {
      name: "Neha Gupta",
      role: "Social Media Manager",
      image: "image",
      expertise: "Social Media Strategy, Community Management",
      experience: "5+ years"
    }
  ];



  const milestones = [
    { year: "2019", event: "adkey Founded in Delhi", description: "Started with a vision to transform digital marketing in India" },
    { year: "2020", event: "First 50 Clients", description: "Achieved our first milestone during challenging times" },
    { year: "2021", event: "Team Expansion", description: "Grew to 15+ specialists across different domains" },
    { year: "2022", event: "100+ Success Stories", description: "Delivered exceptional results for diverse industries" },
    { year: "2023", event: "Industry Recognition", description: "Won multiple awards for digital marketing excellence" },
    { year: "2024", event: "200+ Happy Clients", description: "Expanded our reach across India with proven strategies" },
    { year: "2025", event: "500+ Projects", description: "Continuing to innovate and deliver outstanding results" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative  text-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">Established in 2019</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"><img src='/Logo.png'  alt="Adkey Logo" /></span>
              </h1>
              
              <p className="text-xl text-black mb-8 leading-relaxed">
                India's leading digital marketing services company, transforming businesses 
                through innovative strategies and guaranteed results since 2019.
              </p>
{/*               
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group">
                  Our Story
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center group">
                  <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Video
                </button>
              </div> */}
            </div>
            
            <Clientcounter />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <Clientmisson />

      {/* Our Story Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to India's leading digital marketing agency - here's our story of growth and success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of digital marketing experts is dedicated to delivering exceptional results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {member.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20  text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose AdKey?</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver outstanding digital marketing results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Proven Track Record",
                description: "500+ successful projects with measurable results and client satisfaction.",
                stats: "98% Client Retention"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Data-Driven Approach",
                description: "Every strategy is backed by comprehensive data analysis and market research.",
                stats: "300% Avg. ROI Increase"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Team",
                description: "Certified professionals with years of experience in digital marketing.",
                stats: "50+ Certifications"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-cyan-400 mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-black mb-6 leading-relaxed">{feature.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join 200+ successful businesses that have achieved remarkable growth with AdKey's digital marketing expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/QuoteForm">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </Link>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
