import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="relative bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border-t border-white/10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
  
        <div className="relative z-10 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              {/* Main Logo/Name */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Chirag Vaibhav Rane
                </h3>
              </motion.div>
  
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-white/70 text-lg max-w-md mx-auto"
              >
                Crafting digital experiences with passion and precision
              </motion.p>
  
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex justify-center space-x-6"
              >
                {[
                  { icon: FaGithub, href: "https://github.com/chiragRane-Projects", color: "hover:text-gray-300" },
                  { icon: FaLinkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
                  { icon: FaEnvelope, href: "mailto:beingchirag6@gmail.com", color: "hover:text-purple-400" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                    className={`text-white/60 ${color} transition-all duration-300 p-2 rounded-full hover:bg-white/10`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </motion.div>
  
              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"
              />
  
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="text-white/50 text-sm flex items-center justify-center gap-2"
              >
                © {currentYear} Chirag Vaibhav Rane. Made with
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FaHeart className="text-red-500" />
                </motion.span>
                All rights reserved.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;