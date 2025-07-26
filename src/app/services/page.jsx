
import { 
 
  TrendingUp, 

  Target,
  ArrowRight,

  Star,
  Clock,
  Users,
  Award,
  Zap,
  Shield,
  Lightbulb,
  Play
} from 'lucide-react';
import Clientservices from '@/components/Clientservices';
import Link from 'next/link';
export default function ServicesPage() {

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to create a customized strategy.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Planning & Setup',
      description: 'Detailed planning and setup of campaigns, tools, and tracking systems.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Execute the strategy with precision, launching campaigns and content.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring and optimization to maximize performance and ROI.',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Results',
      description: '500+ successful projects with measurable ROI improvements'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Certified professionals with 6+ years of industry experience'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Transparent Reporting',
      description: 'Complete transparency with detailed monthly performance reports'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your digital marketing needs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative  text-black py-20 overflow-hidden">
        {/* <img src="/Logo.png" style={{z:-1}}/> */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span>Comprehensive Digital Marketing Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            From SEO to social media, PPC to content marketing - we offer complete digital marketing solutions 
            to grow your business and maximize your online presence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-black">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-black">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-black">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Clientservices />

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[13.5vw] w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AdKey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver outstanding results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Let's discuss your goals and create a customized digital marketing strategy that delivers real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='QuoteForm'>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            </Link>
            <button className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              View Case Studies
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Free</div>
              <div className="text-black">Initial Consultation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-black">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-black">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}