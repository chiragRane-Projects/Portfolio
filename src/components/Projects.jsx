import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Calendar, Smartphone, Stethoscope, Book, Coffee, DollarSign,  Utensils, ArrowRight, Code2, Sparkles, Plane } from 'lucide-react';

const projects = [
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
    title: 'Traventure',
    description: 'Traventure is a landing page for a travel agency offering holiday packages and tours.',
    link: 'https://traventure-mocha.vercel.app/',
    github: 'https://github.com/chiragRane-Projects/Traventure.git  ',
    tech: ['NextJS', 'JavaScript', 'Tailwind CSS', 'Shadcn/UI', 'Framer-Motion'],
    category: 'Landing Page',
    year: '2025',
    status: 'Live',
    icon: Plane,
    gradient: 'from-cyan-400 via-sky-500 to-blue-600'
  },
  {
    title: 'FoodTrient',
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

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

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
      y: 50,
      scale: 0.95,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.7
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-pink-400/30 to-red-600/30 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200,
              damping: 15
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-blue-500/30"
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
          
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6 leading-tight"
          >
            My Projects
          </h2>
          <p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that solve real problems and delight users through innovative design and cutting-edge technology
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const isLinkDisabled = project.link === '#';
              const isGithubDisabled = project.github === '#';
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  className="flex"
                >
                  <Card className="flex flex-col h-full border-0 bg-white/90 backdrop-blur-md shadow-md w-full">
                    {/* Gradient Header */}
                    <motion.div 
                      className={`h-1.5 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>

                    <CardHeader className="pb-4 relative flex-shrink-0">
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
                        <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800">
                          {project.title}
                        </CardTitle>
                        <motion.div 
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                            project.status === 'Live' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg shadow-green-500/30' :
                            project.status === 'Beta' ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg shadow-blue-500/30' :
                            project.status === 'Revamp' ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/30' :
                            'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg shadow-orange-500/30'
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

                    <CardContent className="space-y-6 flex-grow flex flex-col">
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
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
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200 cursor-default shadow-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 mt-auto">
                        {isLinkDisabled ? (
                          <motion.div
                            className="flex-1"
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span
                              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-md opacity-50 cursor-not-allowed shadow-lg"
                              aria-disabled="true"
                              tabIndex={-1}
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Live
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              aria-label={`View live demo of ${project.title}`}
                            >
                              <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                              View Live
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          </motion.div>
                        )}
                        {isGithubDisabled ? (
                          <motion.div
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span
                              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-md opacity-50 cursor-not-allowed shadow-sm"
                              aria-disabled="true"
                              tabIndex={-1}
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 rounded-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              aria-label={`View source code of ${project.title} on GitHub`}
                            >
                              <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                              Code
                            </a>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20 lg:mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-500/30"
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
              <h3 
                className="text-2xl lg:text-3xl font-bold mb-4"
              >
                Like What You See?
              </h3>
              <p 
                className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
              >
                I'm always excited to work on new projects and bring creative ideas to life. 
                Let's collaborate and build something amazing together!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  className="bg-white text-blue-600 hover:bg-gray-50 border-0 px-8 py-4 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Contact me to start a project"
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