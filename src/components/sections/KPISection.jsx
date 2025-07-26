'use client';
import { useState } from 'react';
import { TrendingUp, Users, DollarSign, BarChart3, Target, Megaphone } from 'lucide-react';
import styles from './Hero.module.css';
export default function KPISection() {
  const [activeTab, setActiveTab] = useState('Traffic');

  const tabs = [
    {
      name: 'Traffic',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Leads',
      icon: <Users className="w-5 h-5" />,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'CPL',
      icon: <Target className="w-5 h-5" />,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Data',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Revenue',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Campaign Management',
      icon: <Megaphone className="w-5 h-5" />,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const contentData = {
    Traffic: {
      title: "Boost your website traffic and visibility",
      description: "Without consistent site traffic, you're missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
      buttonText: "Explore SEO Services",
      strategies: [
        "Boost your presence in organic search results",
        "Reach interested users through paid ads",
        "Engage qualified users through social media"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    Leads: {
      title: "Generate high-quality leads consistently",
      description: "Transform your website visitors into qualified leads with proven conversion optimization strategies. Our data-driven approach helps you capture more leads and nurture them effectively through your sales funnel.",
      buttonText: "Learn Lead Generation",
      strategies: [
        "Optimize landing pages for conversions",
        "Implement smart lead capture forms",
        "Create compelling calls-to-action"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    CPL: {
      title: "Reduce your cost per lead significantly",
      description: "Lower your customer acquisition costs while maintaining lead quality. Our optimization techniques help you get more value from every marketing dollar spent on lead generation campaigns.",
      buttonText: "Optimize CPL Strategy",
      strategies: [
        "Improve ad targeting and relevance",
        "Optimize conversion funnels",
        "A/B test campaign elements"
      ],
      gradient: "from-purple-500 to-violet-500"
    },
    Data: {
      title: "Make data-driven decisions with confidence",
      description: "Unlock the power of your business data with comprehensive analytics and reporting. Get clear insights into customer behavior, campaign performance, and growth opportunities.",
      buttonText: "Discover Analytics",
      strategies: [
        "Track key performance indicators",
        "Generate actionable insights",
        "Monitor customer journey data"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    Revenue: {
      title: "Maximize revenue growth potential",
      description: "Increase your bottom line through strategic revenue optimization. Our proven methods help you identify new revenue streams and maximize the value of existing customers.",
      buttonText: "Boost Revenue Now",
      strategies: [
        "Optimize pricing strategies",
        "Increase customer lifetime value",
        "Identify upselling opportunities"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    "Campaign Management": {
      title: "Streamline your marketing campaigns",
      description: "Efficiently manage and optimize all your marketing campaigns from one central hub. Save time, reduce costs, and improve performance with our comprehensive campaign management solutions.",
      buttonText: "Manage Campaigns",
      strategies: [
        "Centralize campaign operations",
        "Automate routine tasks",
        "Real-time performance monitoring"
      ],
      gradient: "from-pink-500 to-rose-500"
    }
  };

  const currentContent = contentData[activeTab];

  return (
    <div className={`min-h-screen ${styles.hero} p-6`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Improve the KPIs That Matter Most to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Your Business
            </span>
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                  ${activeTab === tab.name
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-blue-500/25`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }
                `}
              >
                {tab.icon}
                <span className="text-sm md:text-base">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {currentContent.title}
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentContent.description}
              </p>

              <button className={`
                inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white
                bg-gradient-to-r ${currentContent.gradient} 
                hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300
              `}>
                {currentContent.buttonText}
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>

            {/* Right Content - Strategy Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {currentContent.strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  style={{
                    animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="font-medium">{strategy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Clients Served', value: '500+', icon: <Users className="w-6 h-6" /> },
            { label: 'Traffic Increase', value: '300%', icon: <TrendingUp className="w-6 h-6" /> },
            { label: 'Revenue Growth', value: '250%', icon: <DollarSign className="w-6 h-6" /> },
            { label: 'ROI Improvement', value: '400%', icon: <Target className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-center mb-3 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}