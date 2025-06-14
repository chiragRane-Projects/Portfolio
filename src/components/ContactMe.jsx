import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://portfolio-backend-n460.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after showing success
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-white/70 text-sm font-medium mb-2 group-focus-within:text-purple-400 transition-colors">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                } disabled:opacity-70`}
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Message Sent!
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <FaPaperPlane />
                    Send Message
                  </div>
                )}
              </motion.button>
            </motion.form>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-white/70 mb-6">
                  Follow me on social media or shoot me an email directly.
                </p>
              </div>

              <div className="flex justify-center space-x-8">
                <motion.a
                  href="https://github.com/chiragRane-Projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <FaGithub className="text-3xl text-white" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/chirag-rane-2a7ba5270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <FaLinkedin className="text-3xl text-white" />
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:beingchirag6@gmail.com"
                  variants={socialIconVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <FaEnvelope className="text-3xl text-white" />
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Quick Response</h4>
                <p className="text-white/70 text-sm">
                  I typically respond within 24 hours. For urgent matters, feel free to reach out directly via email.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;