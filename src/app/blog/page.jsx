'use client';
import { useState } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  Eye, 
  MessageCircle, 
  ArrowRight, 
  Filter,
  TrendingUp,
  Share2,
  BookOpen,
  Clock,
  Tag,
  Star,
  Play,
  Download,
  Heart,
  Bookmark,
  ExternalLink
} from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredPost, setFeaturedPost] = useState(0);

  const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content Marketing', 'Analytics', 'Web Design', 'Email Marketing'];

  const blogPosts = [
    {
      id: 1,
      title: '10 SEO Trends That Will Dominate 2025',
      excerpt: 'Discover the latest SEO strategies and algorithm updates that will shape search engine optimization in 2025. From AI-powered content to voice search optimization.',
      content: 'Complete guide to staying ahead of SEO trends including Core Web Vitals, E-A-T optimization, and semantic search...',
      category: 'SEO',
      author: 'Priya Sharma',
      authorRole: 'SEO Specialist',
      authorImage: '👩‍💼',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      views: 1247,
      comments: 23,
      likes: 89,
      featured: true,
      image: '🔍',
      tags: ['SEO', 'Trends', 'Algorithm', 'Rankings'],
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'Social Media ROI: How to Measure What Matters',
      excerpt: 'Learn how to track and measure the real impact of your social media campaigns with actionable metrics and KPIs that drive business growth.',
      content: 'Comprehensive framework for measuring social media success including engagement rates, conversion tracking...',
      category: 'Social Media',
      author: 'Neha Gupta',
      authorRole: 'Social Media Manager',
      authorImage: '👩‍💻',
      publishDate: '2025-01-12',
      readTime: '6 min read',
      views: 892,
      comments: 18,
      likes: 67,
      featured: false,
      image: '📱',
      tags: ['Social Media', 'ROI', 'Analytics', 'Metrics'],
      difficulty: 'Beginner'
    },
    {
      id: 3,
      title: 'Google Ads Strategy: Maximize Your PPC Budget',
      excerpt: 'Optimize your Google Ads campaigns with proven strategies to reduce cost-per-click while increasing conversions and overall ROI.',
      content: 'Advanced PPC techniques including keyword research, ad copy optimization, landing page strategies...',
      category: 'PPC',
      author: 'Rajesh Kumar',
      authorRole: 'PPC Expert',
      authorImage: '👨‍💼',
      publishDate: '2025-01-10',
      readTime: '10 min read',
      views: 1156,
      comments: 31,
      likes: 94,
      featured: true,
      image: '💰',
      tags: ['Google Ads', 'PPC', 'Budget', 'Optimization'],
      difficulty: 'Advanced'
    },
    {
      id: 4,
      title: 'Content Marketing Funnel: From Awareness to Conversion',
      excerpt: 'Build a content marketing strategy that guides prospects through every stage of the buyer journey with targeted, engaging content.',
      content: 'Step-by-step guide to creating content funnels that convert including top-of-funnel awareness content...',
      category: 'Content Marketing',
      author: 'Amit Singh',
      authorRole: 'Content Strategist',
      authorImage: '👨‍🎨',
      publishDate: '2025-01-08',
      readTime: '7 min read',
      views: 743,
      comments: 14,
      likes: 52,
      featured: false,
      image: '📝',
      tags: ['Content', 'Funnel', 'Strategy', 'Conversion'],
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Email Marketing Automation: Boost Your Revenue by 300%',
      excerpt: 'Implement powerful email automation workflows that nurture leads, retain customers, and drive consistent revenue growth.',
      content: 'Complete email automation guide including welcome sequences, abandoned cart emails, re-engagement campaigns...',
      category: 'Email Marketing',
      author: 'Priya Sharma',
      authorRole: 'Email Marketing Expert',
      authorImage: '👩‍💼',
      publishDate: '2025-01-05',
      readTime: '9 min read',
      views: 1034,
      comments: 27,
      likes: 78,
      featured: false,
      image: '📧',
      tags: ['Email', 'Automation', 'Revenue', 'Workflows'],
      difficulty: 'Intermediate'
    },
    {
      id: 6,
      title: 'Web Analytics Deep Dive: GA4 Advanced Features',
      excerpt: 'Master Google Analytics 4 with advanced tracking setups, custom reports, and actionable insights for data-driven marketing decisions.',
      content: 'Advanced GA4 implementation including event tracking, conversion setup, audience building...',
      category: 'Analytics',
      author: 'Neha Gupta',
      authorRole: 'Analytics Specialist',
      authorImage: '👩‍💻',
      publishDate: '2025-01-03',
      readTime: '12 min read',
      views: 567,
      comments: 19,
      likes: 41,
      featured: false,
      image: '📊',
      tags: ['Analytics', 'GA4', 'Tracking', 'Reports'],
      difficulty: 'Advanced'
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative  text-black py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>Digital Marketing Insights & Tips</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AdKey <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest digital marketing trends, strategies, and insights from our expert team. 
              Learn, grow, and succeed with actionable tips and proven techniques.
            </p>
          </div>

          {/* Search and Stats */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tips, strategies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
              <div className="text-black text-sm">Articles Published</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">25K+</div>
              <div className="text-black text-sm">Monthly Readers</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">8</div>
              <div className="text-black text-sm">Expert Authors</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-4">
              <div className="text-2xl font-bold text-orange-400 mb-1">4.9★</div>
              <div className="text-black text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Our most popular and impactful content</p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{featuredPosts[featuredPost]?.image}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPosts[featuredPost]?.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(featuredPosts[featuredPost]?.difficulty)}`}>
                        {featuredPosts[featuredPost]?.difficulty}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {featuredPosts[featuredPost]?.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredPosts[featuredPost]?.excerpt}
                </p>

                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{featuredPosts[featuredPost]?.authorImage}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{featuredPosts[featuredPost]?.author}</div>
                      <div className="text-sm text-gray-500">{featuredPosts[featuredPost]?.authorRole}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPosts[featuredPost]?.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPosts[featuredPost]?.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group">
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <div className="flex items-center gap-2 text-gray-500">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                      <Heart className="w-5 h-5" />
                    </button>
                    <span>{featuredPosts[featuredPost]?.likes}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <div className="space-y-4">
                  {featuredPosts.map((post, index) => (
                    <button
                      key={post.id}
                      onClick={() => setFeaturedPost(index)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                        featuredPost === index 
                          ? 'bg-white shadow-lg transform scale-105' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{post.image}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{post.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
            </h2>
            <div className="text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 rounded-full transition-all duration-200">
                      <Bookmark className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-xl">{post.authorImage}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                      <div className="text-xs text-gray-500">{post.authorRole}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <div className="flex items-center gap-4 text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20  text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Latest Insights</h2>
          <p className="text-xl text-black mb-8 leading-relaxed">
            Get weekly digital marketing tips, strategies, and industry updates delivered straight to your inbox.
          </p>

          <div className="max-w-lg mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <p className="text-sm text-black mt-4">
              Join 5,000+ marketers who trust our insights. Unsubscribe anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Expert Insights</h3>
              <p className="text-black text-sm">Tips from certified professionals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Latest Trends</h3>
              <p className="text-black text-sm">Stay ahead of the curve</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Free Resources</h3>
              <p className="text-black text-sm">Exclusive downloads and guides</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}