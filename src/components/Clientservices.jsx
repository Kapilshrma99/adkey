'use client';
import React from 'react'
import { useState } from 'react';
import { 
  Search, 
 
  Globe, 
  Mail, 
  Share2, 
  MousePointer, 
  BarChart3, 

  Edit3,

  Eye,
 
  ArrowRight,
  CheckCircle,

  Clock,

  Award,

} from 'lucide-react';
import Link from 'next/link';
const Clientservices = () => {
      const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 'seo',
      title: 'Search Engine Optimization',
      icon: <Search className="w-8 h-8" />,
      shortDesc: 'Boost your organic visibility and drive quality traffic',
      fullDesc: 'Our comprehensive SEO strategies help your website rank higher in search results, driving organic traffic and increasing your online visibility.',
      features: ['Keyword Research & Analysis', 'On-Page Optimization', 'Technical SEO Audit', 'Link Building Strategy', 'Local SEO', 'SEO Reporting & Analytics'],
      price: 'Starting from ₹15,000/month',
      deliverables: ['Monthly SEO Reports', 'Keyword Ranking Updates', 'Technical Audit Reports', 'Competitor Analysis'],
      timeline: '3-6 months for significant results',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      id: 'ppc',
      title: 'Pay-Per-Click Advertising',
      icon: <MousePointer className="w-8 h-8" />,
      shortDesc: 'Immediate results with targeted paid advertising campaigns',
      fullDesc: 'Drive instant traffic and conversions with our expertly managed Google Ads, Facebook Ads, and other PPC campaigns.',
      features: ['Google Ads Management', 'Facebook & Instagram Ads', 'Shopping Campaign Setup', 'Remarketing Campaigns', 'Landing Page Optimization', 'Conversion Tracking'],
      price: 'Starting from ₹20,000/month',
      deliverables: ['Campaign Performance Reports', 'Ad Creative Assets', 'Landing Page Designs', 'Conversion Analytics'],
      timeline: 'Results within 1-2 weeks',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      icon: <Share2 className="w-8 h-8" />,
      shortDesc: 'Build your brand presence across all social platforms',
      fullDesc: 'Engage your audience and build brand loyalty through strategic social media campaigns across all major platforms.',
      features: ['Content Strategy & Planning', 'Social Media Management', 'Community Building', 'Influencer Partnerships', 'Social Media Advertising', 'Performance Analytics'],
      price: 'Starting from ₹12,000/month',
      deliverables: ['Content Calendar', 'Social Media Posts', 'Engagement Reports', 'Follower Growth Analytics'],
      timeline: 'Growth visible in 2-4 weeks',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      id: 'content',
      title: 'Content Marketing',
      icon: <Edit3 className="w-8 h-8" />,
      shortDesc: 'Engage your audience with compelling, valuable content',
      fullDesc: 'Create and distribute valuable, relevant content to attract and retain your target audience while driving profitable customer action.',
      features: ['Content Strategy Development', 'Blog Writing & SEO', 'Video Content Creation', 'Infographic Design', 'Email Newsletter Content', 'Content Distribution'],
      price: 'Starting from ₹10,000/month',
      deliverables: ['Content Calendar', 'Blog Articles', 'Visual Content', 'Performance Reports'],
      timeline: '1-3 months for engagement growth',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      id: 'email',
      title: 'Email Marketing',
      icon: <Mail className="w-8 h-8" />,
      shortDesc: 'Nurture leads and retain customers with targeted emails',
      fullDesc: 'Build lasting relationships with your audience through personalized email campaigns that drive conversions and customer loyalty.',
      features: ['Email Campaign Design', 'List Building Strategies', 'Automation Setup', 'A/B Testing', 'Segmentation & Personalization', 'Performance Tracking'],
      price: 'Starting from ₹8,000/month',
      deliverables: ['Email Templates', 'Campaign Reports', 'Automation Workflows', 'List Growth Analytics'],
      timeline: 'Results within 2-3 weeks',
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      icon: <BarChart3 className="w-8 h-8" />,
      shortDesc: 'Data-driven insights to optimize your marketing ROI',
      fullDesc: 'Make informed decisions with comprehensive analytics and reporting that track your marketing performance across all channels.',
      features: ['Google Analytics Setup', 'Custom Dashboard Creation', 'Conversion Tracking', 'ROI Analysis', 'Competitor Benchmarking', 'Monthly Performance Reports'],
      price: 'Starting from ₹6,000/month',
      deliverables: ['Analytics Dashboard', 'Monthly Reports', 'KPI Tracking', 'Insights & Recommendations'],
      timeline: 'Setup within 1 week',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: <Globe className="w-8 h-8" />,
      shortDesc: 'Modern, responsive websites that convert visitors to customers',
      fullDesc: 'Create stunning, high-performance websites that not only look great but also drive conversions and support your digital marketing goals.',
      features: ['Responsive Web Design', 'E-commerce Development', 'Landing Page Creation', 'Website Speed Optimization', 'Mobile Optimization', 'CMS Integration'],
      price: 'Starting from ₹25,000',
      deliverables: ['Website Design', 'Development Code', 'Content Management System', 'Mobile Optimization'],
      timeline: '4-8 weeks for completion',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50'
    },
    {
      id: 'branding',
      title: 'Brand Strategy & Design',
      icon: <Award className="w-8 h-8" />,
      shortDesc: 'Build a strong brand identity that resonates with your audience',
      fullDesc: 'Develop a comprehensive brand strategy and visual identity that sets you apart from competitors and connects with your target market.',
      features: ['Brand Strategy Development', 'Logo Design', 'Brand Guidelines', 'Marketing Collateral', 'Brand Messaging', 'Visual Identity System'],
      price: 'Starting from ₹18,000',
      deliverables: ['Brand Strategy Document', 'Logo & Visual Assets', 'Brand Guidelines', 'Marketing Materials'],
      timeline: '3-6 weeks for completion',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50'
    }
  ];

  return (
       <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to boost your online presence and drive business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <a href='#service-details' className="group" key={service.id}>
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {setActiveService(index)}}
                className={`
                  relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer
                  ${activeService === index ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}
                  ${hoveredCard === index ? 'scale-105' : ''}
                `}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transition-transform duration-300 ${hoveredCard === index ? 'rotate-12' : ''}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.shortDesc}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
            
                  <button className={`p-3 rounded-full bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 group`}>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                </div>
                
                {activeService === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div></a>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" id="service-details">
            <div className={`bg-gradient-to-r ${services[activeService].bgGradient} p-8`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].gradient} rounded-2xl flex items-center justify-center text-white mr-6`}>
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h3>
                  <p className="text-gray-600 mt-2">{services[activeService].fullDesc}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-blue-500 mr-2" />
                    Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {services[activeService].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-purple-500 mr-2" />
                    Timeline & Pricing
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-500 mb-1">Timeline</div>
                      <div className="font-semibold text-gray-900">{services[activeService].timeline}</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-blue-600 mb-1">Investment</div>
                      <div className="font-bold text-2xl text-blue-600">{services[activeService].price}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link href='QuoteForm'>
                <button className={`bg-gradient-to-r ${services[activeService].gradient} hover:shadow-lg text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center group`}>
                  Get Started with {services[activeService].title}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Clientservices
