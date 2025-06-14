import { useState, useEffect } from 'react';
import { 
  Code2, 
  ChevronDown, 
  Sparkles, 
  Terminal, 
  Database, 
  Brain,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Full Stack Developer",
    "Data Scientist", 
  ];

  const skills = [
    { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Frontend" },
    { icon: <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Backend" },
    { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Database" },
    { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "AI/ML" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.3), transparent 40%)`
          }}
        />
        
        {/* Floating Particles (Reduced for Mobile) */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center p-4 sm:p-6 md:p-8 max-w-full sm:max-w-3xl md:max-w-4xl mx-auto transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Animated Icon */}
        <div className="mb-4 sm:mb-6 md:mb-8 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-r from-cyan-400 to-purple-500 p-3 sm:p-4 md:p-5 rounded-full transform hover:scale-110 transition-transform duration-300">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 animate-bounce" />
        </div>

        {/* Greeting */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <p className="text-cyan-300 text-xs sm:text-sm md:text-base mb-1 sm:mb-2 font-medium tracking-wide">Hello, I'm</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Chirag Rane
          </h1>
        </div>

        {/* Dynamic Role */}
        <div className="mb-4 sm:mb-6 md:mb-8 h-10 sm:h-12 md:h-14">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-1 sm:mb-2">I'm a</p>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentRole * 100}%)` }}
            >
              {roles.map((role, index) => (
                <h2 
                  key={index}
                  className="w-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap"
                >
                  {role}
                </h2>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-cyan-400">{skill.icon}</div>
              <span className="text-white font-medium text-xs sm:text-sm md:text-base">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
          Crafting digital experiences through code and uncovering insights from data. 
          Passionate about building scalable solutions and solving complex problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-2 sm:px-4">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-xs sm:text-sm md:text-base"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <a href="mailto:beingchirag6@gmail.com">
            Get in Touch</a>
            
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            
          </button>
          
          
          
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
          {[
            { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, href: "#", label: "GitHub" },
            { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, href: "#", label: "LinkedIn" },
            { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, href: "#", label: "Email" }
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="group p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              aria-label={social.label}
            >
              <div className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollDown}
          className="animate-bounce hover:animate-none transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 sm:top-16 left-4 sm:left-8 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-8 sm:bottom-16 right-4 sm:right-8 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;