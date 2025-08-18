import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const { isDark } = useTheme();

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚', color: 'from-blue-500 to-cyan-500' },
    { id: 'programming', name: 'Programming', icon: '💻', color: 'from-green-500 to-emerald-500' },
    { id: 'web-dev', name: 'Web Development', icon: '🌐', color: 'from-purple-500 to-pink-500' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱', color: 'from-orange-500 to-red-500' },
    { id: 'data-science', name: 'Data Science', icon: '📊', color: 'from-indigo-500 to-blue-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: '🤖', color: 'from-pink-500 to-rose-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud Computing', icon: '☁️', color: 'from-cyan-500 to-blue-500' }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Python Masterclass",
      description: "Learn Python from basics to advanced concepts with hands-on projects",
      category: "programming",
      type: "Course",
      difficulty: "Beginner",
      duration: "40 hours",
      rating: 4.8,
      downloads: 15420,
      tags: ["Python", "Programming", "OOP", "Data Structures"],
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "React.js Complete Guide",
      description: "Master React.js with hooks, context, and modern development practices",
      category: "web-dev",
      type: "Tutorial",
      difficulty: "Intermediate",
      duration: "25 hours",
      rating: 4.9,
      downloads: 12850,
      tags: ["React", "JavaScript", "Frontend", "Hooks"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      url: "#",
      featured: true
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Comprehensive guide to ML algorithms and practical implementations",
      category: "ai-ml",
      type: "Course",
      difficulty: "Advanced",
      duration: "60 hours",
      rating: 4.7,
      downloads: 8920,
      tags: ["Machine Learning", "Python", "Scikit-learn", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      url: "#",
      featured: true
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      description: "Get certified in AWS fundamentals and cloud architecture",
      category: "cloud",
      type: "Certification",
      difficulty: "Beginner",
      duration: "30 hours",
      rating: 4.6,
      downloads: 6750,
      tags: ["AWS", "Cloud", "DevOps", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      url: "#"
    },
    {
      id: 5,
      title: "Flutter App Development",
      description: "Build cross-platform mobile apps with Flutter and Dart",
      category: "mobile",
      type: "Course",
      difficulty: "Intermediate",
      duration: "35 hours",
      rating: 4.8,
      downloads: 5430,
      tags: ["Flutter", "Dart", "Mobile", "Cross-platform"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      url: "#"
    },
    {
      id: 6,
      title: "Data Science with Python",
      description: "Learn data analysis, visualization, and statistical modeling",
      category: "data-science",
      type: "Course",
      difficulty: "Intermediate",
      duration: "45 hours",
      rating: 4.9,
      downloads: 7890,
      tags: ["Data Science", "Python", "Pandas", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      url: "#"
    },
    {
      id: 7,
      title: "CodeWithHarry - Complete Web Development",
      description: "Complete web development course covering HTML, CSS, JavaScript, React, Node.js and more",
      category: "web-dev",
      type: "YouTube Course",
      difficulty: "Beginner",
      duration: "100+ hours",
      rating: 4.8,
      downloads: 15200,
      tags: ["Web Development", "HTML", "CSS", "JavaScript", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/watch?v=6mbwJ2xhgzM",
      featured: true
    },
    {
      id: 8,
      title: "Apna College - DSA Complete Course",
      description: "Comprehensive Data Structures and Algorithms course with Java implementations",
      category: "programming",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "80+ hours",
      rating: 4.9,
      downloads: 12800,
      tags: ["DSA", "Java", "Algorithms", "Data Structures", "Placement"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
    },
    {
      id: 9,
      title: "Kunal Kushwaha - Complete Java DSA Bootcamp",
      description: "Free comprehensive Java DSA bootcamp covering basics to advanced topics",
      category: "programming",
      type: "YouTube Bootcamp",
      difficulty: "Beginner to Advanced",
      duration: "150+ hours",
      rating: 4.9,
      downloads: 18500,
      tags: ["Java", "DSA", "Bootcamp", "Programming", "Free Course"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      featured: true
    },
    {
      id: 10,
      title: "Chai aur Code - JavaScript Series",
      description: "Complete JavaScript tutorial series from basics to advanced concepts",
      category: "web-dev",
      type: "YouTube Series",
      difficulty: "Beginner",
      duration: "40+ hours",
      rating: 4.7,
      downloads: 9800,
      tags: ["JavaScript", "Programming", "Web Development", "ES6"],
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37"
    },
    {
      id: 11,
      title: "Love Babbar - Supreme Batch DSA",
      description: "Complete DSA course with C++ covering all important topics for placements",
      category: "programming",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "120+ hours",
      rating: 4.8,
      downloads: 14200,
      tags: ["DSA", "C++", "Placement", "Competitive Programming", "Interview Prep"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"
    },
    {
      id: 12,
      title: "Thapa Technical - MERN Stack",
      description: "Complete MERN Stack development course with real projects",
      category: "web-dev",
      type: "YouTube Course",
      difficulty: "Advanced",
      duration: "60+ hours",
      rating: 4.6,
      downloads: 8900,
      tags: ["MERN", "MongoDB", "Express", "React", "Node.js", "Full Stack"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ"
    },
    {
      id: 13,
      title: "Gate Smashers - DBMS Complete Course",
      description: "Complete Database Management Systems course covering all GATE topics",
      category: "programming",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "25+ hours",
      rating: 4.7,
      downloads: 7600,
      tags: ["DBMS", "Database", "SQL", "GATE", "Interview Prep"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"
    },
    {
      id: 14,
      title: "Jenny's Lectures - Operating Systems",
      description: "Complete Operating Systems course covering all fundamental concepts",
      category: "programming",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "30+ hours",
      rating: 4.8,
      downloads: 6800,
      tags: ["Operating Systems", "OS", "Computer Science", "System Programming"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa"
    },
    {
      id: 15,
      title: "Neso Academy - Computer Networks",
      description: "Comprehensive Computer Networks course covering all networking concepts",
      category: "programming",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "35+ hours",
      rating: 4.6,
      downloads: 5900,
      tags: ["Computer Networks", "Networking", "TCP/IP", "OSI Model"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
    },
    {
      id: 16,
      title: "Hitesh Choudhary - React JS Complete Course",
      description: "Complete React.js course covering hooks, context API, and modern React patterns",
      category: "web-dev",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "20+ hours",
      rating: 4.7,
      downloads: 11200,
      tags: ["React", "JavaScript", "Frontend", "Web Development", "Hooks"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq"
    },
    {
      id: 17,
      title: "Pepcoding - Dynamic Programming",
      description: "Complete Dynamic Programming course with detailed problem-solving approach",
      category: "programming",
      type: "YouTube Course",
      difficulty: "Advanced",
      duration: "40+ hours",
      rating: 4.9,
      downloads: 6700,
      tags: ["Dynamic Programming", "DP", "Algorithms", "Problem Solving", "Competitive Programming"],
      image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PL-Jc9J83PIiEZvXCn-c5UIBvfT8dA-8EG"
    },
    {
      id: 18,
      title: "Akshay Saini - Namaste JavaScript",
      description: "Deep dive into JavaScript concepts, closures, promises, and advanced topics",
      category: "web-dev",
      type: "YouTube Series",
      difficulty: "Intermediate",
      duration: "15+ hours",
      rating: 4.9,
      downloads: 13400,
      tags: ["JavaScript", "Advanced JS", "Closures", "Promises", "Async Programming"],
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
      featured: true
    },
    {
      id: 19,
      title: "Traversy Media - Node.js Crash Course",
      description: "Complete Node.js tutorial covering Express, MongoDB, and building REST APIs",
      category: "web-dev",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "12+ hours",
      rating: 4.6,
      downloads: 8500,
      tags: ["Node.js", "Express", "MongoDB", "REST API", "Backend Development"],
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp"
    },
    {
      id: 20,
      title: "Tech With Tim - Python Machine Learning",
      description: "Comprehensive Python ML course covering scikit-learn, TensorFlow, and real projects",
      category: "ai-ml",
      type: "YouTube Course",
      difficulty: "Intermediate",
      duration: "25+ hours",
      rating: 4.7,
      downloads: 9200,
      tags: ["Machine Learning", "Python", "TensorFlow", "Scikit-learn", "AI"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      url: "https://www.youtube.com/playlist?list=PLzMcBGfZo4-mP7qA9cagf68V06sko5otr"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 dark:text-green-400';
      case 'Intermediate': return 'text-yellow-600 dark:text-yellow-400';
      case 'Advanced': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-pulse">
            Tech Resources Hub
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the best learning resources, tutorials, and courses to accelerate your tech journey
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources, topics, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/70 focus:ring-4 focus:ring-blue-400/50 focus:border-transparent outline-none transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
                {selectedCategory === category.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {filteredResources.length} resources found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
                  resource.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
                onClick={() => setSelectedResource(resource)}
              >
                {/* Featured Badge */}
                {resource.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(resource.category)} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {categories.find(c => c.id === resource.category)?.icon} {resource.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        +{resource.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className={`font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <span>⏱️ {resource.duration}</span>
                    <span>⭐ {resource.rating}</span>
                  </div>

                  {/* Download Count */}
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    📥 {resource.downloads.toLocaleString()} downloads
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Access Resource
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <img
                src={selectedResource.image}
                alt={selectedResource.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedResource(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedResource.category)} text-white text-sm font-bold rounded-full`}>
                  {categories.find(c => c.id === selectedResource.category)?.icon} {selectedResource.type}
                </span>
                <span className={`px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full ${getDifficultyColor(selectedResource.difficulty)}`}>
                  {selectedResource.difficulty}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedResource.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                {selectedResource.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedResource.duration}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">⭐ {selectedResource.rating}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Rating</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedResource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Learning
                </button>
                <button className="px-6 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning Statistics</h2>
            <p className="text-xl text-indigo-100">Join thousands of learners advancing their careers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-100">Resources Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-indigo-100">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-indigo-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Access premium resources, track your progress, and join our community of tech enthusiasts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
              Browse All Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
