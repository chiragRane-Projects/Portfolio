import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Calendar, Smartphone, Stethoscope, Book, Coffee, DollarSign, BarChart, Utensils, Filter, ArrowRight, Code2, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'FinBuddy',
    description: 'An expense tracker web app to manage personal finances efficiently with real-time analytics and budget insights. Currently under polishing. Earlier it was named Xpensify but now with changes its Finbuddy',
    link: '#',
    github: 'https://github.com/chiragRane-Projects/xpensify_backend.git',
    tech: ['Django', 'Vite', 'Tailwind CSS', 'NeonDB', 'Django-Auth', 'Shadcn/UI'],
    category: 'Web App',
    year: '2025',
    status: 'Revamp',
    icon: DollarSign,
    gradient: 'from-emerald-400 via-cyan-500 to-blue-600',
  },
  {
    title: 'CoffeeNation',
    description: 'A landing page for a cozy coffee bar with modern design, interactive menu, and online ordering system.',
    link: 'https://coffeenation.netlify.app/',
    github: 'https://github.com/chiragRane-Projects/CoffeeNation.git',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    category: 'Landing Page',
    year: '2025',
    status: 'Live',
    icon: Coffee,
    gradient: 'from-amber-400 via-orange-500 to-red-500'
  },
  {
    title: 'Educare',
    description: 'A landing page for a comprehensive Learning Management System with interactive courses, progress tracking, and AI-powered recommendations.',
    link: 'https://educare-au.netlify.app/',
    github: 'https://github.com/chiragRane-Projects/Educare.git',
    tech: ['Vite', 'Tailwind CSS', 'Framer-Motion'],
    category: 'Landing Page',
    year: '2025',
    status: 'Live',
    icon: Book,
    gradient: 'from-blue-500 via-purple-500 to-indigo-600'
  },
  {
    title: 'FitVerse',
    description: 'A landing page for fitness and nutrition tracker app with personalized workout plans, meal tracking, and community challenges. Mobile App to launch in second half of 2025 or January 2026',
    link: 'https://fitverse-phi.vercel.app/',
    github: 'https://github.com/chiragRane-Projects/FitVerse.git',
    tech: ['React Native', 'Node JS', 'Vite', 'Tailwind CSS', 'MongoDB'],
    category: 'Mobile App',
    year: '2026',
    status: 'Development',
    icon: Smartphone,
    gradient: 'from-pink-500 via-red-500 to-orange-600'
  },
  {
    title: 'StockSage',
    description: 'StockSage is a webapp where traders can see the current trend of any stock or crypto.',
    link: '#',
    github: '#',
    tech: ['Vite', 'FastApi', 'Javascript', 'Tailwind CSS', 'Alpha Vantage API'],
    category: 'Web App',
    year: '2025',
    status: 'Development',
    icon: BarChart,
    gradient: 'from-cyan-400 via-sky-500 to-blue-600'
  },
  {
    title: 'BookMyDoctor',
    description: 'BookMyDoctor is a webapp built for users to book doctor appointments. This also has an admin panel which manages doctors and their appointments.',
    link: '#',
    github: '#',
    tech: ['NextJS', 'Tailwind CSS', 'Shadcn/UI', 'NeonDB', 'Drizzle'],
    category: 'Web App',
    year: '2025',
    status: 'Development',
    icon: Stethoscope,
    gradient: 'from-teal-400 via-cyan-500 to-blue-500'
  },
  {
    title:'FoodTrient',
    description: 'FoodTrient is an AI-powered web application that helps users understand the nutritional value, health impact, and smarter alternatives of the food they consume — simply by uploading a photo.',
    link: 'https://foodtrient.vercel.app/',
    github: 'https://github.com/chiragRane-Projects/FoodTrient.git',
    tech: ['NextJS', 'Tailwind CSS', 'Framer-Motion', 'ViteTest', 'GeminiAI API'],
    category: 'Web App',
    year: '2025',
    status: 'Live',
    icon: Utensils,
    gradient: 'from-rose-400 via-pink-500 to-red-500'
  }
];

const categories = ['All', 'Web App', 'Landing Page', 'Mobile App'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-500/25"
          >
            <Sparkles className="w-4 h-4" />
            Featured Work
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6 leading-tight"
          >
            My Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that solve real problems and delight users through innovative design and cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/70 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200'
              }`}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {category}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={`${project.title}-${selectedCategory}`}
                  variants={cardVariants}
                  layout
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <Card className={`h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm ${
                    project.featured ? 'ring-2 ring-blue-200 shadow-lg' : 'shadow-md'
                  }`}>

                    {/* Enhanced Gradient Header */}
                    <motion.div 
                      className={`h-1.5 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>

                    <CardHeader className="pb-4 relative">
                      {project.featured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                        >
                          FEATURED
                        </motion.div>
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg relative overflow-hidden`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="w-6 h-6 relative z-10" />
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0, 0.3, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </CardTitle>
                        <motion.div 
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                            project.status === 'Live' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/25' :
                            project.status === 'Beta' ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg shadow-blue-500/25' :
                            project.status === 'Revamp' ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/25' :
                            'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/25'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.status}
                        </motion.div>
                      </div>
                      
                      <div className="text-sm text-gray-500 font-medium">
                        {project.category}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Enhanced Tech Stack */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200 cursor-default shadow-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button 
                            asChild 
                            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                          >
                            <a href={project.link} className="flex items-center justify-center gap-2">
                              <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                              View Live
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            asChild 
                            variant="outline" 
                            className="border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group"
                          >
                            <a href={project.github} className="flex items-center justify-center gap-2">
                              <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>

                    {/* Enhanced Hover Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                      initial={false}
                      animate={{ 
                        opacity: hoveredProject === index ? 0.05 : 0
                      }}
                    />

                    {/* Subtle Animation Border */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: `linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, ${project.gradient.replace('from-', '').replace('via-', ', ').replace('to-', ', ')})`,
                        backgroundClip: 'padding-box, border-box',
                        backgroundOrigin: 'border-box'
                      }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20 lg:mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-500/25"
          >
            {/* Animated Background Elements */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-bold mb-4"
              >
                Like What You See?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                I'm always excited to work on new projects and bring creative ideas to life. 
                Let's collaborate and build something amazing together!
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  className="bg-white text-blue-600 hover:bg-gray-50 border-0 px-8 py-4 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href="mailto:beingchirag6@gmail.com" className="flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;