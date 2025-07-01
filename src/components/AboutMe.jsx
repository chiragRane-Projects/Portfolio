import { useState, useEffect } from 'react';
import { 
  User, 
  Code2, 
  Database, 
  Palette, 
  Coffee, 
  Heart,
  Target,
  Lightbulb,
  Award,
  Calendar,
  MapPin,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '4', label: 'Real-world Projects', icon: <Award className="w-5 h-5" /> },
    { number: '25+', label: 'Tech Stack Mastery', icon: <Code2 className="w-5 h-5" /> },
    { number: '4–5 hrs/day', label: 'Hands-on Practice', icon: <Calendar className="w-5 h-5" /> },
    { number: '∞', label: 'Debugging Zen Achieved', icon: <Coffee className="w-5 h-5" /> }
  ];
  

  const skills = [
    { name: 'Frontend Development', level: 60, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend Development', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Data Science', level: 40, color: 'from-purple-500 to-pink-500' },
  ];

  const journey = [
    { year: '2023', title: 'Started Coding Journey', desc: 'Began with HTML, CSS, and JavaScript' },
    { year: '2024', title: 'Full Stack Development', desc: 'Mastered React, Node.js, and databases' },
    { year: '2024', title: 'Professional Growth', desc: 'Building scalable applications and leading projects' },
    { year: '2025', title: 'Data Science Explorer', desc: 'Dived into Python, ML, and data visualization' },
  ];

  const interests = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Clean Code', desc: 'Writing maintainable, efficient code' },
    { icon: <Database className="w-6 h-6" />, title: 'Data Insights', desc: 'Uncovering stories from data' },
    { icon: <Palette className="w-6 h-6" />, title: 'Design', desc: 'Creating beautiful user experiences' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', desc: 'Exploring new technologies' }
  ];

  const tabs = [
    { id: 'story', label: 'My Story', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Target className="w-4 h-4" /> },
    { id: 'journey', label: 'Journey', icon: <MapPin className="w-4 h-4" /> }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-200 rounded-full blur-lg animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital solutions with creativity and precision
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-center mb-2 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-medium transition-all duration-300 flex-1 sm:flex-none justify-center sm:justify-start ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm sm:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* Story Tab */}
            {activeTab === 'story' && (
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      I'm a passionate developer with a knack for building scalable web applications and 
                      exploring data science. My journey started with a curiosity for coding, leading me to 
                      master technologies like <span className="text-blue-600 font-semibold">React</span>, 
                      <span className="text-green-600 font-semibold"> Next.js</span>, and 
                      <span className="text-purple-600 font-semibold"> Python</span>.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      I love creating user-friendly interfaces and solving complex problems with clean, efficient 
                      code. When I'm not coding, you can find me experimenting with new tools or designing 
                      graphics in Canva.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>Fueled by curiosity and caffeine</span>
                    </div>
                  </div>
                  
                  {/* Interests Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {interests.map((interest, index) => (
                      <div key={interest.title} className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:scale-105">
                        <div className="text-blue-600 mb-3">{interest.icon}</div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{interest.title}</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">{interest.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Technical Expertise</h3>
                <div className="space-y-4 sm:space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-700 text-sm sm:text-base">{skill.name}</h4>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${index * 200}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 200 + 600}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Journey Tab */}
            {activeTab === 'journey' && (
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">My Development Journey</h3>
                <div className="space-y-6 sm:space-y-8">
                  {journey.map((item, index) => (
                    <div key={item.year} className="flex gap-4 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                          {item.year}
                        </div>
                        {index < journey.length - 1 && (
                          <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-blue-300 to-purple-300 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-6 sm:pb-8">
                        <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;