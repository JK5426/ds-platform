import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully! We will get back to you soon. 🚀');
    e.target.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-3xl mx-auto py-10"
    >
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have a question, found a bug, or want to contribute a new algorithm? Drop us a line below.
        </p>
      </header>

      <div className="glass-panel p-8 md:p-12 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-neon focus:border-transparent transition-all"
                placeholder="Ada Lovelace"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-neon focus:border-transparent transition-all"
                placeholder="ada@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-neon focus:border-transparent transition-all"
              placeholder="Contributing to Dynamic Programming"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-white/10 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-neon focus:border-transparent transition-all resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-neon to-brand-cyan hover:from-brand-cyan hover:to-brand-neon text-black font-extrabold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-neon/20"
          >
            Send Message
          </button>

          {status && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center font-bold text-emerald-600 dark:text-brand-lime mt-4"
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
