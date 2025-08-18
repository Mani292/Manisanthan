import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Auto-rotate features
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    // Animate stats
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(featureInterval);
      clearInterval(statInterval);
    };
  }, []);

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
    };
    return colors[color] || 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400';
  };

  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Learning Assistant",
      description: "Get personalized guidance from our advanced AI chatbot with multiple skills for study, coding, and career preparation.",
      color: "purple",
      link: "/chatbot"
    },
    {
      icon: "💻",
      title: "20+ Coding Platforms",
      description: "Master programming with our curated collection of coding platforms including LeetCode, HackerRank, Codeforces, and more.",
      color: "blue",
      link: "/coding"
    },
    {
      icon: "📚",
      title: "Comprehensive Study Materials",
      description: "Access complete B.Tech resources including notes, previous papers, lab manuals, and video lectures for all semesters.",
      color: "indigo",
      link: "/resources"
    },
    {
      icon: "🎯",
      title: "Advanced Learning Roadmaps",
      description: "Follow structured learning paths for different tech domains with detailed step-by-step guidance and progress tracking.",
      color: "green",
      link: "/roadmaps"
    },
    {
      icon: "🌟",
      title: "Career Success Path",
      description: "Navigate your career with interview preparation, resume building, and industry insights for top tech companies.",
      color: "orange",
      link: "/placement"
    },
    {
      icon: "🔮",
      title: "Future-Ready Skills",
      description: "Stay ahead with the latest technology trends, learning roadmaps, and future-proof skill development strategies.",
      color: "pink",
      link: "/about"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "B.Tech CSE, Year 3",
      text: "Tech Hub's Claude AI assistant is incredible! It helped me debug complex algorithms and understand data structures better than any textbook. The personalized explanations made difficult concepts click instantly.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "B.Tech IT, Year 4",
      text: "The placement preparation section is outstanding! Claude AI guided me through system design questions and helped me practice coding interviews. I landed my dream job at a top tech company thanks to Tech Hub.",
      avatar: "👩‍💻",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      role: "B.Tech ECE, Year 2",
      text: "As someone transitioning to software development, Tech Hub's roadmaps were exactly what I needed. Claude AI provided personalized learning paths and helped me understand which skills to focus on first.",
      avatar: "👨‍🎓",
      rating: 5
    },
    {
      name: "Ananya Singh",
      role: "B.Tech CSE, Year 1",
      text: "The AI-powered learning experience is game-changing! Claude helps me understand programming concepts with real examples and provides instant feedback on my code. It's like having a personal tutor available 24/7.",
      avatar: "👩‍🎓",
      rating: 5
    }
  ];

  const stats = [
    { number: "300+", label: "Study Resources", icon: "📚", color: "indigo" },
    { number: "5K+", label: "Students Reached", icon: "👥", color: "blue" },
    { number: "150+", label: "Companies Covered", icon: "🏢", color: "green" },
    { number: "24/7", label: "AI Support", icon: "🤖", color: "purple" }
  ];

  const quickActions = [
    { title: "Start Coding", icon: "💻", link: "/coding", color: "blue" },
    { title: "Browse Resources", icon: "📚", link: "/resources", color: "indigo" },
    { title: "View Roadmaps", icon: "🗺️", link: "/roadmaps", color: "green" },
    { title: "AI Assistant", icon: "🤖", link: "/chatbot", color: "purple" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Welcome to{" "}
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-pulse">
                Tech Hub
              </span>
        </h1>
            <p className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Your ultimate B.Tech companion with AI-powered learning, comprehensive study materials, 
              and advanced coding platforms. Master your tech journey with confidence.
            </p>
            
            {/* Quick Actions */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {action.title}
                  </div>
                </Link>
              ))}
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <Link 
                to="/resources" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Resources
              </Link>
              <Link 
                to="/coding" 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105"
              >
                Start Coding
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`p-6 transform hover:scale-105 transition-all duration-300 group ${
                  currentStat === index ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                }`}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-blue-400 mb-2 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need for B.Tech Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive resources and guidance to help you excel in your B.Tech journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
                  currentFeature === index ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonials Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join thousands of successful B.Tech students
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center mb-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 max-w-2xl mx-auto ${
                    index === currentTestimonial ? 'scale-105 shadow-2xl ring-2 ring-blue-500/50' : 'opacity-60 scale-95'
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-500 scale-125 shadow-lg' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your B.Tech Journey?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of students who are already achieving their goals with Tech Hub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/resources" 
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-white">Tech Hub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your ultimate B.Tech companion with AI-powered learning, comprehensive study materials, 
                and advanced coding platforms.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/techhub-learning" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/techhub-learning" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Study Materials</Link></li>
                <li><Link to="/coding" className="hover:text-blue-400 transition-colors">Coding Platforms</Link></li>
                <li><Link to="/roadmaps" className="hover:text-blue-400 transition-colors">Learning Roadmaps</Link></li>
                <li><Link to="/placement" className="hover:text-blue-400 transition-colors">Placement Prep</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest tech trends and learning resources.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Tech Hub Learning Platform. All rights reserved. Powered by Claude AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
