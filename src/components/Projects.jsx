import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, Calendar, Smartphone,  Stethoscope, Book, CoffeeIcon, DollarSign, BarChart, Rice} from 'lucide-react';

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
    gradient: 'from-blue-200 to-cyan-500'
  },
  {
    title: 'CoffeeCafe',
    description: 'A landing page for a cozy coffee bar with modern design, interactive menu, and online ordering system.',
    link: 'https://coffeenation.netlify.app/',
    github: 'https://github.com/chiragRane-Projects/CoffeeNation.git',
    tech: ['Vite', 'Tailwind', 'Framer Motion'],
    category: 'Landing Page',
    year: '2025',
    status: 'Live',
    icon: CoffeeIcon,
    gradient: 'from-amber-500 to-orange-600'
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
    gradient: 'from-blue-500 to-indigo-600'
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
    gradient: 'from-red-500 to-rose-600'
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
    gradient: 'from-cyan-500 to-sky-600'
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
    gradient: 'from-sky-400 to-purple-300'
  },
  {
    title:'FoodTrient',
    description: 'FoodTrient is built for analyzing nutrients and disease risk of whatever food user intakes',
    link: 'https://foodtrient.vercel.app/',
    github: 'https://github.com/chiragRane-Projects/FoodTrient.git',
    tech: ['NextJS', 'Tailwind CSS', 'Framer-Motion', 'ViteTest', 'GeminiAI API'],
    category: 'Web App',
    year: '2025',
    status: 'Live',
    icon: Banana,
    gradient: 'from-rose-400 to-red-300'
  }
];

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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            Featured Work
          </motion.div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting digital experiences that solve real problems and delight users
          </p>
        </motion.div>

        
        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <Card className={`h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${
                  project.featured ? 'ring-2 ring-blue-200' : ''
                }`}>

                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-100 text-green-700' :
                        project.status === 'Beta' ? 'bg-blue-100 text-blue-700' :
                        project.status === 'Revamp' ? 'bg-emerald-400 text-white' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {project.status}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 font-medium">
                      {project.category}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>


                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        asChild 
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      >
                        <a href={project.link} className="flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                      >
                        <a href={project.github} className="flex items-center justify-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Like What You See?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring creative ideas to life. 
              Let's collaborate and build something amazing together!
            </p>
            <Button 
              asChild 
              className="bg-white text-blue-600 hover:bg-gray-50 border-0 px-8 py-3 font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <a href="mailto:beingchirag6@gmail.com">Start a Project</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;