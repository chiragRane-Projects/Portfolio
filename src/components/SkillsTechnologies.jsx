import { useState } from 'react';
import {Shield, Cpu} from 'lucide-react';
import { TbBrandDjango, TbBrandNodejs, TbBrandVite, TbBrandNextjs, TbBrandJavascript, TbBrandPython, TbChartBar, TbChartAreaLine, TbChartPie, TbBrandMongodb, TbBrandReactNative, TbBrandTailwind, TbHtml } from 'react-icons/tb';
import {
  SiFastapi, SiPostgresql, SiPrisma, SiDrizzle, SiShadcnui, SiClerk, SiCanva,
  SiCss3, SiPostman, SiJupyter, SiVercel, SiNetlify, SiFirebase, SiGithub,
  SiMysql, SiMariadb, SiC, SiCplusplus
} from "react-icons/si";

const skills = [
  { name: 'NextJS', icon: <TbBrandNextjs className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Frontend', color: 'from-black to-gray-700' },
  { name: 'Vite', icon: <TbBrandVite className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Frontend', color: 'from-purple-500 to-pink-500' },
  { name: 'Node.js', icon: <TbBrandNodejs className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Backend', color: 'from-green-500 to-green-600' },
  { name: 'JavaScript', icon: <TbBrandJavascript className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Language', color: 'from-yellow-400 to-yellow-500' },
  { name: 'Python', icon: <TbBrandPython className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Language', color: 'from-blue-500 to-green-500' },
  { name: 'NumPy', icon: <TbChartBar className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Data Science', color: 'from-blue-600 to-blue-700' },
  { name: 'Pandas', icon: <TbChartAreaLine className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Data Science', color: 'from-indigo-500 to-purple-600' },
  { name: 'Data Visualization', icon: <TbChartPie className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Data Science', color: 'from-red-500 to-orange-500' },
  { name: 'FastAPI', icon: <SiFastapi className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Backend', color: 'from-emerald-500 to-teal-600' },
  { name: 'Django', icon: <TbBrandDjango className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Backend', color: 'from-green-700 to-green-800' },
  { name: 'MongoDB', icon: <TbBrandMongodb className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-green-500 to-green-700' },
  { name: 'Neon DB', icon: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-cyan-400 to-blue-500' },
  { name: 'MySQL', icon: <SiMysql className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-orange-500 to-yellow-600' },
  { name: 'MariaDB', icon: <SiMariadb className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-blue-500 to-cyan-600' },
  { name: 'C', icon: <SiC className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Language', color: 'from-blue-400 to-blue-700' },
  { name: 'C++', icon: <SiCplusplus className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Language', color: 'from-indigo-500 to-purple-700' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-blue-600 to-indigo-700' },
  { name: 'Prisma', icon: <SiPrisma className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-slate-600 to-slate-800' },
  { name: 'Drizzle', icon: <SiDrizzle className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Database', color: 'from-orange-500 to-red-500' },
  { name: 'React Native', icon: <TbBrandReactNative className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Mobile', color: 'from-blue-400 to-cyan-500' },
  { name: 'Tailwind CSS', icon: <TbBrandTailwind className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Styling', color: 'from-cyan-400 to-blue-500' },
  { name: 'Shadcn/UI', icon: <SiShadcnui className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'UI Library', color: 'from-gray-800 to-black' },
  { name: 'Clerk', icon: <SiClerk className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Auth', color: 'from-purple-600 to-indigo-600' },
  { name: 'Next-Auth', icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Auth', color: 'from-blue-600 to-emerald-600' },
  { name: 'Canva', icon: <SiCanva className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Design', color: 'from-pink-500 to-purple-500' },
  { name: 'HTML', icon: <TbHtml className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Frontend', color: 'from-orange-500 to-red-500' },
  { name: 'CSS', icon: <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'Postman', icon: <SiPostman className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Tools', color: 'from-orange-600 to-red-600' },
  { name: 'Jupyter', icon: <SiJupyter className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Tools', color: 'from-amber-200 to-orange-600' },
  { name: 'Vercel', icon: <SiVercel className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Deployment', color: 'from-gray-800 to-zinc-600' },
  { name: 'Netlify', icon: <SiNetlify className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Deployment', color: 'from-teal-500 to-cyan-600' },
  { name: 'Firebase', icon: <SiFirebase className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Cloud', color: 'from-yellow-500 to-orange-500' },
  { name: 'GitHub', icon: <SiGithub className="w-5 h-5 sm:w-6 sm:h-6" />, category: 'Version Control', color: 'from-slate-700 to-black' },
];

const categories = [...new Set(skills.map(skill => skill.category))];

const SkillsTechnologies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-full sm:max-w-5xl md:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 sm:mb-4">
              Skills & Technologies
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical expertise across various domains of software development and data science.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 h-28 sm:h-32 flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-105 group-hover:bg-white/20 border border-white/20">
                {/* Icon Container */}
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-2 sm:mb-3 transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill Name */}
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base text-center leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-white/20 text-white px-1.5 sm:px-2 py-1 rounded-full backdrop-blur-sm">
                    {skill.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end justify-center pb-3 sm:pb-4">
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">{skills.length}</div>
            <div className="text-gray-300 text-sm sm:text-base">Total Technologies</div>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">{categories.length}</div>
            <div className="text-gray-300 text-sm sm:text-base">Skill Categories</div>
          </div>
          <div className="text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl sm:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">100%</div>
            <div className="text-gray-300 text-sm sm:text-base">Passion Level</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTechnologies;