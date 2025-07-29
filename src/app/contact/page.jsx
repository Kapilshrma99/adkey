'use client';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  User,
  Building,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Users,
  Award,
  ExternalLink
} from 'lucide-react';
// import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normal'
      });
    }, 2000);
  };

  const services = [
    'SEO Optimization',
    'Pay-Per-Click (PPC)',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Web Development',
    'Brand Strategy',
    'Analytics & Reporting',
    'Complete Digital Marketing'
  ];

  const budgetRanges = [
    'Under ₹25,000/month',
    '₹25,000 - ₹50,000/month',
    '₹50,000 - ₹1,00,000/month',
    '₹1,00,000 - ₹2,00,000/month',
    '₹2,00,000+/month'
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      info: '+91 9582345373',
      description: 'Mon-Fri 9AM-6PM IST',
      action: 'Call Now',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      info: 'ajay@adkeymedia.in',
      description: 'We reply within 2 hours',
      action: 'Send Email',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      info: '+91 9582345373',
      description: 'Quick response guaranteed',
      action: 'Chat Now',
      gradient: 'from-green-600 to-green-500',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Schedule Meeting',
      info: 'Book a consultation',
      description: 'Free 30-min strategy call',
      action: 'Book Now',
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: <Youtube className="w-6 h-6" />, name: 'YouTube', color: 'hover:bg-red-600' }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Response',
      description: 'We respond within 2 hours during business days'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Free Consultation',
      description: 'Get expert advice at no cost with our initial consultation'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Results',
      description: '500+ successful projects with measurable ROI improvements'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Certified professionals with 6+ years of experience'
    }
  ];
const handleAction = (method) => {
  switch (method.title) {
    case 'Phone':
      window.location.href = `tel:${method.info}`;
      break;
    case 'Email':
      window.location.href = `mailto:${method.info}`;
      break;
    case 'WhatsApp':
      const phone = method.info.replace(/\s+/g, '').replace('+', '');
      window.open(`https://wa.me/${phone}`, '_blank');
      break;
    case 'Schedule Meeting':
      window.location.href = `/QuoteForm`;
      // <Link href='/QuoteForm'></Link> // <-- Replace with your actual booking URL
      break;
    default:
      alert('No action defined');
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative  text-Black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Let's Start Your Digital Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with digital marketing? Our expert team is here to help you 
              achieve your goals with customized strategies and proven results.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2 Hours</div>
                <div className="text-black text-sm">Response Time</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">Free</div>
                <div className="text-black text-sm">Consultation</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                <div className="text-2xl font-bold text-green-400 mb-1">200+</div>
                <div className="text-black text-sm">Happy Clients</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                <div className="text-2xl font-bold text-orange-400 mb-1">24/7</div>
                <div className="text-black text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred method to get in touch. We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className={`bg-gradient-to-br ${method.bgColor} rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{method.info}</p>
                <p className="text-gray-600 mb-6">{method.description}</p>
                
                <button  onClick={() => handleAction(method)}
    className={`bg-gradient-to-r ${method.gradient} hover:shadow-lg text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center group`}>
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 2 hours during business days. 
                  Let's discuss how we can help grow your business.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-600 text-sm">We'll get back to you within 2 hours.</p>
                  </div>
                </div>
              )}

              <form    action="https://formsubmit.co/kapilsharma09311@gmail.com"
  method="POST" onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Monthly Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Urgency
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: 'asap', label: 'ASAP', color: 'border-red-500 bg-red-50 text-red-700' },
                      { value: 'normal', label: 'Normal', color: 'border-blue-500 bg-blue-50 text-blue-700' },
                      { value: 'flexible', label: 'Flexible', color: 'border-green-500 bg-green-50 text-green-700' }
                    ].map((option) => (
                      <label key={option.value} className="flex-1">
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`border-2 rounded-xl p-3 text-center cursor-pointer transition-all duration-200 ${
                          formData.urgency === option.value ? option.color : 'border-gray-200 hover:border-gray-300'
                        }`}>
                          <span className="font-semibold">{option.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By sending this message, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Office Info */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Adkey Digital Marketing<br />
                        220A,1st floor<br />
                        Rama Market, Pitampura, Delhi-110034
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <span className="text-gray-600">Follow us:</span>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <button
                          key={index}
                          className={`p-2 rounded-full bg-gray-100 text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white`}
                        >
                          {social.icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AdKey?</h3>
                
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg flex-shrink-0">
                        {item.icon}
                        <span className="text-white"></span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 text-white ">
                <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
                <p className="mb-6 opacity-90">
                  For urgent support or emergency assistance with your campaigns.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Emergency Hotline</p>
                    <p className="text-lg">+91 9582345373</p>
                  </div>
                  <button onClick={() => {
    window.location.href = 'tel:+919311139479';
  }} className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
            <p className="text-xl text-gray-600">Located in the heart of Delhi for easy accessibility</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-12">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-6">
                  ACKET Digital Marketing Agency<br />
                  Sonia Vihar, Delhi-110094
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                  Get Directions
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly will you respond to my inquiry?",
                answer: "We respond to all inquiries within 2 hours during business days (9 AM - 6 PM IST). For urgent matters, call our hotline."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer a free 30-minute strategy consultation to understand your needs and provide initial recommendations."
              },
              {
                question: "What's your minimum contract duration?",
                answer: "We typically work with 6-month contracts to ensure sufficient time for strategy implementation and results measurement."
              },
              {
                question: "Do you work with businesses outside Delhi?",
                answer: "Absolutely! We serve clients across India and internationally through our digital-first approach and remote collaboration tools."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}