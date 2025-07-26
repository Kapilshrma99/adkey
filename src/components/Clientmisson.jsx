
'use client';
import { 
  Users, 
  Target,
  Globe, 

  Lightbulb, 
  Shield,

} from 'lucide-react';
import { useState } from 'react';
const Clientmisson = () => {
      const [activeTab, setActiveTab] = useState('mission');//go
        const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and ROI."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of digital trends and implement cutting-edge strategies for our clients."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "Complete transparency in our processes, reporting, and communication with every client."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We tailor our strategies to meet your unique business needs."
    }
  ];
  return (
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong principles and driven by innovation, we help businesses thrive in the digital landscape.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12">
            {activeTab === 'mission' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses with innovative digital marketing strategies that drive measurable growth, 
                  enhance brand visibility, and create lasting customer relationships. We are committed to delivering 
                  exceptional results through data-driven approaches, creative solutions, and transparent communication.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be India's most trusted digital marketing agency, recognized for transforming businesses through 
                  cutting-edge technology, innovative strategies, and unwavering commitment to client success. We envision 
                  a future where every business, regardless of size, can leverage the power of digital marketing to achieve exponential growth.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
  )
}

export default Clientmisson
